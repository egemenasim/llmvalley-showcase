'use client';
import FadeIn from '@/components/FadeIn';
import GlassCard from '@/components/GlassCard';

const steps = [
  {
    num: '01', icon: '🚶', title: 'Player Approaches NPC',
    desc: 'Player walks near an NPC in the village. An interaction prompt appears: "Press E to interact."',
    color: 'var(--accent-green)',
  },
  {
    num: '02', icon: '⌨️', title: 'Free-Text Input',
    desc: 'The dialogue UI opens. Player types any message freely — no fixed choices or branching menus.',
    color: 'var(--accent-sky)',
  },
  {
    num: '03', icon: '📝', title: 'Prompt Construction',
    desc: 'NPCChatAgent builds the system prompt: NPC persona + roleplay rules + current Love/Friendship/Trust scores + conversation history.',
    color: 'var(--accent-warm)',
  },
  {
    num: '04', icon: '🌐', title: 'OpenRouter API Request',
    desc: 'NPCOpenRouterClient sends a POST request via UnityWebRequest to openrouter.ai/api/v1/chat/completions with JSON payload.',
    color: 'var(--accent-golden)',
  },
  {
    num: '05', icon: '🤖', title: 'LLM Response',
    desc: 'The selected free LLM returns a contextual, in-character response. Out-of-character AI disclosures are stripped by a regex filter before display.',
    color: 'var(--accent-green)',
  },
  {
    num: '06', icon: '💬', title: 'Response Appears in UI',
    desc: 'The NPC\'s reply is appended to the NPCChatUIManager dialogue view. The conversation is saved to NPCConversationStore (JSON files).',
    color: 'var(--accent-sky)',
  },
  {
    num: '07', icon: '❤️', title: 'Relationship Evaluation',
    desc: 'Every 5 player messages, a second LLM call evaluates the conversation window and returns Love/Friendship/Trust deltas (−2 to +2 each). Stats update and persist.',
    color: '#d4507a',
  },
];

export default function AiDialogueSection() {
  return (
    <section id="ai-dialogue" style={{ padding: 'var(--space-section-desktop) 0' }}>
      <div className="container">
        {/* Header */}
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 80px' }}>
            <div className="label-eyebrow" style={{ marginBottom: 14 }}>AI Dialogue System</div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
              How the conversation pipeline works
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Every NPC interaction is a live API call. There are no scripted branches — each response is generated fresh, shaped by a rich persona prompt and the player's full conversation history.
            </p>
          </div>
        </FadeIn>

        {/* Pipeline steps */}
        <div style={{ position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', left: 39, top: 52, bottom: 52,
            width: 2,
            background: 'linear-gradient(to bottom, var(--accent-green), var(--accent-sky), #d4507a)',
            borderRadius: 2, opacity: 0.35,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.07}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  {/* Circle */}
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                    background: `${s.color}22`, border: `2px solid ${s.color}66`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, zIndex: 1,
                    boxShadow: `0 0 0 4px var(--bg-base)`,
                  }}>{s.icon}</div>

                  {/* Card */}
                  <GlassCard style={{ flex: 1 }} padding="22px 28px" radius="var(--radius-md)">
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: '0.1em' }}>STEP {s.num}</span>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)' }}>{s.title}</h3>
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{s.desc}</p>
                  </GlassCard>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Technical details */}
        <FadeIn delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 64 }}>
            {[
              {
                title: 'Asynchronous by design',
                icon: '⚡',
                desc: 'All API calls use Unity Coroutines via UnityWebRequest. The game never blocks — UI shows "NPC is thinking…" while waiting for a response.',
                color: 'rgba(200,168,48,0.10)', border: 'rgba(200,168,48,0.25)',
              },
              {
                title: 'Fallback on failure',
                icon: '🛡️',
                desc: 'If the API key is missing, the model ID is invalid, or the network fails, the error is shown directly in the dialogue UI. No silent crashes.',
                color: 'rgba(212,80,60,0.08)', border: 'rgba(212,80,60,0.20)',
              },
              {
                title: 'Identity filtering',
                icon: '🎭',
                desc: 'A regex pass removes out-of-character AI disclosures ("I am an AI", "dil modeli" etc.) before any text is displayed, preserving immersion.',
                color: 'rgba(90,154,74,0.08)', border: 'rgba(90,154,74,0.22)',
              },
            ].map(card => (
              <div key={card.title} style={{
                background: card.color, border: `1px solid ${card.border}`,
                borderRadius: 'var(--radius-lg)', padding: 28,
              }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{card.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: 'var(--text-primary)' }}>{card.title}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text-secondary)' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          #ai-dialogue .container > div:last-child { grid-template-columns: 1fr !important; }
          #ai-dialogue .container > div:last-child > div { margin-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}
