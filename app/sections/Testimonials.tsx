'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GoldText } from '@/components/ui/GoldText';

const testimonials = [
    {
        quote: "The most exquisite coffee I've ever tasted. Each cup is a journey through the Ethiopian highlands.",
        author: 'Sofia Chen',
        role: 'Coffee Sommelier',
        location: 'San Francisco',
        rating: 5,
        delay: 0,
    },
    {
        quote: 'Belgian chocolate perfection. The attention to detail is unmatched. Every bite reveals new layers of complexity.',
        author: 'Marcus Laurent',
        role: 'Pastry Chef',
        location: 'Brussels',
        rating: 5,
        delay: 1,
    },
    {
        quote: 'A true artisanal experience. Quality you can taste in every bite. This is what premium craftsmanship looks like.',
        author: 'Elena Rodriguez',
        role: 'Food Critic',
        location: 'Madrid',
        rating: 5,
        delay: 2,
    },
    {
        quote: 'The small batch approach makes all the difference. Absolutely premium. My customers notice the quality immediately.',
        author: 'James Wilson',
        role: 'Restaurateur',
        location: 'London',
        rating: 5,
        delay: 0.5,
    },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
    return (
        <div
            className="p-8 md:p-12 relative group transition-all duration-700 hover:-translate-y-2 rounded-3xl overflow-hidden animate-breathing backdrop-blur-xl"
            style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fadeInUp 0.8s ease-out forwards ${index * 0.2}s, breathing 4s ease-in-out infinite ${index * 0.5}s`,
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(255, 215, 0, 0.02) 50%, rgba(212, 175, 55, 0.08) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.1)',
            }}
        >
            {/* Apple-style gradient mesh background */}
            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gold-primary/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-400/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-yellow-300/10 to-orange-300/10 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10 space-y-6 md:space-y-8">
                {/* Visual Hook */}
                <div className="text-gold-primary/30 group-hover:text-gold-primary/60 transition-colors duration-500 scale-150 origin-top-left">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
                    </svg>
                </div>

                <p className="text-xl md:text-3xl font-display font-medium leading-relaxed tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-text-primary to-white group-hover:from-gold-primary group-hover:via-amber-300 group-hover:to-gold-primary transition-all duration-700">
                    &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-6 pt-4 border-t border-gold-primary/10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-gold-primary/20 to-amber-400/20 backdrop-blur-sm flex items-center justify-center text-gold-primary font-display text-xl border border-gold-primary/30 group-hover:border-gold-primary/60 transition-colors duration-500">
                        {testimonial.author.charAt(0)}
                    </div>
                    <div>
                        <p className="font-bold text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-light group-hover:from-gold-primary group-hover:to-amber-400 transition-all duration-300">
                            {testimonial.author}
                        </p>
                        <p className="text-sm text-text-tertiary uppercase tracking-wide">{testimonial.role} • {testimonial.location}</p>
                    </div>

                    {/* Rating stars moved to right */}
                    <div className="ml-auto flex gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-gold-primary text-sm">★</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Testimonials() {
    return (
        <section id="stories" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="font-display text-3xl md:text-section font-bold tracking-section">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-amber-400 to-gold-primary animate-gradient-shift">Connoisseurs</span>
                    </h2>
                    <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
                        Trusted by industry leaders and discerning palates worldwide. Here&apos;s what our community has to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
