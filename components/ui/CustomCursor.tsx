'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setIsVisible(true);

            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') !== null ||
                target.closest('a') !== null;

            setIsHovering(isInteractive);

            // Direct DOM update for zero lag
            if (cursorRef.current && dotRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        const onMouseLeave = () => setIsVisible(false);

        document.addEventListener('mousemove', onMouseMove, { passive: true });
        document.addEventListener('mouseleave', onMouseLeave);

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.body.style.cursor = 'auto';
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border-2 transition-all duration-200 ease-out will-change-transform"
                style={{
                    width: isHovering ? '60px' : '20px',
                    height: isHovering ? '60px' : '20px',
                    borderColor: isHovering ? 'var(--scarlet-primary)' : 'var(--gold-primary)',
                    backgroundColor: isHovering ? 'rgba(196, 30, 58, 0.1)' : 'transparent',
                    boxShadow: isHovering
                        ? '0 0 20px rgba(196, 30, 58, 0.3)'
                        : '0 0 10px rgba(212, 175, 55, 0.2)',
                }}
            />
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-gold-primary transition-opacity duration-200 will-change-transform"
                style={{
                    width: '4px',
                    height: '4px',
                    opacity: isHovering ? 0 : 1,
                }}
            />
        </>
    );
}
