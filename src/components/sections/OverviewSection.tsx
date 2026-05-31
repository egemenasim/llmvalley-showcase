'use client';
import FadeIn from '@/components/FadeIn';

const pillars = [
  {
    icon: '💬',
    title: 'Natural NPC Conversation',
    desc: 'Players type freely — no dialogue trees, no fixed choices. Each NPC responds with context-aware, in-character dialogue powered by a real LLM.',
    color: 'rgba(90,154,74,0.12)', border: 'rgba(90,154,74,0.25)', accent: 'var(--accent-green)',
  },
  {
    icon: '🌾',
    title: 'Cozy Life-Sim Gameplay',
    desc: 'Farm crops, fish at the lake, trade with merchants, and sleep to advance days. A complete simulation loop grounded in a charming pixel-art world.',
    color: 'rgba(200,168,48,0.10)', border: 'rgba(200,168,48,0.25)', accent: 'var(--accent-golden)',
  },
  {
    icon: '🔗',
    title: 'Modular AI Integration',
    desc: 'The LLM integration is cleanly separated from gameplay logic. Persona prompts, conversation history, and relationship evaluation run independently.',
    color: 'rgba(106,170,212,0.12)', border: 'rgba(106,170,212,0.25)', accent: 'var(--accent-sky)',
  },
];

export default function OverviewSection() {
  return (
    <section id="overview" style={{ padding: 'var(--space-section-desktop) 0' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 72px' }}>
            <div className="label-eyebrow" style={{ marginBottom: 14 }}>Project Overview</div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
              Games deserve better conversations
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Traditional games rely on static dialogue trees — branching menus scripted by developers. LLM Valley replaces them with free-text input and real-time AI responses, making every NPC feel like a genuine inhabitant of the world.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.12}>
              <div style={{
                background: p.color, border: `1px solid ${p.border}`,
                borderRadius: 'var(--radius-lg)', padding: 'var(--space-card-desktop)',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-float)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, marginBottom: 20,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                }}>{p.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: 'var(--text-primary)', lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Problem / Solution */}
        <FadeIn delay={0.1}>
          <div style={{
            marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
          }}>
            <div style={{
              background: 'rgba(220,80,60,0.07)', border: '1px solid rgba(220,80,60,0.18)',
              borderRadius: 'var(--radius-lg)', padding: 32,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c04030', marginBottom: 14 }}>The Problem</div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                Traditional dialogue trees are expensive to write, can&apos;t scale to natural conversation, and break player immersion the moment a response doesn&apos;t fit the expected branch. Every variation must be handcrafted by a developer.
              </p>
            </div>
            <div style={{
              background: 'rgba(90,154,74,0.08)', border: '1px solid rgba(90,154,74,0.22)',
              borderRadius: 'var(--radius-lg)', padding: 32,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-green)', marginBottom: 14 }}>Our Solution</div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                LLM Valley integrates the OpenRouter API inside a playable Unity demo. Players type anything — the NPC reads a rich persona prompt plus conversation history and responds contextually in real-time. Relationship stats evolve automatically.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 900px) {
          #overview .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #overview .container > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
