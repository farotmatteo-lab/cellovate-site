import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS } from "../../lib/blog-posts";

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Research Notes | Cellovate Advanced Peptides</title>
        <meta
          name="description"
          content="Research guides on peptide mechanisms, purity standards, and laboratory methodology."
        />
      </Head>

      <main className="min-h-screen bg-[#0A0A0A] text-white font-sans pb-20">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
        `}</style>

        <header className="max-w-3xl mx-auto px-5 pt-8 flex items-center justify-between">
          <Link href="/" className="block">
            <img src="/logo.png" alt="Cellovate" className="h-7 w-auto" />
          </Link>
          <Link
            href="/shop"
            className="text-[12px] font-medium border border-white/15 rounded-full px-4 py-2 hover:border-[#0039CC] transition"
          >
            Shop
          </Link>
        </header>

        <section className="max-w-3xl mx-auto px-5 pt-14 pb-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0039CC] font-mono mb-3">
            Research notes
          </p>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight">
            Guides on mechanisms, purity, and methodology.
          </h1>
        </section>

        <section className="max-w-3xl mx-auto px-5 space-y-3">
          {POSTS.map((post) => (
            <Link
              key={post.handle}
              href={`/blog/${post.handle}`}
              className="block bg-[#131313] border border-white/8 rounded-2xl p-5 hover:border-[#0039CC]/40 transition group"
            >
              <h2 className="font-display text-[17px] leading-snug mb-2">
                {post.title}
              </h2>
              <div
                className="text-[13px] text-white/45 leading-relaxed line-clamp-2"
                dangerouslySetInnerHTML={{ __html: post.summary }}
              />
              <span className="inline-flex items-center gap-1.5 text-[12px] text-[#0039CC] mt-3 group-hover:gap-2.5 transition-all">
                Read more <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
