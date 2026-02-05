'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { GoldText } from '@/components/ui/GoldText';
import { Product3DImage } from '@/components/ui/Product3DImage';
import { productImages } from '@/lib/productImages';

const products = [
    {
        name: 'Midnight Espresso Blend',
        price: '₹1,299',
        image: productImages.espresso,
        description: 'Deep, velvety notes of dark chocolate and black cherry with a smooth, lingering finish.',
        details: '250g | Single Origin Ethiopian | Medium-Dark Roast',
    },
    {
        name: 'Gold Label Hot Chocolate',
        price: '₹999',
        image: productImages.chocolate,
        description: 'Rich artisanal cocoa powder blended with shavings of 70% dark Belgian chocolate.',
        details: '300g | 70% Cacao | Belgian Crafted',
    },
    {
        name: 'Truffle Collection',
        price: '₹1,899',
        image: productImages.truffle,
        description: 'Hand-rolled truffles infused with our signature espresso blend and dusted with gold.',
        details: '12 Pieces | Espresso Infused | 24K Gold Dust',
    },
    {
        name: 'Ceramic Pour-Over Set',
        price: '₹4,499',
        image: productImages.pourOver,
        description: 'Minimalist stoneware designed for the perfect thermal retention and extraction flow.',
        details: 'Handcrafted | Heat Retention | Premium Ceramic',
    },
];

function ProductCard({ product }: { product: typeof products[0] }) {
    return (
        <div className="min-w-[85vw] sm:min-w-[70vw] md:min-w-[600px] snap-center">
            <GlassCard className="h-[600px] flex flex-col justify-between group cursor-pointer">
                {/* Product Image with 3D effect */}
                <div className="relative h-[350px] rounded-2xl overflow-hidden">
                    <Product3DImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <h3 className="font-display text-3xl font-semibold max-w-[70%] text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-light to-white group-hover:from-gold-primary group-hover:via-amber-400 group-hover:to-gold-primary transition-all duration-500">
                            {product.name}
                        </h3>
                        <p className="font-mono text-2xl text-transparent bg-clip-text bg-gradient-to-br from-gold-primary to-gold-light">{product.price}</p>
                    </div>
                    <p className="text-text-secondary text-lg leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                        {product.description}
                    </p>
                    <div className="pt-2 border-t border-gold-primary/10">
                        <p className="text-xs text-text-tertiary font-mono group-hover:text-gold-primary/60 transition-colors duration-300">
                            {product.details}
                        </p>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}

export function ProductShowcase() {
    return (
        <section id="collection" className="py-20 md:py-32 relative overflow-hidden">
            <div className="mb-12 px-4 sm:px-6 md:px-12 lg:px-20">
                <h2 className="font-display text-4xl md:text-section font-bold tracking-section">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-amber-400 to-gold-primary animate-gradient-shift">Collection</span>
                </h2>
                <p className="text-text-secondary text-lg mt-4 max-w-2xl">
                    <span className="text-gold-primary font-semibold">Discover artisanal excellence.</span>
                    Each product in our collection represents the pinnacle of artisanal craftsmanship. From bean selection to final packaging, every detail is meticulously considered.
                </p>
            </div>

            <div className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 md:px-12 lg:px-20 scrollbar-hide pb-4">
                {products.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>

            {/* Progress indicator */}
            <div className="mt-12 flex justify-center gap-2">
                {products.map((_, index) => (
                    <div
                        key={index}
                        className="w-8 md:w-12 h-1 bg-gold-dark rounded-full"
                    />
                ))}
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
