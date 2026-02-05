'use client';

import { useState } from 'react';
import { GoldText } from '@/components/ui/GoldText';

export function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        // Confetti effect
        createConfetti();

        setTimeout(() => {
            setEmail('');
            setIsSubmitted(false);
        }, 3000);
    };

    const createConfetti = () => {
        const colors = ['#C41E3A', '#D4AF37', '#FF6B6B', '#F4E4BC'];

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.setProperty('--tx', `${(Math.random() - 0.5) * 400}px`);
            confetti.style.setProperty('--ty', `${(Math.random() - 0.5) * 400}px`);

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 1000);
        }
    };

    return (
        <section className="py-20 md:py-32 relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-2xl mx-auto">
                    <div className="relative p-8 md:p-12 glass-layer-2 rounded-3xl border-gradient">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                            Join The <GoldText>Inner Circle</GoldText>
                        </h2>

                        <p className="text-center text-text-secondary mb-6 md:mb-8 text-sm md:text-base">
                            Exclusive access to limited releases and artisan insights
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-1 px-4 md:px-6 py-3 md:py-4 glass-layer-1 rounded-full border-2 border-transparent focus:border-gold-primary outline-none text-text-primary placeholder-text-tertiary transition-all duration-300 text-sm md:text-base"
                            />

                            <button
                                type="submit"
                                disabled={isSubmitted}
                                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-scarlet-dark to-scarlet-primary text-gold-primary font-semibold hover:shadow-[0_0_40px_rgba(196,30,58,0.4)] transition-all duration-500 disabled:opacity-50 text-sm md:text-base whitespace-nowrap"
                            >
                                {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .border-gradient {
          position: relative;
        }

        .border-gradient::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(90deg, var(--scarlet-primary), var(--gold-primary), var(--scarlet-primary));
          background-size: 200% auto;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: border-rotate 4s linear infinite;
          pointer-events: none;
        }

        :global(.confetti) {
          position: fixed;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: confetti-fall 1s ease-out forwards;
          pointer-events: none;
          z-index: 9999;
        }

        @keyframes confetti-fall {
          to {
            transform: translate(var(--tx), var(--ty)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
        </section>
    );
}
