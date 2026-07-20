import { useEffect, useState } from "react";
import { Truck } from "lucide-react";

/**
 * Fixed vertical "road" on the right side of the page with a truck
 * that moves down as the user scrolls. Purely decorative.
 */
export function ScrollTruck() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-4 top-24 bottom-24 z-30 hidden lg:flex flex-col items-center"
    >
      {/* road */}
      <div className="relative w-[2px] flex-1 rounded-full bg-primary/15 overflow-hidden">
        <div className="absolute inset-0 road-dash opacity-70" />
      </div>

      {/* truck */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: `calc(${progress * 100}% - 22px)`,
          transition: "top 120ms linear",
        }}
      >
        <div className="truck-bounce grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-6px_rgba(0,0,0,0.35)] ring-4 ring-background">
          <Truck className="h-5 w-5" strokeWidth={2.2} />
        </div>
      </div>
    </div>
  );
}
