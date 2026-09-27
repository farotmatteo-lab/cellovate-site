// Partner dashboard (Cellovate): orders placed with the partner's code. No commission shown.
import Head from "next/head";
import { readSession, partnerOrders } from "../../lib/partnerAuth";
import { ui } from "../../lib/partnerUi";

export async function getServerSideProps({ req, res }) {
  const s = readSession(req);
  if (!s) return { redirect: { destination: "/partner", permanent: false } };
  res.setHeader("Cache-Control", "private, no-store");
  let orders = [];
  try { orders = await partnerOrders(s.partner.code); } catch (e) { console.error("partner orders", e.message); }
  return { props: { name: s.partner.name, code: s.partner.code, orders } };
}

const CONFIRMED = ["paid", "shipped", "finished", "confirmed", "approved"];
const CANCELLED = ["expired", "failed", "refunded", "cancelled", "canceled"];
function group(status) {
  const s = String(status || "").toLowerCase();
  if (CONFIRMED.indexOf(s) >= 0) return "confirmed";
  if (CANCELLED.indexOf(s) >= 0) return "cancelled";
  return "pending";
}
const LABEL = { confirmed: "Paid", pending: "Awaiting payment", cancelled: "Cancelled" };
const COLOR = { confirmed: "#34d399", pending: "#fbbf24", cancelled: "#737373" };
const usd = (n) => "$" + (Math.round(n * 100) / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const monthKey = (ms) => new Date(ms).toLocaleDateString("en-CA", { timeZone: "Asia/Bangkok" }).slice(0, 7);
const sum = (list) => list.reduce((a, o) => a + o.total, 0);

const box = { background: "#141414", border: "1px solid #262626", borderRadius: 10, padding: "18px 20px", flex: "1 1 220px" };
const th = { textAlign: "left", padding: "12px 14px", color: "#a3a3a3", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "1px solid #262626", background: "#101010", whiteSpace: "nowrap" };
const td = { padding: "12px 14px", borderBottom: "1px solid #1f1f1f", whiteSpace: "nowrap" };

export default function Dashboard({ name, code, orders }) {
  const list = orders.map((o) => ({ ...o, g: group(o.status) }));
  const paid = list.filter((o) => o.g === "confirmed");
  const pending = list.filter((o) => o.g === "pending");
  const nowKey = monthKey(Date.now());
  const month = paid.filter((o) => o.date && monthKey(o.date) === nowKey);
  const logout = async () => {
    await fetch("/api/partner/logout", { method: "POST" });
    window.location.href = "/partner";
  };
  return (
    <div style={ui.page}><main style={ui.wide}>
      <Head>
        <title>Your orders | Cellovate partner</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
        <div>
          <p style={ui.kicker}>Cellovate partners · Hi {name}</p>
          <h1 style={ui.h1}>Your orders</h1>
          <p style={ui.sub}>Orders placed with your code <b style={{ color: ui.accent }}>{code}</b>.</p>
        </div>
        <button type="button" style={ui.ghost} onClick={logout}>Log out</button>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "8px 0 28px" }}>
        <div style={box}><div style={{ color: "#a3a3a3", fontSize: 14 }}>This month</div><div style={{ fontSize: 30, fontWeight: 700, margin: "6px 0", color: "#ffffff" }}>{month.length} order{month.length === 1 ? "" : "s"}</div><div style={{ color: "#a3a3a3", fontSize: 14 }}>{usd(sum(month))} in paid orders</div></div>
        <div style={box}><div style={{ color: "#a3a3a3", fontSize: 14 }}>All time</div><div style={{ fontSize: 30, fontWeight: 700, margin: "6px 0", color: "#ffffff" }}>{paid.length} order{paid.length === 1 ? "" : "s"}</div><div style={{ color: "#a3a3a3", fontSize: 14 }}>{usd(sum(paid))} in paid orders</div></div>
        <div style={box}><div style={{ color: "#a3a3a3", fontSize: 14 }}>Awaiting payment</div><div style={{ fontSize: 30, fontWeight: 700, margin: "6px 0", color: "#ffffff" }}>{pending.length}</div><div style={{ color: "#a3a3a3", fontSize: 14 }}>{usd(sum(pending))}</div></div>
      </div>

      {list.length === 0 ? (
        <p style={ui.sub}>No orders yet. Share your code {code} and every order placed with it will show up here.</p>
      ) : (
        <div style={{ overflowX: "auto", border: "1px solid #262626", borderRadius: 10, background: "#141414" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
            <thead><tr><th style={th}>Date</th><th style={th}>Order</th><th style={th}>Order total</th><th style={th}>Status</th></tr></thead>
            <tbody>
              {list.map((o) => (
                <tr key={o.id}>
                  <td style={td}>{o.date ? new Date(o.date).toLocaleDateString("en-GB", { timeZone: "Asia/Bangkok", day: "2-digit", month: "short", year: "numeric" }) : "—"}</td>
                  <td style={td}>{o.id}</td>
                  <td style={td}>{usd(o.total)}</td>
                  <td style={td}><span style={{ color: COLOR[o.g], border: "1px solid " + COLOR[o.g], padding: "2px 8px", borderRadius: 4, fontSize: 13 }}>{LABEL[o.g]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main></div>
  );
}
