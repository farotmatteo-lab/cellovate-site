// GET /api/stock -> { stock: { "productId::variantKey": qty } }
// Thailand stock, used by the browser to show availability to Thailand
// visitors and to price the cart the same way the server does.
import { getThStock } from "../../lib/stock";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate=60");
  res.status(200).json({ stock: await getThStock() });
}
