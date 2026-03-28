'use client';
import { useEffect, useRef, useState } from "react";
import PostCard from "./PostCard";

export default function Feed({ allPosts }) {
  const [visible, setVisible] = useState(allPosts.slice(0, 5));
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible((prev) => [
          ...prev,
          ...allPosts.slice(prev.length, prev.length + 5),
        ]);
      }
    });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [allPosts]);

  return (
    <>
      {visible.map((p) => <PostCard key={p.slug} post={p} />)}
      <div ref={ref} style={{height:20}} />
    </>
  );
}
