// Browser side of the site statistics (see pages/api/t.js, lib/stats.js).
// Anonymous: a random visitor id in localStorage, nothing personal.

const REFERRERS = [
  [/(^|\.)instagram\.com$/, "instagram"],
  [/(^|\.)facebook\.com$|(^|\.)fb\.com$|(^|\.)messenger\.com$/, "facebook"],
  [/(^|\.)t\.me$|(^|\.)telegram\.(org|me)$/, "telegram"],
  [/(^|\.)google\./, "google"],
  [/(^|\.)bing\.com$|(^|\.)duckduckgo\.com$|(^|\.)yahoo\./, "search"],
  [/(^|\.)youtube\.com$|(^|\.)youtu\.be$/, "youtube"],
  [/(^|\.)tiktok\.com$/, "tiktok"],
  [/(^|\.)x\.com$|(^|\.)twitter\.com$|(^|\.)t\.co$/, "x"],
  [/(^|\.)reddit\.com$/, "reddit"],
  [/(^|\.)line\.me$/, "line"],
  [/(^|\.)linktr\.ee$/, "linktree"],
];

function store(kind) {
  try {
    return kind === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

function visitorId() {
  const ls = store("local");
  try {
    let id = ls?.getItem("cv_vid");
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      ls?.setItem("cv_vid", id);
    }
    return id;
  } catch {
    return "";
  }
}

// Where this visit came from: ?utm_source=..., else the referring site,
// else "direct". Kept for the whole browsing session.
function sourceOf() {
  const ss = store("session");
  try {
    const saved = ss?.getItem("cv_src");
    if (saved) return saved;
  } catch {}
  let src = "direct";
  try {
    const params = new URLSearchParams(window.location.search);
    const utm = params.get("utm_source") || params.get("ref") || params.get("src");
    if (utm) {
      src = utm;
    } else if (document.referrer) {
      const host = new URL(document.referrer).hostname.replace(/^www\./, "");
      if (host && host !== window.location.hostname.replace(/^www\./, "")) {
        src = (REFERRERS.find(([re]) => re.test(host)) || [null, host])[1];
      }
    }
  } catch {}
  src = String(src).toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, 40) || "direct";
  try {
    ss?.setItem("cv_src", src);
  } catch {}
  return src;
}

export function track(type, product) {
  if (typeof window === "undefined") return;
  try {
    const body = JSON.stringify({ t: type, p: product || undefined, s: sourceOf(), v: visitorId() });
    const blob = new Blob([body], { type: "application/json" });
    if (!(navigator.sendBeacon && navigator.sendBeacon("/api/t", blob))) {
      fetch("/api/t", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {}
}

// Counts one visit per browsing session, then a page view.
export function trackPage() {
  if (typeof window === "undefined") return;
  const ss = store("session");
  let first = true;
  try {
    first = !ss?.getItem("cv_visit");
    ss?.setItem("cv_visit", "1");
  } catch {}
  if (first) track("visit");
  track("view");
}
