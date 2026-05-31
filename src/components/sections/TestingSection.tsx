'use client';
import FadeIn from '@/components/FadeIn';
import GlassCard from '@/components/GlassCard';

const categories = [
  {
    name: 'Functional Testing',
    icon: '⚙️', count: 7, passed: 7,
    color: 'var(--accent-green)', colorBg: 'rgba(90,154,74,0.10)', colorBorder: 'rgba(90,154,74,0.25)',
    cases: [
      'NPC dialogue starts and receives LLM response',
      'Relationship metrics update after 5 messages',
      'Farming cycle: hoe → plant → water → harvest',
      'Fish minigame completes and adds item to inventory',
      'Trading: sell item to merchant, balance updates',
      'Sleep: day advances, crops progress, stamina resets',
      'Scene transition Farm ↔ Town without data loss',
    ],
  },
  {
    name: 'Interface Testing',
    icon: '🖥️', count: 5, passed: 5,
    color: 'var(--accent-sky)', colorBg: 'rgba(106,170,212,0.10)', colorBorder: 'rgba(106,170,212,0.25)',
    cases: [
      'Chat UI renders NPC response with name label',
      'Relationship bars update visually in UI',
      'Inventory HUD reflects item changes in real time',
      'Player wallet balance updates after trade',
      'Day counter and time display advance correctly',
    ],
  },
  {
    name: 'Validation Testing',
    icon: '✅', count: 4, passed: 4,
    color: 'var(--accent-warm)', colorBg: 'rgba(212,146,74,0.10)', colorBorder: 'rgba(212,146,74,0.25)',
    cases: [
      'Empty player input rejected — no API call made',
      'API error surfaced in UI (not silently swallowed)',
      'Identity-break phrases stripped from LLM output',
      'Save/load cycle preserves all player state correctly',
    ],
  },
];

export default function TestingSection() {
  return (
    <section id="testing" style={{
      padding: 'var(--space-section-desktop) 0',
      background: 'linear-gradient(180deg, rgba(242,245,238,0) 0%, rgba(228,238,224,0.5) 50%, rgba(242,245,238,0) 100%)',
    }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 72px' }}>
            <div className="label-eyebrow" style={{ marginBottom: 14 }}>Testing & Validation</div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
              16 of 16 test cases passed
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              All functional, interface, and validation tests passed at final submission. Tests covered the full game loop — from NPC dialogue to farming, trading, save/load, and UI consistency.
            </p>
          </div>
        </FadeIn>

        {/* Big stat */}
        <FadeIn delay={0.05}>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 64, flexWrap: 'wrap',
          }}>
            {[
              { value: '16', label: 'Total Test Cases', color: 'var(--accent-green)' },
              { value: '16', label: 'Passed', color: 'var(--accent-green)' },
              { value: '0', label: 'Failed', color: 'var(--text-muted)' },
              { value: '100%', label: 'Pass Rate', color: 'var(--accent-golden)' },
            ].map(stat => (
              <div key={stat.label} style={{
                textAlign: 'center', padding: '24px 36px',
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)',
                minWidth: 140,
              }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: stat.color, lineHeight: 1, letterSpacing: '-0.03em' }}>{stat.value}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginTop: 6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Category cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {categories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.1}>
              <div style={{
                background: cat.colorBg, border: `1px solid ${cat.colorBorder}`,
                borderRadius: 'var(--radius-lg)', padding: 28, height: '100%',
              }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.65)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                  }}>{cat.icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{cat.name}</div>
                    <div style={{ fontSize: 12, color: cat.color, fontWeight: 600 }}>{cat.passed}/{cat.count} passed</div>
                  </div>
                </div>

                {/* Pass bar */}
                <div style={{ height: 4, borderRadius: 99, background: 'rgba(0,0,0,0.08)', marginBottom: 20, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '100%', background: cat.color, borderRadius: 99 }} />
                </div>

                {/* Test list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {cat.cases.map(c => (
                    <div key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: cat.color, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 900px) {
          #testing .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
