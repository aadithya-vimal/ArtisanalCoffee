'use client';

import { useEffect, useState } from 'react';

export function SteamEffect({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [particles] = useState(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: 20 + i * 5,
      duration: 3 + (i % 3) * 0.5, // Fixed durations: 3s, 3.5s, 4s
      delay: (i % 4) * 0.5, // Fixed delays: 0s, 0.5s, 1s, 1.5s
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`relative ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bottom-0 w-2 h-8 bg-gradient-to-t from-white/40 to-transparent rounded-full blur-sm"
          style={{
            left: `${particle.left}%`,
            animation: `rise ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
