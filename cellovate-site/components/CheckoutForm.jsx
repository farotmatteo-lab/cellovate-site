import React, { useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { COUNTRIES, validateCustomer } from "../lib/countries";

const EMPTY = {
  email: "",
  firstName: "",
  lastName: "",
  company: "",
  address1: "",
  address2: "",
  postalCode: "",
  city: "",
  state: "",
  country: "",
  phone: "",
  notes: "",
  marketingOptIn: false,
  researchUseAck: false,
};

const LABELS = {
  email: "Email",
  firstName: "First name",
  lastName: "Last name",
  address1: "Address",
  city: "City",
  postalCode: "Postal code",
  country: "Country",
  researchUseAck: "Research use confirmation",
};

function Field({ label, name, value, onChange, error, ...rest }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-mono uppercase tracking-wider text-black/55 mb-1">
        {label}
      </span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full bg-[#FAFAFA] border rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-[#0039CC] transition ${
          error ? "border-red-400" : "border-black/10"
        }`}
        {...rest}
      />
    </label>
  );
}

// Contact + shipping details, collected before payment on every order.
export default function CheckoutForm({
  initial,
  onBack,
  onSubmit,
  submitLabel,
  className = "flex-1 overflow-y-auto px-5 pt-5 pb-6",
}) {
  // The research-use confirmation is asked again on every order.
  const [form, setForm] = useState({ ...EMPTY, ...(initial || {}), researchUseAck: false });
  const [missing, setMissing] = useState([]);

  const change = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const { ok, missing: bad } = validateCustomer(form);
    setMissing(bad);
    if (!ok) return;
    onSubmit(form);
  };

  const err = (name) => missing.includes(name);

  return (
    <form onSubmit={submit} className={className}>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[12px] text-black/40 hover:text-black/70 mb-4"
        >
          <ArrowLeft size={13} /> Back to cart
        </button>
      )}

      <h2 className="font-display text-[14px] uppercase tracking-[0.1em] mb-3">
        Contact
      </h2>
      <Field
        label={LABELS.email}
        name="email"
        type="email"
        value={form.email}
        onChange={change}
        error={err("email")}
        placeholder="you@example.com"
        autoComplete="email"
      />
      <label className="flex items-start gap-2.5 mt-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={!!form.marketingOptIn}
          onChange={(e) =>
            setForm((f) => ({ ...f, marketingOptIn: e.target.checked }))
          }
          className="mt-0.5 w-4 h-4 accent-[#0039CC]"
        />
        <span className="text-[12.5px] text-black/65 leading-snug">
          Email me with news and exclusive offers. Unsubscribe anytime.
        </span>
      </label>
      <div className="mt-3">
        <Field
          label="Phone (optional)"
          name="phone"
          value={form.phone}
          onChange={change}
          autoComplete="tel"
        />
      </div>

      <h2 className="font-display text-[14px] uppercase tracking-[0.1em] mt-6 mb-3">
        Shipping address
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <Field
          label={LABELS.firstName}
          name="firstName"
          value={form.firstName}
          onChange={change}
          error={err("firstName")}
          autoComplete="given-name"
        />
        <Field
          label={LABELS.lastName}
          name="lastName"
          value={form.lastName}
          onChange={change}
          error={err("lastName")}
          autoComplete="family-name"
        />
      </div>

      <div className="mt-3">
        <Field
          label="Company (optional)"
          name="company"
          value={form.company}
          onChange={change}
          autoComplete="organization"
        />
      </div>

      <div className="mt-3">
        <Field
          label={LABELS.address1}
          name="address1"
          value={form.address1}
          onChange={change}
          error={err("address1")}
          placeholder="Street and number"
          autoComplete="address-line1"
        />
      </div>

      <div className="mt-3">
        <Field
          label="Apartment, suite, etc. (optional)"
          name="address2"
          value={form.address2}
          onChange={change}
          autoComplete="address-line2"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <Field
          label={LABELS.postalCode}
          name="postalCode"
          value={form.postalCode}
          onChange={change}
          error={err("postalCode")}
          autoComplete="postal-code"
        />
        <Field
          label={LABELS.city}
          name="city"
          value={form.city}
          onChange={change}
          error={err("city")}
          autoComplete="address-level2"
        />
      </div>

      <div className="mt-3">
        <Field
          label="State / Province (optional)"
          name="state"
          value={form.state}
          onChange={change}
          autoComplete="address-level1"
        />
      </div>

      <label className="block mt-3">
        <span className="block text-[11px] font-mono uppercase tracking-wider text-black/55 mb-1">
          {LABELS.country}
        </span>
        <select
          name="country"
          value={form.country}
          onChange={change}
          className={`w-full bg-[#FAFAFA] border rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-[#0039CC] transition ${
            err("country") ? "border-red-400" : "border-black/10"
          }`}
          autoComplete="country-name"
        >
          <option value="">Select a country</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="block mt-3">
        <span className="block text-[11px] font-mono uppercase tracking-wider text-black/55 mb-1">
          Order notes (optional)
        </span>
        <textarea
          name="notes"
          rows={3}
          value={form.notes}
          onChange={change}
          className="w-full bg-[#FAFAFA] border border-black/10 rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-[#0039CC] transition"
        />
      </label>

      <label
        className={`mt-4 flex items-start gap-2.5 rounded-xl border px-3 py-3 text-[12.5px] leading-snug cursor-pointer ${
          err("researchUseAck") ? "border-red-400 bg-red-50" : "border-black/10 bg-[#FAFAFA]"
        }`}
      >
        <input
          type="checkbox"
          checked={!!form.researchUseAck}
          onChange={(e) => setForm((f) => ({ ...f, researchUseAck: e.target.checked }))}
          className="mt-0.5 accent-[#0039CC]"
        />
        <span className="text-black/70">
          I confirm I am 18 or older and that these products are purchased for laboratory research
          use only — not for human or veterinary consumption. I accept the{" "}
          <a href="/terms" target="_blank" className="text-[#0039CC] underline">
            Terms of Sale
          </a>
          .
        </span>
      </label>

      {missing.length > 0 && (
        <p className="text-[12px] text-red-600 mt-3">
          Please complete: {missing.map((m) => LABELS[m] || m).join(", ")}.
        </p>
      )}

      <button
        type="submit"
        className="w-full mt-6 bg-[#0039CC] hover:bg-[#002FA8] text-white rounded-2xl py-4 font-semibold text-[15px] flex items-center justify-center gap-1.5 shadow-lg shadow-[#0039CC]/30 active:scale-[0.99] transition"
      >
        {submitLabel || "Continue"}
        <ChevronRight size={15} strokeWidth={2.5} />
      </button>

      <p className="text-center text-[10px] text-black/25 pt-3">
        Research use only — not for human consumption.
      </p>
    </form>
  );
}
