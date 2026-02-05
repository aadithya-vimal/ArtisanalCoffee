'use client';

import { useEffect, useState } from 'react';
import { productImages } from '@/lib/productImages';

export function ParticleBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-bg-primary">
            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-10"
                style={{
                    backgroundImage: `url("${productImages.noise}")`,
                    filter: 'contrast(120%) brightness(120%)',
                }}
            />

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary" />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-scarlet-primary/20 rounded-full blur-[120px] animate-float opacity-60" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-primary/10 rounded-full blur-[120px] animate-float opacity-50" style={{ animationDelay: '2s', animationDuration: '8s' }} />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-scarlet-light/5 rounded-full blur-[100px] animate-float opacity-40" style={{ animationDelay: '4s', animationDuration: '10s' }} />

            {/* CSS Particles - Only render on client to avoid hydration mismatch */}
            {mounted && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute opacity-20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${15 + Math.random() * 20}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 animate-roast"
                                style={{
                                    animationDelay: `${Math.random() * 5}s`,
                                    transform: `rotate(${Math.random() * 360}deg)`,
                                }}
                            >
                                <path d="M12 2C9 2 6 3 4 5C2 7 1 10 1 13C1 18 5 22 10 22C15 22 19 19 21 15C22 13 23 10 22 7C21 4 17 2 12 2ZM12 4C16 4 19 6 20 8C19 10 17 12 15 14C13 16 10 18 7 19C5 18 3 16 3 13C3 11 4 9 5 7C7 5 9 4 12 4Z" />
                                <path d="M12 4C11 7 9 9 7 11C10 12 13 14 15 17C17 14 19 11 20 8" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
                            </svg>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
