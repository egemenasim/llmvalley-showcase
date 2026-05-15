'use client';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Gameplay', href: '#gameplay' },
  { label: 'AI Dialogue', href: '#ai-dialogue' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Technology', href: '#technology' },
  { label: 'Team', href: '#team' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 24px',
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        maxWidth: 1240, margin: '12px auto 0',
        background: scrolled ? 'rgba(242,245,238,0.82)' : 'rgba(242,245,238,0.55)',
        backdropFilter: scrolled ? 'blur(28px) saturate(160%)' : 'blur(16px) saturate(130%)',
        WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(160%)' : 'blur(16px) saturate(130%)',
        border: '1px solid rgba(255,255,255,0.45)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: scrolled ? 'var(--shadow-deep), inset 0 1px 0 rgba(255,255,255,0.6)' : 'var(--shadow-soft), inset 0 1px 0 rgba(255,255,255,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 28px', height: 60,
        transition: 'all 0.4s ease',
      }}>
        {/* Wordmark */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" alt="LLM Valley Logo" style={{
            width: 'auto', height: 32, borderRadius: 9,
            objectFit: 'contain',
            boxShadow: '0 2px 8px rgba(90,154,74,0.35)',
            flexShrink: 0,
          }} />
          <span style={{ fontWeight: 700, fontSize: 17, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            LLM Valley
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 6 }} className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              textDecoration: 'none', fontSize: 14, fontWeight: 500,
              color: 'var(--text-secondary)', padding: '6px 12px',
              borderRadius: 'var(--radius-sm)', transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(90,154,74,0.12)';
                (e.currentTarget as HTMLElement).style.color = 'var(--accent-green)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              }}
            >{l.label}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="#" onClick={(e) => { e.preventDefault(); alert("The GitHub repository is currently private pending a security review to remove sensitive API keys. It will be made public shortly."); }}
          style={{
            textDecoration: 'none', fontSize: 14, fontWeight: 600,
            color: '#fff', padding: '8px 18px',
            borderRadius: 'var(--radius-pill)',
            background: 'linear-gradient(135deg, var(--accent-green) 0%, #4a8a3a 100%)',
            boxShadow: '0 2px 12px rgba(90,154,74,0.35)',
            transition: 'all 0.25s ease',
            display: 'flex', alignItems: 'center', gap: 6,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(90,154,74,0.5)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(90,154,74,0.35)'; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
          GitHub
        </a>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
