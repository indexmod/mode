'use client';
import Link from "next/link";
import LikeButton from "./LikeButton";

export default function PostCard({ post }) {
  function share() {
    const url = window.location.origin + "/" + post.slug;
    if (navigator.share) {
      navigator.share({ title: post.title, url });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied");
    }
  }

  return (
    <div style={{border:'1px solid #ccc', padding:16, marginBottom:20}}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>

      <div style={{display:'flex', gap:10}}>
        <Link href={`/${post.slug}`}>Read</Link>
        <LikeButton slug={post.slug} />
        <button onClick={share}>Share</button>
      </div>
    </div>
  );
}
