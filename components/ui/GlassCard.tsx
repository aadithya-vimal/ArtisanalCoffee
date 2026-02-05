'use client';

import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                'glass-card p-8 relative overflow-hidden',
                hover && 'transition-all duration-500 ease-premium',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
