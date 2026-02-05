'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    className?: string;
}

export function AnimatedCounter({ target, duration = 2000, className }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        const animate = (timestamp: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = timestamp;
            }

            const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);

            // Easing function (ease-out cubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const currentCount = Math.floor(easeProgress * target);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(animate);
    }, [target, duration]);

    return (
        <span className={className}>
            {String(count).padStart(3, '0')}
        </span>
    );
}
