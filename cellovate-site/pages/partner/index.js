// Partner area: login, or ask for a link to create / reset the password.
import Head from "next/head";
import { useState } from "react";
import { readSession } from "../../lib/partnerAuth";
import { ui } from "../../lib/partnerUi";


export async function getServerSideProps({ req }) {
  if (readSession(req)) return { redirect: { destination: "/partner/dashboard", permanent: false } };
  return { props: {} };
}

export default function PartnerLogin() {
  const [mode, setMode] = useState("login"); // login | link | sent
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const post = (url, body) => fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });

  const login = async (e) => {
    e.preventDefault();
    setErr("");
    setBusy(true);
    try {
      const r = await post("/api/partner/login", { email: email.trim(), password: pw });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Wrong email or password.");
      window.location.href = "/partner/dashboard";
    } catch (x) {
      setErr(x.message);
    } finally {
      setBusy(false);
    }
  };

  const requestLink = async (e) => {
    e.preventDefault();
    setErr("");
    setBusy(true);
    try {
      const r = await post("/api/partner/request-link", { email: email.trim() });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "We could not send the email. Try again later.");
      setMode("sent");
    } catch (x) {
      setErr(x.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={ui.page}><main style={ui.wrap}>
      <Head>
        <title>Partner area | Cellovate</title>
        <meta name="robots" content="noindex" />
      </Head>
      <p style={ui.kicker}>Cellovate partners</p>
      <h1 style={ui.h1}>Partner area</h1>
      {mode === "sent" && (
        <>
          <p style={ui.sub}>If {email} is a registered partner email, a link to create your password is on its way. Check your spam folder too.</p>
          <button type="button" style={ui.link} onClick={() => setMode("login")}>Back to login</button>
        </>
      )}
      {mode === "link" && (
        <form onSubmit={requestLink} noValidate>
          <p style={ui.sub}>First time here or forgot your password? Enter your email and we will send you a link to set a new one.</p>
          <label style={ui.label} htmlFor="pe">Email</label>
          <input id="pe" style={ui.input} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {err && <p style={ui.err} role="alert">{err}</p>}
          <button style={ui.btn} type="submit" disabled={busy}>{busy ? "Sending…" : "Send me the link"}</button>
          <br />
          <button type="button" style={ui.link} onClick={() => { setMode("login"); setErr(""); }}>Back to login</button>
        </form>
      )}
      {mode === "login" && (
        <form onSubmit={login} noValidate>
          <p style={ui.sub}>Follow every order placed with your code.</p>
          <label style={ui.label} htmlFor="le">Email</label>
          <input id="le" style={ui.input} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label style={ui.label} htmlFor="lp">Password</label>
          <input id="lp" style={ui.input} type="password" autoComplete="current-password" value={pw} onChange={(e) => setPw(e.target.value)} />
          {err && <p style={ui.err} role="alert">{err}</p>}
          <button style={ui.btn} type="submit" disabled={busy}>{busy ? "Logging in…" : "Log in"}</button>
          <br />
          <button type="button" style={ui.link} onClick={() => { setMode("link"); setErr(""); }}>First time here or forgot your password?</button>
        </form>
      )}
    </main></div>
  );
}
