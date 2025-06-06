import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Konstantinos Kalaitzidis' Blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="mb-12 text-3xl font-medium tracking-tight">Writing</h1>
      
      <div className="space-y-8">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="block transition-opacity duration-200 hover:opacity-80"
              href={`/blog/${post.slug}`}
            >
              <div className="flex flex-col space-y-1">
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {formatDate(post.metadata.publishedAt, true)}
                </p>
                <h2 className="text-xl text-black dark:text-white font-medium">
                  {post.metadata.title}
                </h2>
              </div>
            </Link>
          ))}
      </div>

      {/* <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-neutral-600 dark:text-neutral-400">
          Subscribe to my personal mailing list to get updates in your inbox.
        </p>
        <button className="mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-90 transition-opacity">
          Subscribe
        </button>
      </div> */}
    </section>
  );
}
