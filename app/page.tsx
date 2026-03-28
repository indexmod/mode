import { getAllPosts } from "../lib/getPosts";
import Feed from "../components/Feed";

export default function Home() {
  const posts = getAllPosts();
  return <main style={{maxWidth:600, margin:'0 auto'}}><Feed allPosts={posts} /></main>;
}
