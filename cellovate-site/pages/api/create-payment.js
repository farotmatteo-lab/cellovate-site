// POST /api/create-payment
// Body: { amount: number, orderId: string, payCurrency: "btc" | "eth" | "usdttrc20" }
//
// Requires the environment variable NOWPAYMENTS_API_KEY (the PRIVATE api key,
// e.g. 1AFH...YP1R) set in your hosting provider (Vercel: Project Settings ->
// Environment Variables). Never put this key in frontend code.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { amount, orderId, payCurrency } = req.body || {};

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  const allowedCurrencies = ["btc", "eth", "usdttrc20"];
  const currency = allowedCurrencies.includes(payCurrency) ? payCurrency : "btc";

  try {
    const response = await fetch("https://api.nowpayments.io/v1/payment", {
      method: "POST",
      headers: {
        "x-api-key": process.env.NOWPAYMENTS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price_amount: Number(amount),
        price_currency: "usd",
        pay_currency: currency,
        order_id: orderId || `CEL-${Date.now()}`,
        order_description: "Cellovate Advanced Peptides order",
        // Optional: set this once you have the IPN endpoint deployed
        // ipn_callback_url: process.env.NOWPAYMENTS_IPN_URL,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: data?.message || "NOWPayments error creating payment" });
    }

    return res.status(200).json({
      paymentId: data.payment_id,
      payAddress: data.pay_address,
      payAmount: data.pay_amount,
      payCurrency: data.pay_currency,
      status: data.payment_status,
      expiresAt: data.expiration_estimate_date,
    });
  } catch (err) {
    return res.status(500).json({ error: "Server error creating payment" });
  }
}
