// Verified customer reviews on product pages. Renders nothing until the
// product has at least one approved review.
import { Star, BadgeCheck } from "lucide-react";

function StarRow({ value, size = 14 }) {
  return (
    <span className="inline-flex" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          className={n <= Math.round(value) ? "fill-[#F5A524] text-[#F5A524]" : "text-black/15"}
        />
      ))}
    </span>
  );
}

export function RatingSummary({ reviews }) {
  if (!reviews?.count) return null;
  return (
    <a href="#reviews" className="inline-flex items-center gap-2 mb-2 text-[12px] text-black/50 hover:text-black/70">
      <StarRow value={reviews.average} />
      <span>
        {reviews.average.toFixed(1)} · {reviews.count} verified review{reviews.count > 1 ? "s" : ""}
      </span>
    </a>
  );
}

export default function ProductReviews({ reviews }) {
  if (!reviews?.count) return null;
  return (
    <div id="reviews" className="max-w-3xl mt-14 pt-10 border-t border-black/8 scroll-mt-24">
      <h2 className="font-display text-[13px] uppercase tracking-[0.15em] text-black/40 mb-2">
        Verified customer reviews
      </h2>
      <p className="flex items-center gap-2 text-[13px] text-black/55 mb-6">
        <StarRow value={reviews.average} size={16} />
        {reviews.average.toFixed(1)} out of 5 · {reviews.count} review{reviews.count > 1 ? "s" : ""}
      </p>
      <div className="space-y-3">
        {reviews.reviews.map((r) => (
          <div key={r.id} className="bg-white border border-black/8 rounded-xl p-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <StarRow value={r.rating} />
              <span className="text-[13px] font-medium">{r.name}</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700">
                <BadgeCheck size={13} /> Verified order
              </span>
              <span className="text-[11px] text-black/35 ml-auto">
                {new Date(r.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <p className="text-[13.5px] text-black/65 leading-relaxed whitespace-pre-line">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
