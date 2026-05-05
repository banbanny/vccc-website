"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;        // delay in ms e.g. 100, 200, 300
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("fade-in-visible");
          }, delay);
          observer.unobserve(el); // animate once
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass =
    direction === "up"
      ? "fade-in-up"
      : direction === "left"
      ? "fade-in-left"
      : direction === "right"
      ? "fade-in-right"
      : "fade-in-none";

  return (
    <div ref={ref} className={`fade-in-base ${directionClass} ${className}`}>
      {children}
    </div>
  );
}
