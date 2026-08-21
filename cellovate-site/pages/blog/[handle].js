import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { POSTS, getPostByHandle } from "../../lib/blog-posts";

export async function getStaticPaths() {
  return {
    paths: POSTS.map((p) => ({ params: { handle: p.handle } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostByHandle(params.handle);
  if (!post) return { notFound: true };
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Cellovate Advanced Peptides</title>
        <meta name="description" content={post.summary.replace(/<[^>]+>/g, "")} />
      </Head>

      <main className="min-h-screen bg-[#0A0A0A] text-white font-sans pb-20">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .article-body p { margin-bottom: 1rem; line-height: 1.75; color: rgba(255,255,255,0.7); font-size: 14.5px; }
          .article-body hr { border-color: rgba(255,255,255,0.08); margin: 1.75rem 0; }
          .article-body ul { margin: 0 0 1rem 1.25rem; list-style: disc; color: rgba(255,255,255,0.7); font-size: 14.5px; }
          .article-body li { margin-bottom: 0.4rem; }
          .article-body strong { color: #fff; font-family: 'Space Grotesk', sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; }
          .article-body a { color: #0039CC; text-decoration: underline; text-underline-offset: 2px; }
        `}</style>

        <header className="max-w-2xl mx-auto px-5 pt-8 flex items-center justify-between">
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

        <article className="max-w-2xl mx-auto px-5 pt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[12px] text-white/40 hover:text-white/70 transition mb-6"
          >
            <ArrowLeft size={13} /> Research notes
          </Link>

          <h1 className="font-display text-2xl sm:text-3xl leading-tight mb-6">
            {post.title}
          </h1>

          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>
      </main>
    </>
  );
}
