'use client';
import FadeIn from '@/components/FadeIn';
import GlassCard from '@/components/GlassCard';

const team = [
  {
    name: 'Yusuf Sadi Pesen',
    role: 'Game Designer & Developer',
    icon: '🎨',
    desc: 'Designed the core gameplay loop, world structure, NPC systems, and economic balancing, while defining the overall game design direction and progression mechanics.',
    color: 'rgba(200,168,48,0.12)', colorBorder: 'rgba(200,168,48,0.28)',
  },
  {
    name: 'Reyhan Sena Çimen',
    role: 'Game Developer & 2D Artist',
    icon: '🖌️',
    desc: 'Implemented the movement, farming, item, and tool systems using scalable object-oriented architecture and design patterns, while integrating the projects visual assets and UI elements.',
    color: 'rgba(212,80,120,0.10)', colorBorder: 'rgba(212,80,120,0.25)',
  },
  {
    name: 'Egemen Asım Ersoy',
    role: 'Game Developer',
    icon: '💻',
    desc: 'Developed the LLM-powered NPC interaction system, including OpenRouter API integration, relationship evaluation mechanics, dialogue persistence, and AI-driven economy interactions.',
    color: 'rgba(90,154,74,0.10)', colorBorder: 'rgba(90,154,74,0.25)',
  },
  {
    name: 'Deniz Şeker',
    role: 'Game Developer',
    icon: '⚙️',
    desc: 'Implemented the inventory, calendar, sleep, save/load, and scene transition systems while coordinating development tasks, milestone planning, and subsystem integration.',
    color: 'rgba(106,170,212,0.10)', colorBorder: 'rgba(106,170,212,0.25)',
  },
];

const supervisor = {
  name: 'Dr. Eren Ulu',
  role: 'Project Supervisor',
  dept: 'Computer Engineering, TED University',
  icon: '🎓',
};

export default function TeamSection() {
  return (
    <section id="team" style={{ padding: 'var(--space-section-desktop) 0' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 72px' }}>
            <div className="label-eyebrow" style={{ marginBottom: 14 }}>The Team</div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
              Built by four students
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              LLM Valley was created as the SENG/CMPE 491/492 Senior Graduation Project at TED University, Spring 2026. A 4-person team, one semester, one playable demo.
            </p>
          </div>
        </FadeIn>

        {/* Team grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 40 }}>
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1}>
              <div style={{
                background: member.color, border: `1px solid ${member.colorBorder}`,
                borderRadius: 'var(--radius-lg)', padding: 28,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-float)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 'var(--radius-md)', flexShrink: 0,
                    background: 'rgba(255,255,255,0.70)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
                  }}>{member.icon}</div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 3 }}>{member.name}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 12 }}>{member.role}</div>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{member.desc}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Supervisor */}
        <FadeIn delay={0.2}>
          <GlassCard padding="24px 32px" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>{supervisor.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Project Supervisor</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>{supervisor.name}</div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{supervisor.dept}</div>
          </GlassCard>
        </FadeIn>

        {/* Course label */}
        <FadeIn delay={0.25}>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 20px', borderRadius: 'var(--radius-pill)',
              background: 'rgba(90,154,74,0.10)', border: '1px solid rgba(90,154,74,0.22)',
              fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)',
            }}>
              🎓 TED University · SENG/CMPE 491 / SENG/CMPE 492 · Spring 2026
            </span>
          </div>
        </FadeIn>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 750px) {
          #team .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
