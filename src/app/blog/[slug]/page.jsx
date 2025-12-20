import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article className="flex flex-col items-center justify-center min-h-screen py-16 px-4 text-left max-w-3xl mx-auto">
      <p className="text-sm text-muted-foreground mb-2">
        {post.date}
      </p>

      <h1 className="text-4xl font-bold mb-6">
        {post.title}
      </h1>

      <div className="relative w-full h-72 mb-10 rounded-xl overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
