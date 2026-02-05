import type { Metadata } from "next";
import { Playfair_Display, Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "600", "700", "900"],
    variable: "--font-playfair",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-montserrat",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "Artisanal Coffee & Chocolate | Premium Small Batch",
    description: "Where Ethiopian beans meet Belgian chocolate. Experience artisanal perfection in every cup and every bite.",
    keywords: ["artisanal coffee", "belgian chocolate", "small batch", "premium coffee", "luxury chocolate"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}>
            <body className="font-sans antialiased bg-bg-primary text-text-primary selection:bg-scarlet-primary selection:text-white relative">
                <SmoothScroll>
                    <CustomCursor />
                    <Navbar />
                    <div className="relative w-full">
                        {children}
                    </div>
                </SmoothScroll>
            </body>
        </html>
    );
}
