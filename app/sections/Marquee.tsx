'use client';

export function Marquee() {
  const content = 'ETHIOPIAN ORIGINS → BELGIAN CRAFT → SMALL BATCH → SUSTAINABLE SOURCED';

  return (
    <section className="relative py-8 overflow-hidden -rotate-2 bg-gradient-to-r from-bg-secondary to-bg-tertiary">
      <div className="flex whitespace-nowrap marquee-container">
        <span className="text-2xl uppercase tracking-marquee text-gold-primary font-sans font-medium px-4 marquee-content">
          {content} {content} {content} {content}
        </span>
        <span className="text-2xl uppercase tracking-marquee text-gold-primary font-sans font-medium px-4 marquee-content" aria-hidden="true">
          {content} {content} {content} {content}
        </span>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          animation: marquee 40s linear infinite;
          will-change: transform;
        }

        .marquee-content {
          flex-shrink: 0;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause on hover */
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
