// Premium Unsplash images matching the Scarlet & Gold theme
const UNSPLASH_BASE = "https://images.unsplash.com";
const PARAMS = "?auto=format&fit=crop&w=800&q=80";

export const productImages = {
    // Hero: Moody espresso / pouring shot
    hero: "/images/MainBackground.png",

    // Midnight Espresso: Dark, rich espresso cup
    espresso: "/images/MidnightEspressoBlend.png",

    // Gold Label Hot Chocolate: Rich chocolate vibes
    chocolate: "/images/GoldLabelHotChocolate.png",

    // Truffle Collection: Distinctive chocolate truffles
    truffle: "/images/TruffleCollection.png",

    // Pour-Over Set: Elegant brewing
    pourOver: "/images/CeramicPourOverSet.png",

    // Background texture
    noise: "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E",
};
