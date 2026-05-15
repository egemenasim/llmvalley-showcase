'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

const heroStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: 120,
  paddingBottom: 80,
  position: 'relative',
  overflow: 'hidden',
};

const slides = [
  { src: '/mainmenu.png', label: 'Main Menu', sub: 'First impression of LLM Valley' },
  { src: '/chatwithnpc.png', label: 'NPC Dialogue', sub: 'Real-time AI conversation' },
  { src: '/fishing.png', label: 'Fishing Minigame', sub: 'Timing-based catch system' },
];

const statsData = [
  { icon: '🎮', label: 'Unity 6.3 LTS', sub: 'Game Engine' },
  { icon: '🤖', label: 'OpenRouter API', sub: 'AI Integration' },
  { icon: '💬', label: 'Dynamic NPCs', sub: 'Free-text Dialogue' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 300);
  }, [transitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section style={heroStyle} id="hero">
      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '8%', right: '5%', width: 480, height: 480,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(100,180,80,0.18) 0%, rgba(100,160,220,0.10) 50%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '2%', width: 360, height: 360,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,168,48,0.12) 0%, transparent 70%)',
        filter: 'blur(30px)', pointerEvents: 'none', zIndex: 0,
        animation: 'float 10s ease-in-out infinite reverse',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* ── Left: copy ── */}
          <div>
            <FadeIn delay={0.1}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <div style={{
                  padding: '6px 14px', borderRadius: 'var(--radius-pill)',
                  background: 'rgba(90,154,74,0.12)', border: '1px solid rgba(90,154,74,0.25)',
                  fontSize: 12, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase' as const,
                  color: 'var(--accent-green)',
                }}>
                  Senior Graduation Project · SENG/CENG 491/492
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              <h1 style={{
                fontSize: 'var(--font-hero)', fontWeight: 800,
                lineHeight: 1.05, letterSpacing: '-0.03em',
                color: 'var(--text-primary)', marginBottom: 24,
              }}>
                A cozy village where{' '}
                <span style={{
                  background: 'linear-gradient(135deg, var(--accent-green) 0%, var(--accent-sky) 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  NPCs speak through AI
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.26}>
              <p style={{
                fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)',
                maxWidth: 520, marginBottom: 36,
              }}>
                LLM Valley is a narrative-driven life simulation built in Unity. Players explore a cozy pixel-art village, farm, fish, trade, and converse with fully AI-powered NPCs — each with unique personalities driven by real-time Large Language Model responses.
              </p>
            </FadeIn>

            <FadeIn delay={0.34}>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const }}>
                <a href="#gameplay" style={{
                  textDecoration: 'none', padding: '14px 28px',
                  borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: 16,
                  color: '#fff',
                  background: 'linear-gradient(135deg, var(--accent-green) 0%, #4a8a3a 100%)',
                  boxShadow: '0 4px 20px rgba(90,154,74,0.40)',
                  transition: 'all 0.3s ease', display: 'inline-block',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(90,154,74,0.55)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(90,154,74,0.40)'; }}
                >
                  Explore the Game ↓
                </a>
                <a href="#ai-dialogue" style={{
                  textDecoration: 'none', padding: '14px 28px',
                  borderRadius: 'var(--radius-pill)', fontWeight: 600, fontSize: 16,
                  color: 'var(--text-primary)',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--shadow-float)',
                  transition: 'all 0.3s ease', display: 'inline-block',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.background = 'var(--glass-bg-strong)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.background = 'var(--glass-bg)'; }}
                >
                  How the AI Works →
                </a>
              </div>
            </FadeIn>

            {/* Stats badges */}
            <FadeIn delay={0.42}>
              <div style={{ display: 'flex', gap: 12, marginTop: 44, flexWrap: 'wrap' as const }}>
                {statsData.map(s => (
                  <div key={s.label} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '10px 16px', borderRadius: 'var(--radius-md)',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-soft)',
                  }}>
                    <span style={{ fontSize: 18 }}>{s.icon}</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>{s.label}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 500 }}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right: Image Carousel ── */}
          <FadeIn delay={0.2} direction="right">
            <div style={{ position: 'relative', marginTop: -290 }}>

              {/* Carousel frame */}
              <div style={{
                width: '100%', borderRadius: 'var(--radius-xl)',
                overflow: 'hidden', position: 'relative',
                boxShadow: 'var(--shadow-deep), var(--shadow-glow-green)',
                border: '1px solid rgba(255,255,255,0.22)',
                aspectRatio: '16/10',
                background: '#111',
              }}>
                {slides.map((slide, i) => (
                  <div key={slide.src} style={{
                    position: 'absolute', inset: 0,
                    opacity: i === current ? (transitioning ? 0 : 1) : 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: i === current ? 'auto' : 'none',
                  }}>
                    <Image
                      src={slide.src}
                      alt={slide.label}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={i === 0}
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  </div>
                ))}

                {/* Slide label overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)',
                  padding: '32px 20px 16px',
                  pointerEvents: 'none',
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(180,220,140,0.95)', marginBottom: 2 }}>
                    {slides[current].label}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
                    {slides[current].sub}
                  </div>
                </div>

                {/* Prev / Next arrows */}
                {[
                  { dir: 'prev', symbol: '‹', idx: (current - 1 + slides.length) % slides.length, pos: { left: 10 } },
                  { dir: 'next', symbol: '›', idx: (current + 1) % slides.length, pos: { right: 10 } },
                ].map(btn => (
                  <button key={btn.dir} onClick={() => goTo(btn.idx)}
                    style={{
                      position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                      ...btn.pos,
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.18)',
                      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: '#fff', fontSize: 22, fontWeight: 700,
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 0.2s ease',
                      lineHeight: 1, paddingBottom: 2,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.32)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)'; }}
                    aria-label={btn.dir}
                  >
                    {btn.symbol}
                  </button>
                ))}
              </div>

              {/* Dot indicators */}
              <div style={{
                display: 'flex', justifyContent: 'center', gap: 8, marginTop: 14,
              }}>
                {slides.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)}
                    style={{
                      width: i === current ? 24 : 8, height: 8,
                      borderRadius: 99, border: 'none', cursor: 'pointer', padding: 0,
                      background: i === current ? 'var(--accent-green)' : 'rgba(90,154,74,0.28)',
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Floating NPC badge */}
              <div style={{
                position: 'absolute', top: -16, right: -16,
                background: 'var(--glass-bg-strong)',
                backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)', padding: '10px 14px',
                boxShadow: 'var(--shadow-float)',
                animation: 'float 6s ease-in-out infinite',
              }}>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 2 }}>ACTIVE NPCs</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--accent-green)' }}>4</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>AI-Powered</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
