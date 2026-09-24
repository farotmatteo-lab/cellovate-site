// Server-side Omnisend integration (custom store, REST API).
// Needs OMNISEND_API_KEY in the Vercel environment. Without it every call is a
// silent no-op, so the shop keeps working if Omnisend is removed or suspended.
//
// Events sent:
//   - "started checkout"  when the shopper submits contact + address
//                         -> drives the abandoned checkout automation
//   - "placed order"      when a crypto invoice is issued or a free order is
//                         placed -> stops the abandonment automation
import crypto from "crypto";
import { PRODUCTS, getVariant } from "./products";

export const SITE_URL = "https://www.cellovateadvancedpeptides.com";
const API = "https://api.omnisend.com/api";
const VERSION = "2026-03-15";

function apiKey() {
  return String(process.env.OMNISEND_API_KEY || "").trim();
}

async function call(path, body) {
  const key = apiKey();
  if (!key) return { skipped: true };
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Omnisend-API-Key ${key}`,
      "Omnisend-Version": VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Omnisend ${path} ${res.status}: ${text.slice(0, 300)}`);
  }
  return { ok: true };
}

// Link that rebuilds the cart (items + codes) on /checkout.
export function restoreUrl(items, codes) {
  const payload = {
    i: (items || []).map((it) => [it.id, it.variantKey, it.qty]),
    c: codes || [],
  };
  const token = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${SITE_URL}/checkout?cart=${token}`;
}

function lineItems(items) {
  return (items || [])
    .map((it) => {
      const product = PRODUCTS.find((p) => p.id === it.id);
      if (!product || product.draft) return null;
      const v = getVariant(product, it.variantKey);
      return {
        productID: product.id,
        productVariantID: v.key,
        productTitle: `${product.name} — ${v.label}`,
        productPrice: v.price,
        productQuantity: Math.max(1, parseInt(it.qty, 10) || 1),
        productURL: `${SITE_URL}/shop/${product.handle}`,
        productImageURL: v.image ? `${SITE_URL}${v.image}` : undefined,
        productVariantImageURL: v.image ? `${SITE_URL}${v.image}` : undefined,
      };
    })
    .filter(Boolean);
}

// Creates or updates the contact. Email status is "subscribed" only when the
// shopper ticked the marketing box; otherwise "nonSubscribed" (they still get
// abandoned-checkout reminders, which Omnisend treats as action-triggered).
export async function upsertContact(customer) {
  const now = new Date().toISOString();
  return call("/contacts", {
    firstName: customer.firstName || undefined,
    lastName: customer.lastName || undefined,
    country: customer.country || undefined,
    city: customer.city || undefined,
    tags: ["source: checkout"],
    identifiers: [
      {
        type: "email",
        id: String(customer.email).trim(),
        channels: {
          email: {
            status: customer.marketingOptIn ? "subscribed" : "nonSubscribed",
            statusDate: now,
          },
        },
      },
    ],
  });
}

export async function startedCheckout({ orderId, customer, items, codes, order }) {
  return call("/events", {
    eventName: "started checkout",
    origin: "api",
    eventVersion: "",
    eventID: crypto.randomUUID(),
    eventTime: new Date().toISOString(),
    contact: { email: String(customer.email).trim() },
    properties: {
      abandonedCheckoutURL: restoreUrl(items, codes),
      cartID: orderId,
      currency: "USD",
      value: order.total,
      lineItems: lineItems(items),
    },
  });
}

export async function placedOrder({ orderId, customer, items, order, paid }) {
  return call("/events", {
    eventName: "placed order",
    origin: "api",
    eventVersion: "v2",
    eventID: crypto.randomUUID(),
    contact: { email: String(customer.email).trim() },
    properties: {
      orderID: orderId,
      cartID: orderId,
      totalPrice: order.total,
      subTotalPrice: order.subtotal,
      totalDiscount: order.discount,
      shippingPrice: order.shipping,
      createdAt: new Date().toISOString(),
      currency: "USD",
      paymentStatus: paid ? "paid" : "awaitingPayment",
      fulfillmentStatus: "unfulfilled",
      lineItems: lineItems(items),
    },
  });
}

// Sent once the payment is confirmed (NOWPayments "finished", or a free
// order). Drives the post-purchase, restock and win-back automations.
export async function paidForOrder({ orderId, email, items, order }) {
  return call("/events", {
    eventName: "paid for order",
    origin: "api",
    eventVersion: "v2",
    eventID: crypto.randomUUID(),
    eventTime: new Date().toISOString(),
    contact: { email: String(email).trim() },
    properties: {
      orderID: orderId,
      totalPrice: order.total,
      subTotalPrice: order.subtotal,
      totalDiscount: order.discount,
      shippingPrice: order.shipping,
      createdAt: new Date().toISOString(),
      currency: "USD",
      paymentStatus: "paid",
      fulfillmentStatus: "unfulfilled",
      lineItems: lineItems(items),
    },
  });
}

// The cart travels inside the NOWPayments order_description so the webhook
// can rebuild it (there is no database):
//   "Cellovate Advanced Peptides order | i=tirz.10mg-vial.2,bpc.10mg-pen.1 | c=RND10 | email"
export function encodeCart(items, codes) {
  const i = (items || [])
    .map((it) => `${it.id}.${it.variantKey}.${parseInt(it.qty, 10) || 1}`)
    .join(",");
  const c = (codes || []).join("+");
  return `i=${i}${c ? ` | c=${c}` : ""}`;
}

export function decodeCart(description) {
  const text = String(description || "");
  const im = text.match(/\bi=([^|\s]*)/);
  const cm = text.match(/\bc=([^|\s]*)/);
  const items = (im ? im[1].split(",") : [])
    .filter(Boolean)
    .map((part) => {
      const [id, variantKey, qty] = part.split(".");
      return { id, variantKey, qty: parseInt(qty, 10) || 1 };
    })
    .filter((it) => it.id && it.variantKey);
  const codes = cm ? cm[1].split("+").filter(Boolean) : [];
  return { items, codes };
}

// Never let a marketing call break checkout.
export async function safely(label, fn) {
  try {
    return await fn();
  } catch (err) {
    console.error(`Omnisend ${label} failed`, err.message || err);
    return { error: true };
  }
}
