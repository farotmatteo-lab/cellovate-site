// GET /api/card-config -> whether card payments (SumUp) are available.
import { sumupEnabled, sumupConfig } from "../../lib/sumup";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const enabled = sumupEnabled();
  res.status(200).json({ enabled, currency: enabled ? sumupConfig().currency : null });
}
