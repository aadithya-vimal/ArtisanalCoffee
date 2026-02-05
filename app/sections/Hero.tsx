'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GoldText } from '@/components/ui/GoldText';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { Product3DImage } from '@/components/ui/Product3DImage';
import { SteamEffect } from '@/components/ui/SteamEffect';
import { productImages } from '@/lib/productImages';

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Text animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.2
            }
        }
    };

    const charVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-32 px-4">
            <ParticleBackground />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center max-w-7xl">

                {/* Spiderman Style: Massive Text behind/around layer */}
                <motion.div style={{ y: yText, opacity }} className="relative z-20 mb-[-30px] md:mb-[-100px] w-full pointer-events-none mix-blend-overlay md:mix-blend-normal">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="font-display font-black text-[18vw] sm:text-[16vw] md:text-[14vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none pb-10 w-full text-center"
                    >
                        <span className="block mb-2 md:mb-4">
                            {Array.from("ARTISANAL").map((char, i) => (
                                <motion.span key={i} variants={charVariants} style={{ display: 'inline-block' }}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                        <span className="block">
                            {Array.from("COFFEE").map((char, i) => (
                                <motion.span key={i} variants={charVariants} style={{ display: 'inline-block' }}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>
                </motion.div>

                {/* Hero Image Centered */}
                {/* Hero Image - Floating, Large, No Aspect Ratio Constraint */}
                <motion.div style={{ y: yImage }} className="relative z-10 w-full max-w-4xl mx-auto pointer-events-none mt-[-10%] sm:mt-[-12%] md:mt-[-8%]">
                    <Product3DImage
                        src={productImages.hero}
                        alt="Artisanal Coffee"
                        className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                    <SteamEffect className="absolute top-[20%] left-1/2 -translate-x-1/2 w-64 h-64 opacity-50 mix-blend-screen" />
                </motion.div>

                {/* Bottom Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="relative z-30 mt-4 sm:mt-0 md:mt-[-50px] max-w-2xl space-y-6 md:space-y-8 px-4"
                >
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl tracking-tight text-gold-primary drop-shadow-lg">
                        PERFECTION
                    </h2>

                    <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-light leading-relaxed px-2">
                        Where the <span className="text-gold-primary font-semibold">rich heritage</span> of <span className="text-amber-300">Ethiopian wild coffee</span> meets the <span className="text-gold-primary font-semibold">refined elegance</span> of <span className="text-amber-300">Belgian chocolate</span>. Experience a symphony of flavors crafted by master artisans who transform premium ingredients into moments of pure indulgence.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4">
                        <MagneticButton
                            variant="primary"
                            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                            onClick={() => {
                                const element = document.querySelector('#collection');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                        >
                            Explore Collection
                        </MagneticButton>
                        <MagneticButton
                            variant="secondary"
                            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                            onClick={() => {
                                const element = document.querySelector('#process');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                        >
                            Our Story
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
