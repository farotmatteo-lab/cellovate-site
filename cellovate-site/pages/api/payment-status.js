// GET /api/payment-status?paymentId=xxxxxxx
//
// Requires the same NOWPAYMENTS_API_KEY environment variable as create-payment.js.

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { paymentId } = req.query;

  if (!paymentId) {
    return res.status(400).json({ error: "Missing paymentId" });
  }

  try {
    const response = await fetch(
      `https://api.nowpayments.io/v1/payment/${paymentId}`,
      {
        headers: {
          "x-api-key": process.env.NOWPAYMENTS_API_KEY,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: data?.message || "NOWPayments error fetching status" });
    }

    // Possible values include: waiting, confirming, confirmed, sending,
    // partially_paid, finished, failed, refunded, expired
    return res.status(200).json({ status: data.payment_status });
  } catch (err) {
    return res.status(500).json({ error: "Server error fetching payment status" });
  }
}
