'use client';

import { useState, useEffect } from 'react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { GoldText } from '@/components/ui/GoldText';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'Our Process', href: '#process' },
    { name: 'Experience', href: '#experience' },
    { name: 'Stories', href: '#stories' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pt-6',
                scrolled ? 'pt-4' : 'pt-8'
            )}
        >
            <div
                className={cn(
                    'glass-layer-2 rounded-full px-8 py-4 flex items-center gap-12 transition-all duration-500',
                    scrolled
                        ? 'bg-bg-primary/80 backdrop-blur-xl border-gold-primary/30 shadow-lg scale-95'
                        : 'bg-transparent border-transparent'
                )}
            >
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-display font-bold text-2xl tracking-tight"
                >
                    <span className="text-white">Artisanal</span>
                    <GoldText>Coffee</GoldText>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium text-text-secondary hover:text-gold-primary transition-colors tracking-wide uppercase"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <MagneticButton
                        variant="primary"
                        className="px-6 py-2 text-sm"
                        onClick={() => {
                            const element = document.querySelector('#collection');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                    >
                        Shop Now
                    </MagneticButton>
                </div>
            </div>
        </nav>
    );
}
