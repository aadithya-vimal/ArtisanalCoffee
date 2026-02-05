import { Hero } from './sections/Hero';
import { Marquee } from './sections/Marquee';
import { Features } from './sections/Features';
import { ProductShowcase } from './sections/ProductShowcase';
import { RoastingExperience } from './sections/RoastingExperience';
import { Testimonials } from './sections/Testimonials';
import { Newsletter } from './sections/Newsletter';
import { Footer } from './sections/Footer';

export default function Home() {
    return (
        <main className="relative">
            <div className="relative z-10 bg-bg-primary shadow-2xl">
                <Hero />
                <Marquee />
                <Features />
                <ProductShowcase />
                <RoastingExperience />
                <Testimonials />
                <Newsletter />
            </div>
            <Footer />
        </main>
    );
}
