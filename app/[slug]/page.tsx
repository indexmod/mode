import posts from "../../posts.json";
import { markdownToHtml } from "../../lib/markdownToHtml";

export default async function Page({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  const html = await markdownToHtml(post.content);

  return (
    <main style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}