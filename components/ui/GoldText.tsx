'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GoldTextProps {
    children: ReactNode;
    className?: string;
    animate?: boolean;
}

export function GoldText({ children, className, animate = true }: GoldTextProps) {
    return (
        <span
            className={cn(
                'text-gold-gradient',
                animate && 'animate-gradient-shift',
                className
            )}
        >
            {children}
        </span>
    );
}
