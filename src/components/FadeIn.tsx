'use client';
import { useRef, useEffect, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeIn({ children, delay = 0, direction = 'up', className, style }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const initialTransform =
      direction === 'up' ? 'translateY(36px)' :
      direction === 'left' ? 'translateX(-36px)' :
      direction === 'right' ? 'translateX(36px)' : 'none';

    el.style.opacity = '0';
    el.style.transform = initialTransform;
    el.style.transition = `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
