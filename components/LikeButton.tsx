'use client';
import { useEffect, useState } from "react";

export default function LikeButton({ slug }) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(`likes-${slug}`);
    if (stored) setLikes(Number(stored));
  }, [slug]);

  function handleLike() {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${slug}`, String(newLikes));
  }

  return <button onClick={handleLike}>❤️ {likes}</button>;
}
