"use client";
import { trpc } from "@/utils/trpc";

export default function Home() {
  const { data: posts, isLoading, error } = trpc.getPosts.useQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Posts</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <p>⭐ {post.rating} ({post.ratingCount} reviews)</p>
            <p>🔥 {post.featured?.text}</p>
            <div>
              {post.images.map((img: string, index: number) => (
                <img key={index} src={img} alt={post.title} width={150} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
