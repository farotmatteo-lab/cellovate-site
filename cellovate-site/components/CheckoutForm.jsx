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
};

const LABELS = {
  email: "Email",
  firstName: "First name",
  lastName: "Last name",
  address1: "Address",
  city: "City",
  postalCode: "Postal code",
  country: "Country",
};

function Field({ label, name, value, onChange, error, ...rest }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-mono uppercase tracking-wider text-black/40 mb-1">
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
export default function CheckoutForm({ initial, onBack, onSubmit, submitLabel }) {
  const [form, setForm] = useState({ ...EMPTY, ...(initial || {}) });
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
    <form onSubmit={submit} className="flex-1 overflow-y-auto px-5 pt-5 pb-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-[12px] text-black/40 hover:text-black/70 mb-4"
      >
        <ArrowLeft size={13} /> Back to cart
      </button>

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
        <span className="block text-[11px] font-mono uppercase tracking-wider text-black/40 mb-1">
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
        <span className="block text-[11px] font-mono uppercase tracking-wider text-black/40 mb-1">
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

      {missing.length > 0 && (
        <p className="text-[12px] text-red-600 mt-3">
          Please complete: {missing.map((m) => LABELS[m] || m).join(", ")}.
        </p>
      )}

      <button
        type="submit"
        className="w-full mt-5 bg-[#0A0A0A] text-white rounded-xl py-3.5 font-semibold text-[13px] flex items-center justify-center gap-1.5 active:scale-[0.98] transition"
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
