'use client';
import FadeIn from '@/components/FadeIn';

const layers = [
  {
    label: '01', title: 'Game Client',
    icon: '🎮', color: 'var(--accent-green)', colorBg: 'rgba(90,154,74,0.09)', colorBorder: 'rgba(90,154,74,0.25)',
    desc: 'The Unity 6.3 runtime: player movement, farming mechanics, scene transitions, HUD, and all simulation state.',
    scripts: ['Player.cs', 'PlayerInventory.cs', 'PlayerWallet.cs', 'CalendarSystem.cs', 'SceneTransitionManager.cs', 'FarmableArea.cs', 'Plantable.cs', 'GateStateStore.cs'],
    connector: 'UnityWebRequest · HTTPS · JSON payload',
  },
  {
    label: '02', title: 'AI Integration Module',
    icon: '🤖', color: 'var(--accent-sky)', colorBg: 'rgba(106,170,212,0.09)', colorBorder: 'rgba(106,170,212,0.25)',
    desc: 'The bridge between Unity and the LLM. Builds prompts, sends API requests, parses responses, filters identity breaks, and triggers relationship evaluation.',
    scripts: ['NPCOpenRouterClient.cs', 'NPCChatAgent.cs', 'NPCPersona.cs (ScriptableObject)', 'NPCConversationStore.cs', 'NPCChatUIManager.cs', 'OpenRouterApiKeyStore.cs'],
    connector: 'Love / Friendship / Trust deltas (JSON)',
  },
  {
    label: '03', title: 'Simulation Logic',
    icon: '⚙️', color: 'var(--accent-warm)', colorBg: 'rgba(212,146,74,0.09)', colorBorder: 'rgba(212,146,74,0.25)',
    desc: 'Stateful simulation systems that react to AI-driven relationship changes. Manages shop tiers, area unlocks, and persistent save state.',
    scripts: ['NPCRelationshipStats.cs', 'SaveManager.cs', 'NPCShopManager.cs', 'MainMenuController.cs'],
    connector: null,
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" style={{ padding: 'var(--space-section-desktop) 0', background: 'rgba(255,255,255,0.22)' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 80px' }}>
            <div className="label-eyebrow" style={{ marginBottom: 14 }}>System Architecture</div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
              Three clean layers
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              The AI module is intentionally decoupled from gameplay logic. Game systems talk to the AI module; the AI module never directly touches farming or inventory. This separation makes the system testable and extensible.
            </p>
          </div>
        </FadeIn>

        {/* Architecture layers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 860, margin: '0 auto' }}>
          {layers.map((layer, i) => (
            <FadeIn key={layer.title} delay={i * 0.12}>
              <div>
                {/* Layer block */}
                <div style={{
                  background: layer.colorBg,
                  border: `1px solid ${layer.colorBorder}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 36px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Background label */}
                  <div style={{
                    position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
                    fontSize: 120, fontWeight: 900, color: layer.color, opacity: 0.06,
                    lineHeight: 1, userSelect: 'none',
                    fontVariantNumeric: 'tabular-nums',
                  }}>{layer.label}</div>

                  <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                    {/* Icon */}
                    <div style={{
                      width: 64, height: 64, borderRadius: 'var(--radius-md)', flexShrink: 0,
                      background: 'rgba(255,255,255,0.6)', border: `1px solid ${layer.colorBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30,
                    }}>{layer.icon}</div>

                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8, letterSpacing: '-0.01em' }}>
                        {layer.title}
                      </h3>
                      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: 20 }}>{layer.desc}</p>

                      {/* Scripts grid */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {layer.scripts.map(s => (
                          <code key={s} style={{
                            padding: '4px 11px', borderRadius: 'var(--radius-sm)',
                            background: 'rgba(255,255,255,0.65)',
                            border: `1px solid ${layer.colorBorder}`,
                            fontSize: 12, fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
                            color: 'var(--text-primary)', fontWeight: 500,
                          }}>{s}</code>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector arrow */}
                {layer.connector && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px 0' }}>
                    <div style={{ width: 2, height: 14, background: 'rgba(0,0,0,0.12)' }} />
                    <div style={{
                      padding: '5px 16px', borderRadius: 'var(--radius-pill)',
                      background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.08)',
                      fontSize: 12, fontWeight: 500, color: 'var(--text-muted)',
                      fontFamily: "'SF Mono', 'Fira Code', monospace",
                    }}>{layer.connector}</div>
                    <div style={{ width: 2, height: 14, background: 'rgba(0,0,0,0.12)' }} />
                    {/* Arrow head */}
                    <div style={{
                      width: 0, height: 0,
                      borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
                      borderTop: '8px solid rgba(0,0,0,0.18)',
                    }} />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Save system callout */}
        <FadeIn delay={0.1}>
          <div style={{
            marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
          }}>
            <div style={{
              background: 'rgba(90,154,74,0.07)', border: '1px solid rgba(90,154,74,0.20)',
              borderRadius: 'var(--radius-lg)', padding: 28,
            }}>
              <div style={{ fontSize: 26, marginBottom: 12 }}>💾</div>
              <h4 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>Save System</h4>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                <code style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,0.06)', padding: '1px 5px', borderRadius: 4 }}>SaveManager.cs</code> serializes player data — coins, inventory (10 slots), calendar state, scene position, gate states — to Unity&apos;s <code style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,0.06)', padding: '1px 5px', borderRadius: 4 }}>PlayerPrefs</code> as JSON strings.
              </p>
            </div>
            <div style={{
              background: 'rgba(106,170,212,0.07)', border: '1px solid rgba(106,170,212,0.20)',
              borderRadius: 'var(--radius-lg)', padding: 28,
            }}>
              <div style={{ fontSize: 26, marginBottom: 12 }}>💬</div>
              <h4 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>Conversation Persistence</h4>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                <code style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,0.06)', padding: '1px 5px', borderRadius: 4 }}>NPCConversationStore.cs</code> writes full message history per NPC to JSON files. On next interaction, history is loaded and prepended to the system prompt — giving NPCs persistent memory across sessions.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 900px) {
          #architecture .container > div:last-child > div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          #architecture .container > div:nth-child(2) > div > div > div[style*="gap: 28px"] { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
