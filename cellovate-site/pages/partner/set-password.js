// One-time link page: the partner chooses a password, then lands on the dashboard.
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ui } from "../../lib/partnerUi";

export default function SetPassword() {
  const router = useRouter();
  const token = String(router.query.token || "");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [err, setErr] = useState("");
  const [expired, setExpired] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (pw.length < 8) { setErr("Use at least 8 characters."); return; }
    if (pw !== pw2) { setErr("The two passwords are different."); return; }
    setErr("");
    setBusy(true);
    try {
      const r = await fetch("/api/partner/set-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: pw }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) {
        if (r.status === 400 && /expired/.test(j.error || "")) setExpired(true);
        throw new Error(j.error || "Something went wrong. Try again later.");
      }
      window.location.href = "/partner/dashboard";
    } catch (x) {
      setErr(x.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={ui.page}><main style={ui.wrap}>
      <Head>
        <title>Create your password | Cellovate</title>
        <meta name="robots" content="noindex" />
      </Head>
      <p style={ui.kicker}>Cellovate partners</p>
      <h1 style={ui.h1}>Create your password</h1>
      <p style={ui.sub}>You will use it with your email to log in to your partner area.</p>
      <form onSubmit={submit} noValidate>
        <label style={ui.label} htmlFor="np">New password (8+ characters)</label>
        <input id="np" style={ui.input} type="password" autoComplete="new-password" value={pw} onChange={(e) => setPw(e.target.value)} />
        <label style={ui.label} htmlFor="np2">Confirm password</label>
        <input id="np2" style={ui.input} type="password" autoComplete="new-password" value={pw2} onChange={(e) => setPw2(e.target.value)} />
        {err && <p style={ui.err} role="alert">{err}</p>}
        {expired && <p><Link href="/partner" style={{ color: ui.accent }}>Get a new link</Link></p>}
        <button style={ui.btn} type="submit" disabled={busy || !token}>{busy ? "Saving…" : "Save and open my dashboard"}</button>
      </form>
    </main></div>
  );
}
