'use client';
import FadeIn from '@/components/FadeIn';

const activities = [
  { icon: '🌱', title: 'Farm', desc: 'Till soil, plant seeds, water crops daily, harvest when grown. 12 crop types across 3 tiers, up to 4 farmable fields.', color: '#5a9a4a' },
  { icon: '🐟', title: 'Fish', desc: 'Head to the farm lake with a fishing rod. Engage a timing-based minigame to catch from 6 fish types by rarity.', color: '#6aaad4' },
  { icon: '💬', title: 'Talk', desc: 'Approach any NPC with E to open free-text dialogue. Each NPC has a unique AI persona and remembers your history.', color: '#9a7ad4' },
  { icon: '🏪', title: 'Trade', desc: 'Sell to Donald the Merchant, buy seeds from Helen, upgrade tools at Rudy\'s, unlock new farm areas with Ezekiel.', color: '#d4924a' },
  { icon: '🏠', title: 'Sleep', desc: 'Return home and sleep to end the day. Stamina resets, crops grow, NPC schedules refresh for a new cycle.', color: '#4a9ad4' },
  { icon: '📈', title: 'Progress', desc: 'Build Trust, Friendship, and Love with NPCs to unlock higher shop tiers, new crops, and deeper conversation.', color: '#c8a830' },
];

const scenes = [
  {
    name: 'Farm Scene',
    desc: 'Player\'s home, 4 farmable fields (1 unlocked initially), fishing lake, and the path to Town.',
    items: ['🏠 Player House', '🌾 Farm Fields ×4', '🐟 Fishing Lake', '🛤️ Town Path'],
    color: 'rgba(90,154,74,0.10)', border: 'rgba(90,154,74,0.25)',
  },
  {
    name: 'Town Scene',
    desc: 'Town Square with the statue, all four NPC shops, and the path back to the farm.',
    items: ['🗿 Town Square', '🌻 Seed Shop (Helen)', '🔨 Tool Shop (Rudy)', '🏗️ Builder (Ezekiel)', '💰 Merchant (Donald)'],
    color: 'rgba(106,170,212,0.10)', border: 'rgba(106,170,212,0.25)',
  },
];

export default function GameplaySection() {
  return (
    <section id="gameplay" style={{ padding: 'var(--space-section-desktop) 0', background: 'rgba(255,255,255,0.25)' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 72px' }}>
            <div className="label-eyebrow" style={{ marginBottom: 14 }}>Gameplay</div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
              A full life-sim loop
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Every day in LLM Valley is a repeating cycle of farming, social interaction, and economic progress. Traverse between Farm and Town using WASD, interact with objects and NPCs via <kbd style={{ padding: '2px 7px', borderRadius: 5, background: 'rgba(0,0,0,0.08)', fontSize: 13 }}>E</kbd>.
            </p>
          </div>
        </FadeIn>

        {/* Activity cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 64 }}>
          {activities.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.08}>
              <div style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-lg)', padding: 28,
                boxShadow: 'var(--shadow-soft)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex', flexDirection: 'column' as const, gap: 12,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-float)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-soft)'; }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 'var(--radius-sm)',
                  background: `${a.color}22`,
                  border: `1px solid ${a.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                }}>{a.icon}</div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{a.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{a.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Scenes */}
        <FadeIn>
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: 'var(--text-primary)' }}>Two interconnected scenes</h3>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {scenes.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.1}>
              <div style={{
                background: s.color, border: `1px solid ${s.border}`,
                borderRadius: 'var(--radius-lg)', padding: 32,
              }}>
                <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>{s.name}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 18 }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8 }}>
                  {s.items.map(item => (
                    <span key={item} style={{
                      padding: '5px 12px', borderRadius: 'var(--radius-pill)',
                      background: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 500, color: 'var(--text-primary)',
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #gameplay .container > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
          #gameplay .container > div:nth-child(4) { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #gameplay .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
