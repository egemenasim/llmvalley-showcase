'use client';
import FadeIn from '@/components/FadeIn';
import GlassCard from '@/components/GlassCard';

const stats = [
  {
    key: 'Love', icon: '❤️', color: '#e05878', colorLight: 'rgba(224,88,120,0.12)', colorBorder: 'rgba(224,88,120,0.28)',
    desc: 'Rises through romantic affection, sincere compliments, and emotional closeness. Influences tone and romantic tension in responses.',
    unlocks: ['Romantic dialogue paths', 'Deeper emotional responses', 'Unique interaction events'],
  },
  {
    key: 'Friendship', icon: '🤝', color: 'var(--accent-green)', colorLight: 'rgba(90,154,74,0.10)', colorBorder: 'rgba(90,154,74,0.26)',
    desc: 'Grows with warmth, humor, kindness, and shared moments. Makes NPCs more relaxed and willing to share information.',
    unlocks: ['Relaxed NPC tone', 'Item unlocks', 'Extended shop availability'],
  },
  {
    key: 'Trust', icon: '🌿', color: 'var(--accent-sky)', colorLight: 'rgba(106,170,212,0.10)', colorBorder: 'rgba(106,170,212,0.26)',
    desc: 'Built through honesty, consistency, and respecting NPC boundaries. Unlocks higher shop tiers, new farm areas, and deeper dialogue.',
    unlocks: ['New shop tiers (seeds/tools)', 'Farm area unlocks', 'Advanced daily sell limit'],
  },
];

const npcs = [
  {
    name: 'Donald J. Simon', role: 'Merchant', icon: '💰',
    opening: '"Ah… the new farmer. Let\'s see if you\'ve brought anything worth my time today."',
    trait: 'Trust = more daily sell limit', color: 'rgba(200,140,40,0.10)',
  },
  {
    name: 'Helen', role: 'Seed Shop', icon: '🌻',
    opening: '"Oh! You must be the one who inherited your grandfather\'s farm. Welcome to LLM Valley!"',
    trait: 'Trust = more seed tiers', color: 'rgba(90,154,74,0.10)',
  },
  {
    name: 'Rudy', role: 'Tool Shop', icon: '🔨',
    opening: '"…Oh. You\'re the new farmer, right? Need a hoe or something sturdier?"',
    trait: 'Trust = Iron-tier tools', color: 'rgba(106,170,212,0.10)',
  },
  {
    name: 'Ezekiel', role: 'Builder', icon: '🏗️',
    opening: '"Hey there! You must be the one fixin\' up that old farm. Name\'s Ezekiel."',
    trait: 'Trust = new farm fields', color: 'rgba(140,96,48,0.10)',
  },
];

export default function RelationshipSection() {
  return (
    <section id="relationships" style={{
      padding: 'var(--space-section-desktop) 0',
      background: 'linear-gradient(180deg, rgba(242,245,238,0) 0%, rgba(232,240,228,0.6) 50%, rgba(242,245,238,0) 100%)',
    }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 72px' }}>
            <div className="label-eyebrow" style={{ marginBottom: 14 }}>Simulation Systems</div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
              Relationships that actually evolve
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Every NPC tracks three independent relationship metrics. They update automatically after every fifth conversation exchange through a hidden LLM evaluation pass — not through button presses or arbitrary triggers.
            </p>
          </div>
        </FadeIn>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 64 }}>
          {stats.map((s, i) => (
            <FadeIn key={s.key} delay={i * 0.1}>
              <div style={{
                background: s.colorLight, border: `1px solid ${s.colorBorder}`,
                borderRadius: 'var(--radius-lg)', padding: 32, height: '100%',
              }}>
                {/* Icon + label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                  }}>{s.icon}</div>
                  <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)' }}>{s.key}</span>
                </div>

                {/* Bar */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>0</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>100</span>
                  </div>
                  <div style={{
                    height: 8, borderRadius: 99, background: 'rgba(0,0,0,0.08)', overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', borderRadius: 99, width: '35%',
                      background: s.color,
                      animation: 'growBar 1.4s cubic-bezier(0.34, 1.2, 0.64, 1) 0.5s both',
                    }}
                    />
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Starting value (grows with interaction)</div>
                </div>

                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: 18 }}>{s.desc}</p>

                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Unlocks</div>
                  {s.unlocks.map(u => (
                    <div key={u} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* NPC Cards */}
        <FadeIn>
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: 'var(--text-primary)' }}>
            Meet the four NPCs
          </h3>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {npcs.map((npc, i) => (
            <FadeIn key={npc.name} delay={i * 0.08}>
              <GlassCard padding="24px 28px">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 'var(--radius-md)', flexShrink: 0,
                    background: npc.color,
                    border: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
                  }}>{npc.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{npc.name}</span>
                      <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>{npc.role}</span>
                    </div>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: 10 }}>
                      {npc.opening}
                    </p>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '4px 10px', borderRadius: 'var(--radius-pill)',
                      background: 'rgba(90,154,74,0.10)', fontSize: 12, fontWeight: 500, color: 'var(--accent-green)',
                    }}>
                      🔓 {npc.trait}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        {/* Eval note */}
        <FadeIn delay={0.1}>
          <div style={{
            marginTop: 40, padding: '20px 28px',
            background: 'rgba(200,168,48,0.08)', border: '1px solid rgba(200,168,48,0.22)',
            borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: 14,
          }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>⚖️</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>Automatic relationship evaluation</div>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
                Every 5 player messages, a separate LLM call evaluates the conversation window and returns structured JSON deltas (−2 to +2) for each stat. The system accounts for flirting, vulnerability sharing, rudeness, manipulation, and more — following a detailed evaluation rulebook baked into the prompt.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #relationships .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #relationships .container > div:nth-child(5) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
