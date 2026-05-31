'use client';
export default function FooterSection() {
  return (
    <footer style={{
      padding: '80px 0 48px',
      borderTop: '1px solid rgba(90,154,74,0.15)',
      background: 'linear-gradient(180deg, rgba(242,245,238,0) 0%, rgba(225,235,220,0.5) 100%)',
    }}>
      <div className="container">
        {/* CTA banner */}
        <div style={{
          textAlign: 'center', marginBottom: 72, padding: '56px 40px',
          background: 'linear-gradient(135deg, rgba(90,154,74,0.12) 0%, rgba(106,170,212,0.10) 100%)',
          border: '1px solid rgba(90,154,74,0.22)',
          borderRadius: 'var(--radius-xl)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400, height: 200,
            background: 'radial-gradient(ellipse, rgba(90,154,74,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ height: 240, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <img src="/logo.png" alt="LLM Valley Logo" style={{ width: 'auto', height: 320, borderRadius: 16, objectFit: 'contain', marginTop: 15 }} />
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em',
              color: 'var(--text-primary)', marginBottom: 16, lineHeight: 1.15,
            }}>
              LLM Valley explores how AI<br />can make game worlds feel alive
            </h2>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: 560, margin: '0 auto 32px' }}>
              A senior graduation project demonstrating that free-text NPC conversation, powered by open-access LLMs, is achievable in a real-time Unity game today.
            </p>
            <a
              href="https://github.com/egemenasim/LLMValley"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', borderRadius: 'var(--radius-pill)',
                background: 'linear-gradient(135deg, var(--accent-green) 0%, #4a8a3a 100%)',
                color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 16,
                boxShadow: '0 4px 24px rgba(90,154,74,0.40)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 36px rgba(90,154,74,0.55)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(90,154,74,0.40)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/logo.png" alt="LLM Valley Logo" style={{
              width: 'auto', height: 28, borderRadius: 8,
              objectFit: 'contain',
            }} />
            <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: 15 }}>LLM Valley</span>
          </div>

          <div style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
            Senior Graduation Project · SENG/CMPE 491/492 · TED University · Spring 2026
          </div>

          <div style={{ display: 'flex', gap: 20 }}>
            {[
              { label: 'Overview', href: '#overview' },
              { label: 'AI Dialogue', href: '#ai-dialogue' },
              { label: 'Architecture', href: '#architecture' },
              { label: 'GitHub', href: 'https://github.com/egemenasim/LLMValley' },
            ].map(l => (
              <a key={l.label} href={l.label === 'GitHub' ? 'https://github.com/egemenasim/LLMValley' : l.href}
                target={l.href.startsWith('http') || l.label === 'GitHub' ? '_blank' : undefined}
                rel={l.href.startsWith('http') || l.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                style={{
                  fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none',
                  fontWeight: 500, transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-green)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
              >{l.label}</a>
            ))}
          </div>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 700px) {
          footer .container > div:last-child { flex-direction: column !important; align-items: center !important; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
