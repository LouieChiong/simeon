"use client";

import { useEffect, useRef } from "react";

// Looping hero background video. `speed` < 1 slows playback (1 = normal).
export default function HeroVideo({ src, speed = 0.75 }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const apply = () => {
      video.playbackRate = speed;
    };
    apply();
    // Some browsers reset the rate when the source loads or loops.
    video.addEventListener("loadedmetadata", apply);
    video.addEventListener("play", apply);
    return () => {
      video.removeEventListener("loadedmetadata", apply);
      video.removeEventListener("play", apply);
    };
  }, [speed]);

  return (
    <video
      ref={ref}
      className="hero-bg-video"
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
