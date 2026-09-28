// Wholesale enquiry as a short chat: one question at a time, quick-reply
// chips where possible, then a summary sent to /api/wholesale. Qualifies the
// lead (business type, volume, products, timeline) before it reaches us.
import { useEffect, useRef, useState } from "react";
import { Send, Loader2, Check, RotateCcw } from "lucide-react";

const STEPS = [
  {
    key: "businessType",
    ask: "What best describes your business?",
    options: [
      "Research laboratory / university",
      "Distributor / wholesaler",
      "Online research-peptide store",
      "Other",
    ],
    other: "Other",
  },
  { key: "company", ask: "What's your company name?", input: "text", placeholder: "Company name" },
  {
    key: "website",
    ask: "Website or social page? (optional)",
    input: "text",
    placeholder: "https://…",
    optional: true,
  },
  { key: "country", ask: "Which country do you ship to?", input: "text", placeholder: "Country" },
  {
    key: "products",
    ask: "Which products are you interested in? Pick all that apply.",
    multi: true,
    optionsFrom: "products",
  },
  {
    key: "volume",
    ask: "Roughly how many units per month?",
    options: ["Under 50", "50–200", "200–500", "500–1,000", "1,000+"],
  },
  { key: "format", ask: "Which format?", options: ["Vials", "Pens", "Both"] },
  {
    key: "frequency",
    ask: "How often would you order?",
    options: ["One-off order", "Monthly", "Every 2–3 months", "Not sure yet"],
  },
  {
    key: "privateLabel",
    ask: "Do you need private label (your brand on the packaging)?",
    options: ["Yes", "No", "Maybe later"],
  },
  {
    key: "timeline",
    ask: "When would you like to place a first order?",
    options: ["As soon as possible", "Within a month", "1–3 months", "Just comparing suppliers"],
  },
  { key: "name", ask: "Your name?", input: "text", placeholder: "Full name" },
  { key: "email", ask: "Best email to send your quote to?", input: "email", placeholder: "you@company.com" },
  {
    key: "phone",
    ask: "WhatsApp or Telegram, if you prefer chatting there? (optional)",
    input: "text",
    placeholder: "+1 … or @handle",
    optional: true,
  },
  {
    key: "message",
    ask: "Anything else we should know? Target prices, current supplier, questions… (optional)",
    input: "textarea",
    placeholder: "Your message",
    optional: true,
  },
];

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

function Bubble({ from, children }) {
  const bot = from === "bot";
  return (
    <div className={`flex ${bot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed whitespace-pre-line ${
          bot ? "bg-white border border-black/8 rounded-tl-md" : "bg-[#0039CC] text-white rounded-tr-md"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function WholesaleChat({ products = [] }) {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState("");
  const [picked, setPicked] = useState([]);
  const [otherMode, setOtherMode] = useState(false);
  const [ack, setAck] = useState(false);
  const [status, setStatus] = useState("chat"); // chat | review | sending | done
  const [error, setError] = useState(null);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  const current = STEPS[step];

  // Keep the latest message in view, but only once the visitor has started
  // (never scroll the page on load).
  const started = useRef(false);
  useEffect(() => {
    if (!started.current) {
      started.current = true;
      return;
    }
    const box = endRef.current?.parentElement;
    if (box) box.scrollTop = box.scrollHeight;
    inputRef.current?.focus({ preventScroll: true });
  }, [step, status, otherMode]);

  const optionsFor = (s) => (s.optionsFrom === "products" ? [...products, "Private label / custom"] : s.options);

  const commit = (value) => {
    setError(null);
    const s = STEPS[step];
    const v = Array.isArray(value) ? value : String(value ?? "").trim();
    if (!s.optional && (!v || (Array.isArray(v) && !v.length))) return setError("Please answer to continue.");
    if (s.input === "email" && !emailOk(v)) return setError("Please enter a valid email.");
    setAnswers((a) => ({ ...a, [s.key]: v }));
    setDraft("");
    setPicked([]);
    setOtherMode(false);
    if (step + 1 < STEPS.length) setStep(step + 1);
    else setStatus("review");
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setDraft("");
    setPicked([]);
    setAck(false);
    setError(null);
    setStatus("chat");
  };

  const submit = async () => {
    if (!ack) return setError("Please confirm the statement above.");
    setError(null);
    setStatus("sending");
    try {
      const res = await fetch("/api/wholesale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, ack: true }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setError(err.message);
      setStatus("review");
    }
  };

  const display = (v) => (Array.isArray(v) ? v.join(", ") || "(skipped)" : v || "(skipped)");

  return (
    <div className="bg-[#F4F5F8] border border-black/8 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3.5 bg-white border-b border-black/8">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        <div>
          <p className="text-[14px] font-semibold">Cellovate wholesale desk</p>
          <p className="text-[11.5px] text-black/45">Usually replies within 24 hours</p>
        </div>
      </div>

      <div className="px-4 sm:px-5 py-5 space-y-3 max-h-[560px] overflow-y-auto">
        <Bubble from="bot">
          Hi! A few quick questions so we can prepare an accurate wholesale quote. It takes about a minute.
        </Bubble>

        {STEPS.slice(0, status === "chat" ? step : STEPS.length).map((s) => (
          <div key={s.key} className="space-y-3">
            <Bubble from="bot">{s.ask}</Bubble>
            <Bubble from="user">{display(answers[s.key])}</Bubble>
          </div>
        ))}

        {status === "chat" && (
          <>
            <Bubble from="bot">{current.ask}</Bubble>
            <div className="pt-1">
              {(current.options || current.optionsFrom) && !otherMode && (
                <div className="flex flex-wrap gap-2 justify-end">
                  {optionsFor(current).map((o) => {
                    const on = picked.includes(o);
                    return (
                      <button
                        key={o}
                        type="button"
                        onClick={() => {
                          if (current.multi) setPicked((p) => (on ? p.filter((x) => x !== o) : [...p, o]));
                          else if (current.other === o) setOtherMode(true);
                          else commit(o);
                        }}
                        className={`rounded-full border px-3.5 py-1.5 text-[13px] transition ${
                          on
                            ? "bg-[#0039CC] border-[#0039CC] text-white"
                            : "bg-white border-[#0039CC]/30 text-[#0039CC] hover:border-[#0039CC]"
                        }`}
                      >
                        {current.multi && on && <Check size={12} className="inline mr-1 -mt-0.5" />}
                        {o}
                      </button>
                    );
                  })}
                  {current.multi && (
                    <button
                      type="button"
                      onClick={() => commit(picked)}
                      className="rounded-full bg-[#0A0A0A] text-white px-4 py-1.5 text-[13px] font-semibold"
                    >
                      Continue{picked.length ? ` (${picked.length})` : ""}
                    </button>
                  )}
                </div>
              )}

              {(current.input || otherMode) && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    commit(draft);
                  }}
                  className="flex items-end gap-2"
                >
                  {current.input === "textarea" ? (
                    <textarea
                      ref={inputRef}
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      rows={3}
                      maxLength={1500}
                      placeholder={current.placeholder}
                      className="flex-1 rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#0039CC]"
                    />
                  ) : (
                    <input
                      ref={inputRef}
                      type={current.input === "email" ? "email" : "text"}
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      maxLength={200}
                      placeholder={otherMode ? "Tell us more" : current.placeholder}
                      className="flex-1 rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#0039CC]"
                    />
                  )}
                  <button
                    type="submit"
                    aria-label="Send"
                    className="h-[42px] w-[42px] shrink-0 rounded-xl bg-[#0039CC] text-white flex items-center justify-center"
                  >
                    <Send size={16} />
                  </button>
                </form>
              )}
              {current.optional && (
                <div className="text-right mt-2">
                  <button type="button" onClick={() => commit("")} className="text-[12px] text-black/45 hover:text-black/70">
                    Skip
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {(status === "review" || status === "sending") && (
          <div className="space-y-3">
            <Bubble from="bot">Thanks! Please confirm and send your request.</Bubble>
            <label className="flex items-start gap-2.5 bg-white border border-black/8 rounded-xl p-3.5 text-[12.5px] text-black/65 leading-snug cursor-pointer">
              <input
                type="checkbox"
                checked={ack}
                onChange={(e) => setAck(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#0039CC]"
              />
              <span>
                I confirm this is a business enquiry, that I am 18 or older, and that the products are for
                laboratory research use (or resale to research customers) only — not for human or veterinary use.
              </span>
            </label>
            <div className="flex items-center justify-between gap-3">
              <button type="button" onClick={restart} className="inline-flex items-center gap-1.5 text-[12.5px] text-black/45 hover:text-black/70">
                <RotateCcw size={13} /> Start over
              </button>
              <button
                type="button"
                onClick={submit}
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0039CC] hover:bg-[#0030AD] text-white font-semibold text-[14px] px-5 py-3 disabled:opacity-60"
              >
                {status === "sending" && <Loader2 size={15} className="animate-spin" />}
                Send my request
              </button>
            </div>
          </div>
        )}

        {status === "done" && (
          <Bubble from="bot">
            {`Request received — thank you${answers.name ? `, ${String(answers.name).split(" ")[0]}` : ""}! Our wholesale team will reply to ${answers.email} within 24 hours (business days) with pricing for your volume. A confirmation is on its way to your inbox.`}
          </Bubble>
        )}

        {error && <p className="text-[12.5px] text-red-600 text-right">{error}</p>}
        <div ref={endRef} />
      </div>
    </div>
  );
}
