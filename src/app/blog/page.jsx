import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog din Cåtun",
  description: "Articole, concerte și povești din turneu",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Blog din Cåtun
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl overflow-hidden border hover:shadow-xl transition"
          >
            <div className="relative h-56">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                {post.date}
              </p>
              <h2 className="text-xl font-semibold mt-2">
                {post.title}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
