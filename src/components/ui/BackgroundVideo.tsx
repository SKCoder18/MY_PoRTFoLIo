"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let tl: gsap.core.Timeline;

    const setupScrollTrigger = () => {
      // Get all sections on the page
      const sections = gsap.utils.toArray("section") as HTMLElement[];
      const totalSections = Math.max(1, sections.length);
      
      // Stop 2 seconds early to hide the grid frame at the end
      const usableDuration = Math.max(0, (video.duration || 10) - 2); 
      const timeChunk = usableDuration / totalSections;

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.5, // Increased smoothing for ultra-fluid video scrubbing
        },
      });

      // Map each section's height to the timeline duration.
      // This guarantees that as you scroll through a specific section,
      // you will scrub through exactly one timeChunk of the video.
      sections.forEach((sec, i) => {
        tl.to(video, {
          currentTime: (i + 1) * timeChunk,
          duration: sec.offsetHeight || 1000, 
          ease: "none",
        });
      });
    };

    if (video.readyState >= 1) {
      setupScrollTrigger();
    } else {
      video.addEventListener("loadedmetadata", setupScrollTrigger);
    }

    return () => {
      if (tl) {
        tl.kill();
      }
      // Only kill scrolltriggers created by this component if needed, 
      // but usually killing the timeline is enough for cleanup.
      video.removeEventListener("loadedmetadata", setupScrollTrigger);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#050816]">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover opacity-40 mix-blend-screen"
        src="/videos/hero.mp4"
      />
      {/* Cinematic Color Grading Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/50 to-transparent mix-blend-multiply pointer-events-none" />
    </div>
  );
}
