import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "src/content/blog");

export function getAllPosts() {
  return fs
    .readdirSync(BLOG_PATH)
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const content = fs.readFileSync(
        path.join(BLOG_PATH, file),
        "utf-8"
      );

      const { data } = matter(content);

      return {
        slug,
        ...data,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  return {
    content,
    ...data,
  };
}
