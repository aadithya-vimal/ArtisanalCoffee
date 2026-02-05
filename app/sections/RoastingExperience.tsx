'use client';

import { useState, useEffect } from 'react';
import { GoldText } from '@/components/ui/GoldText';

export function RoastingExperience() {
    const [roastLevel, setRoastLevel] = useState(0.5);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const roastLabels = ['Light', 'Medium', 'Dark'];
    const getRoastLabel = () => {
        if (roastLevel < 0.33) return 'Light Roast';
        if (roastLevel < 0.67) return 'Medium Roast';
        return 'Dark Roast';
    };

    const getRoastDescription = () => {
        if (roastLevel < 0.33) return '☀️ Bright, vibrant acidity dances with delicate floral notes and hints of citrus. The tea-like body reveals subtle berry undertones, creating a refreshing, complex cup perfect for pour-over brewing methods.';
        if (roastLevel < 0.67) return '🍯 Balanced sweetness meets rich caramel and toasted nut undertones. The medium body delivers smooth chocolate notes with a velvety mouthfeel, making it ideal for drip coffee and French press.';
        return '🔥 Bold, smoky flavors dominate with deep dark chocolate and roasted cocoa notes. The full body provides a robust, intense experience with a lingering finish—excellent for espresso and cold brew.';
    };

    const getRoastDetails = () => {
        if (roastLevel < 0.33) return { temp: '385-400°F', time: '8-10 min', color: 'Light Cinnamon', origin: 'Ethiopian Highlands' };
        if (roastLevel < 0.67) return { temp: '410-425°F', time: '11-13 min', color: 'Medium Brown', origin: 'Colombian Supremo' };
        return { temp: '435-450°F', time: '14-16 min', color: 'Dark Chocolate', origin: 'Sumatran Bold' };
    };

    // Calculate brightness based on roast level (lighter = brighter, darker = dimmer)
    const getImageBrightness = () => {
        // Much more dramatic range: 0 (light) = very bright, 1 (dark) = very dark
        const brightness = 160 - (roastLevel * 110); // Range from 160% to 50%
        const contrast = 90 + (roastLevel * 40); // Range from 90% to 130%
        const sepia = roastLevel * 30; // Add sepia tone as it darkens (0% to 30%)
        const saturate = 120 - (roastLevel * 40); // Reduce saturation as it darkens (120% to 80%)

        return `brightness(${brightness}%) contrast(${contrast}%) sepia(${sepia}%) saturate(${saturate}%)`;
    };

    return (
        <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-display text-4xl md:text-section font-bold tracking-section mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-amber-400 to-gold-primary animate-gradient-shift">Perfect Roast</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
                        <span className="text-gold-primary font-semibold">Master the art of roasting.</span> Experience how different roast levels unlock unique <span className="text-amber-400">flavor profiles</span>. From <span className="text-yellow-300">bright and fruity</span> light roasts to <span className="text-orange-400">bold and robust</span> dark roasts, discover your perfect cup. Our <span className="text-gold-primary">interactive slider</span> lets you visualize the transformation of coffee beans as they develop their signature characteristics through <span className="text-amber-300">temperature</span>, <span className="text-gold-light">time</span>, and <span className="text-yellow-400">technique</span>.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                        <div className="glass-layer-2 p-6 rounded-2xl border border-gold-primary/20">
                            <p className="text-lg text-text-secondary leading-relaxed mb-4">
                                {getRoastDescription()}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                                <div>
                                    <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Temperature</p>
                                    <p className="text-gold-primary font-semibold text-lg">{getRoastDetails().temp}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Roast Time</p>
                                    <p className="text-amber-400 font-semibold text-lg">{getRoastDetails().time}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Bean Color</p>
                                    <p className="text-orange-300 font-semibold text-lg">{getRoastDetails().color}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Origin</p>
                                    <p className="text-yellow-300 font-semibold text-lg">{getRoastDetails().origin}</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Slider */}
                        <div className="space-y-6">
                            <div className="flex justify-between text-sm uppercase tracking-wide">
                                {roastLabels.map((label, idx) => (
                                    <span
                                        key={label}
                                        className={`transition-all duration-300 ${(idx === 0 && roastLevel < 0.33) ||
                                            (idx === 1 && roastLevel >= 0.33 && roastLevel < 0.67) ||
                                            (idx === 2 && roastLevel >= 0.67)
                                            ? 'text-gold-primary font-bold scale-110'
                                            : 'text-text-tertiary'
                                            }`}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>

                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={roastLevel}
                                onChange={(e) => setRoastLevel(parseFloat(e.target.value))}
                                className="w-full h-2 bg-bg-tertiary rounded-full appearance-none cursor-pointer slider"
                            />

                            <p className="text-3xl font-display">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-amber-400 to-gold-primary animate-gradient-shift">
                                    {getRoastLabel()}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right: Coffee Beans Roasting Video */}
                    <div className="relative h-[500px] glass-layer-2 rounded-3xl overflow-hidden flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                                style={{
                                    filter: getImageBrightness(),
                                }}
                            >
                                <source src="/images/CoffeeBeansRoastingVideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Overlay gradient for better text visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Roast level indicator */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10">
                                <div className="glass-layer-2 px-6 py-3 rounded-full border border-gold-primary/30">
                                    <p className="text-sm uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-light font-bold">
                                        Roasting in Progress
                                    </p>
                                </div>
                            </div>

                            {/* Steam effect overlay */}
                            {mounted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-2 h-8 bg-gradient-to-t from-white/30 to-transparent rounded-full blur-sm"
                                            style={{
                                                left: `${20 + i * 6}%`,
                                                animation: `rise ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
                                                animationDelay: `${(i % 4) * 0.3}s`,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold-primary), var(--gold-light));
          cursor: pointer;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold-primary), var(--gold-light));
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-80px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
        </section>
    );
}
