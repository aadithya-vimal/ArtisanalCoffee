'use client';

import { GoldText } from '@/components/ui/GoldText';

export function Footer() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="relative py-12 md:py-20 bg-bg-secondary mt-12 md:mt-20 z-10">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-4 space-y-6">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="font-display font-bold text-3xl tracking-tight block"
                        >
                            <span className="text-white">Artisanal</span>
                            <GoldText>Coffee</GoldText>
                        </a>
                        <p className="text-text-secondary max-w-sm leading-relaxed">
                            Crafting moments of pure indulgence through ethically sourced Ethiopian coffee and premium Belgian chocolate. Every cup, every bite, tells a story of passion and precision.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-bg-primary transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-bg-primary transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-bg-primary transition-all duration-300 hover:scale-110">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="font-display text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-light">Explore</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Collection', href: '#collection' },
                                { name: 'Our Process', href: '#process' },
                                { name: 'Experience', href: '#experience' },
                                { name: 'Testimonials', href: '#stories' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="text-text-secondary hover:text-gold-primary transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h4 className="font-display text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-light">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Sustainability', 'Wholesale', 'Careers'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-text-secondary hover:text-gold-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter - Mini version */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="font-display text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-light">Stay Connected</h4>
                        <p className="text-text-secondary text-sm">Join our community for exclusive releases, brewing tips, and behind-the-scenes stories from our roastery.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-gold-primary transition-colors text-white placeholder:text-text-tertiary"
                            />
                            <button className="bg-gradient-to-r from-gold-primary to-gold-light text-bg-primary px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform">
                                →
                            </button>
                        </div>
                        <div className="pt-4 space-y-2 text-sm text-text-tertiary">
                            <p>📍 123 Roastery Lane, Coffee District</p>
                            <p>📧 hello@artisanalcoffee.com</p>
                            <p>📞 +1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-text-tertiary text-sm">
                        © 2026 Zaphics. All rights reserved. Crafted with ❤️ and ☕
                    </p>
                    <div className="flex gap-6 text-sm text-text-tertiary">
                        <a href="#" className="hover:text-gold-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gold-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-gold-primary transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
        </footer>
    );
}
