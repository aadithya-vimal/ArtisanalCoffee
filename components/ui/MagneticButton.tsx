'use client';

import { ReactNode, useRef, useState, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}

export function MagneticButton({
    children,
    className,
    variant = 'primary',
    onClick
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        // Magnetic effect within 100px radius
        if (distance < 100) {
            const strength = Math.max(0, 1 - distance / 100);
            setPosition({
                x: distanceX * strength * 0.3,
                y: distanceY * strength * 0.3,
            });
        } else {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        // Ripple effect
        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');

            buttonRef.current?.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        }

        onClick?.();
    };

    const baseStyles = 'relative px-8 py-4 rounded-full font-sans font-medium text-lg overflow-hidden transition-all duration-500 ease-premium';

    const variantStyles = {
        primary: 'glass-layer-2 border-2 border-scarlet-primary text-gold-primary hover:bg-gradient-to-r hover:from-scarlet-dark hover:to-scarlet-primary hover:shadow-[0_0_40px_rgba(196,30,58,0.4)]',
        secondary: 'border-2 border-gold-primary text-gold-primary hover:border-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]',
    };

    return (
        <button
            ref={buttonRef}
            className={cn(baseStyles, variantStyles[variant], className)}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {children}
            <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.5);
          transform: scale(0);
          animation: ripple-animation 0.6s ease-out;
          pointer-events: none;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
        </button>
    );
}
