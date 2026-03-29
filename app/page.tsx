import posts from "../posts.json";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <main style={{ maxWidth: 600, margin: "0 auto" }}>
      <Feed allPosts={posts} />
    </main>
  );
}