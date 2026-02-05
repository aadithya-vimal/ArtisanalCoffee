'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GoldText } from '@/components/ui/GoldText';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useInView } from '@/hooks/useInView';

const features = [
    {
        title: 'Single Origin',
        description: 'Sourced from the finest Ethiopian highlands, each bean tells a story of terroir and tradition. Our direct trade relationships ensure ethical sourcing and exceptional quality.',
        detailText: 'Altitude: 1,800-2,200m | Varietals: Heirloom | Process: Natural & Washed',
        icon: '◉',
        offset: 0,
    },
    {
        title: 'Bean-to-Bar',
        description: 'Belgian chocolate crafted with precision, from cacao selection to final tempering. Every bar is a masterpiece of flavor and texture.',
        detailText: 'Origin: Single-Estate Cacao | Cocoa: 70% Minimum | Crafted in Brussels',
        icon: '◈',
        offset: 40,
    },
    {
        title: 'Small Batch',
        description: 'Limited production ensures uncompromising quality in every roast and every bar. We roast only 47 batches per week to maintain our exacting standards.',
        detailText: 'Weekly Production: 47 Batches | Batch Size: 15kg | Quality Score: 90+',
        icon: '◬',
        offset: 80,
        showCounter: true,
    },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const { ref, isInView } = useInView(0.2);

    return (
        <div
            ref={ref}
            className="md:mt-0"
            style={{
                marginTop: `${feature.offset}px`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
            }}
        >
            <div className="h-auto md:h-[550px] p-10 flex flex-col justify-between relative overflow-hidden group rounded-3xl bg-bg-secondary border border-white/5 transition-all duration-500 hover:border-gold-primary/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold-primary/10">

                {/* Spotlight Gradient */}
                <div
                    className="absolute -inset-px bg-gradient-to-r from-transparent via-gold-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-md pointer-events-none"
                    style={{ transform: 'translateY(-100%)', animation: 'border-rotate 4s linear infinite' }}
                />

                {/* Radial Glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-gold-primary/5 to-transparent rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 space-y-6">
                    <span className="inline-block px-4 py-2 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-light text-xs font-bold tracking-widest uppercase">
                        Feature 0{index + 1}
                    </span>

                    <div className="text-7xl md:text-8xl mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 origin-left">
                        {feature.showCounter ? (
                            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-br from-gold-primary via-amber-400 to-gold-light">
                                <AnimatedCounter target={47} />
                            </span>
                        ) : (
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold-primary via-amber-400 to-gold-light animate-gradient-shift">
                                {feature.icon}
                            </span>
                        )}
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-light to-white group-hover:from-gold-primary group-hover:via-amber-400 group-hover:to-gold-primary transition-all duration-500">
                            {feature.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed text-sm md:text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-text-primary group-hover:to-gold-primary/70 transition-all duration-300">
                            {feature.description}
                        </p>
                        <div className="pt-4 border-t border-gold-primary/10">
                            <p className="text-xs text-text-tertiary font-mono leading-relaxed group-hover:text-gold-primary/60 transition-colors duration-300">
                                {feature.detailText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Features() {
    return (
        <section id="process" className="py-12 md:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="text-center mb-10 md:mb-20">
                    <h2 className="font-display text-3xl md:text-section font-bold tracking-section mb-4 md:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-amber-400 to-gold-primary animate-gradient-shift">Our Process</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
                        <span className="text-gold-primary font-semibold">Crafted with precision, delivered with passion.</span> From sourcing the finest beans at high-altitude Ethiopian farms to hand-rolling Belgian chocolate truffles, every step of our process is designed to create extraordinary experiences. We believe in transparency, sustainability, and the relentless pursuit of perfection.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
