import { ReactNode, CSSProperties } from 'react';

interface GlassCardProps {
  children: ReactNode;
  style?: CSSProperties;
  accent?: string;
  hover?: boolean;
  padding?: number | string;
  radius?: string;
  className?: string;
}

export default function GlassCard({
  children,
  style,
  accent,
  hover = true,
  padding = 'var(--space-card-desktop)',
  radius = 'var(--radius-lg)',
  className,
}: GlassCardProps) {
  return (
    <div
      className={className}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        border: `1px solid ${accent ? `${accent}44` : 'var(--glass-border)'}`,
        borderRadius: radius,
        padding,
        boxShadow: `var(--shadow-soft)${accent ? `, 0 0 0 1px ${accent}22` : ''}`,
        transition: hover ? 'transform 0.3s ease, box-shadow 0.3s ease' : undefined,
        ...style,
      }}
      onMouseEnter={hover ? e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = `var(--shadow-float)${accent ? `, 0 0 0 1px ${accent}33` : ''}`;
      } : undefined}
      onMouseLeave={hover ? e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = `var(--shadow-soft)${accent ? `, 0 0 0 1px ${accent}22` : ''}`;
      } : undefined}
    >
      {children}
    </div>
  );
}
