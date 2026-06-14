'use client'

import React, { useState, useEffect, useRef } from 'react';


const CountingNumber = ({
  value,
  suffix = '',
  duration = 2
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Guard against invalid values
    if (value <= 0 || !Number.isFinite(value)) {
      setCount(0);
      return;
    }

    const startTime = performance.now();
    const endValue = Math.floor(value);
    const totalMs = Math.max(300, duration * 1000); // minimum duration for UX

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / totalMs);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * endValue);
      setCount(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  return (
    <div className="text-3xl font-bold text-blue-200 text-glow-white">
      {count}
      {suffix}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Background Video */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/Discover.png"
          onLoadedData={() => console.log('Hero background video loaded')}
          onError={(e) => console.error('Hero background video failed to load', e)}
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Removed the full-screen gradient veil so video is visible */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/20 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-200/20 rounded-full filter blur-3xl" />
      </div>

      <div className="absolute inset-0 z-20">
        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          {/* Top Heading */}
          <div className="pt-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-0">
              <span className="text-sky-300 animated-text text-glow-white">The Best Marketing Agency</span>
              <br />
              <span className="text-sky-200 animated-text text-glow-white">in Pune and India</span>
            </h1>
          </div>

          {/* Subheading + CTAs */}
          {/* <div className="mt-6 md:mt-8 text-center">
            <p className="mx-auto max-w-2xl text-base md:text-lg text-sky-100/90">
              Grow faster with data-backed campaigns, ROI-driven execution, and transparent reporting.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3 md:gap-4">
              <a
                href="/contact-us"
                className="inline-flex items-center rounded-lg bg-sky-500 hover:bg-sky-400 text-white px-5 py-2.5 text-sm md:text-base font-semibold shadow-lg shadow-sky-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Get a free marketing audit"
              >
                Get Free Audit
              </a>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 text-sm md:text-base font-semibold ring-1 ring-white/30 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Call our marketing experts"
              >
                Call Experts
              </a>
            </div>
          </div> */}

          {/* Bottom Stats */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="text-center px-5 py-4 rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[0_6px_28px_rgba(255,255,255,0.2)]">
              
              <CountingNumber value={50} suffix="+" />
              <div className="text-sky-200 font-medium text-glow-white">Brands Trust Us</div>
            </div>
            <div className="text-center px-5 py-4 rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[0_6px_28px_rgba(255,255,255,0.2)]">
              <CountingNumber value={100} suffix="%" />
              <div className="text-sky-200 font-medium text-glow-white">Transparent Reporting</div>
            </div>
            <div className="text-center px-5 py-4 rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[0_6px_28px_rgba(255,255,255,0.2)]">
              <CountingNumber value={100} suffix="+" />
              <div className="text-sky-200 font-medium text-glow-white">ROI Driven Strategies</div>
            </div>
          </div>
        </div>
      </div>
      {/* Animated gradient overlay above video for subtle motion and readability */}
      <div className="absolute inset-0 z-[15] opacity-30 mix-blend-overlay gradient-shift" />
    </section>
  );
};

export default Hero;