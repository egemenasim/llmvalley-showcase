'use client';
import FadeIn from '@/components/FadeIn';
import GlassCard from '@/components/GlassCard';

const technologies = [
  {
    name: 'Unity 6.3 LTS',
    icon: '🎮',
    category: 'Game Engine',
    desc: 'Latest long-term support release. Universal Render Pipeline, 2D Tilemap system, UI Toolkit, and the full C# scripting environment.',
    color: '#3a3a3a', colorBg: 'rgba(60,60,60,0.08)', colorBorder: 'rgba(60,60,60,0.18)',
  },
  {
    name: 'C# / .NET',
    icon: '⚙️',
    category: 'Language',
    desc: 'All gameplay logic, AI integration, save system, UI management, and NPC behavior are written in C# using Unity\'s MonoBehaviour component model.',
    color: '#512bd4', colorBg: 'rgba(81,43,212,0.08)', colorBorder: 'rgba(81,43,212,0.20)',
  },
  {
    name: 'OpenRouter API',
    icon: '🌐',
    category: 'AI Backend',
    desc: 'Unified API gateway providing access to multiple LLM providers with a single key. Used for both dialogue generation and relationship evaluation calls.',
    color: '#0a7cf6', colorBg: 'rgba(10,124,246,0.08)', colorBorder: 'rgba(10,124,246,0.20)',
  },
  {
    name: 'Claude Haiku / Free LLMs',
    icon: '🤖',
    category: 'Language Model',
    desc: 'The system is model-agnostic — any OpenRouter-compatible model works. Claude Haiku was the primary target; the client auto-filters for free available models.',
    color: '#d4730a', colorBg: 'rgba(212,115,10,0.08)', colorBorder: 'rgba(212,115,10,0.20)',
  },
  {
    name: 'UnityWebRequest',
    icon: '🔗',
    category: 'Networking',
    desc: 'Unity\'s built-in HTTP client, used for all API calls. Runs in Coroutines so the game never blocks while waiting for a response. Full async/await pattern.',
    color: 'var(--accent-green)', colorBg: 'rgba(90,154,74,0.08)', colorBorder: 'rgba(90,154,74,0.22)',
  },
  {
    name: 'Newtonsoft.Json',
    icon: '📦',
    category: 'Serialization',
    desc: 'JSON parsing and serialization for API payloads, conversation history files, and the save system. Industry-standard library via Unity Package Manager.',
    color: '#008000', colorBg: 'rgba(0,128,0,0.07)', colorBorder: 'rgba(0,128,0,0.20)',
  },
  {
    name: 'TextMeshPro',
    icon: '✍️',
    category: 'UI / Text',
    desc: 'Crisp, high-resolution text rendering for all dialogue, HUD elements, and NPC names. Supports rich text markup for name coloring in chat.',
    color: '#e05030', colorBg: 'rgba(224,80,48,0.07)', colorBorder: 'rgba(224,80,48,0.20)',
  },
  {
    name: 'PlayerPrefs + JSON',
    icon: '💾',
    category: 'Save System',
    desc: 'Player state (coins, inventory, calendar, position, gates) serialized to JSON and stored in Unity\'s cross-platform PlayerPrefs key-value store.',
    color: 'var(--accent-golden)', colorBg: 'rgba(200,168,48,0.08)', colorBorder: 'rgba(200,168,48,0.22)',
  },
  {
    name: 'GitHub',
    icon: '🐙',
    category: 'Version Control',
    desc: 'Full source version control for the Unity project, with .gitignore for Library/Temp folders. Collaborative development by the 4-person team.',
    color: '#24292e', colorBg: 'rgba(36,41,46,0.07)', colorBorder: 'rgba(36,41,46,0.18)',
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" style={{ padding: 'var(--space-section-desktop) 0' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 72px' }}>
            <div className="label-eyebrow" style={{ marginBottom: 14 }}>Technology Stack</div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
              Built on proven, open tools
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Every technology in LLM Valley was chosen for reliability, Unity ecosystem compatibility, and the ability to ship a working demo within an academic semester.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {technologies.map((tech, i) => (
            <FadeIn key={tech.name} delay={i * 0.06}>
              <GlassCard style={{ height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 'var(--radius-sm)', flexShrink: 0,
                    background: tech.colorBg, border: `1px solid ${tech.colorBorder}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                  }}>{tech.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>{tech.category}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{tech.name}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--text-secondary)' }}>{tech.desc}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          #technology .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #technology .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
