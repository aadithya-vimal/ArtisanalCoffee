'use client';

import { useState, MouseEvent, useRef } from 'react';
import Image from 'next/image';

interface Product3DImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function Product3DImage({ src, alt, className = '' }: Product3DImageProps) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current) return;

        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateY = ((e.clientX - centerX) / rect.width) * 15;
        const rotateX = -((e.clientY - centerY) / rect.height) * 15;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={imageRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)`,
                transition: 'transform 0.1s ease-out',
                transformStyle: 'preserve-3d',
            }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover rounded-2xl"
                style={{
                    transform: 'translateZ(50px)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                }}
            />
            {/* Glow effect */}
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(196,30,58,0.2) 100%)',
                    transform: 'translateZ(25px)',
                    opacity: 0.6,
                    filter: 'blur(20px)',
                }}
            />
        </div>
    );
}
