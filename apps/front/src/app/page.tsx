import Hero from "@/components/hero";
import Posts from "@/components/Posts";
import { fetchPosts } from "@/lib/actions/postActions";

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <main>
      <Hero />
      <Posts posts={posts} />
    </main>
  );
}
