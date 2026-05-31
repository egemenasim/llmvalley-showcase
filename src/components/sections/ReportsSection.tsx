'use client';
import FadeIn from '@/components/FadeIn';

const reports = [
  {
    icon: '�',
    title: 'Project Proposal',
    filename: '0.Proposal- Group 21-LLM Valley- 31.10.2025.pdf',
    color: '#5a9a4a',
  },
  {
    icon: '📋',
    title: 'Project Specifications',
    filename: '1. CMPE491_Project Specifications Report_Team21_LLMValley.pdf',
    color: '#6aaad4',
  },
  {
    icon: '📊',
    title: 'Project Analysis Report',
    filename: '2.CMPE491_ Project Analysis Report- Group 21-LLM Valley- 28.11.2025 .pdf',
    color: '#9a7ad4',
  },
  {
    icon: '🏗️',
    title: 'Low Level Design Report',
    filename: '3.LLMValley_LowLevelDesign_Report Version 2) CMPE 492 - CMPE 492.pdf',
    color: '#d4924a',
  },
  {
    icon: '🎯',
    title: 'High Level Design Report',
    filename: '4. High Level Design Report_Group21 LLMValley.pdf',
    color: '#c8a830',
  },
  {
    icon: '✅',
    title: 'Test Plan',
       filename: '5.LlmValley_TestPlan.pdf',
    color: '#7a6ad4',
  },
  {
    icon: '🎉',
    title: 'Final Project Report',
    filename: '6.Group2_LLMValley_FinalReport-492.pdf',
    color: '#d4744a',
  },
];

export default function ReportsSection() {
  return (
    <section id="reports" style={{ padding: 'var(--space-section-desktop) 0', background: 'rgba(255,255,255,0.15)' }}>
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 72px' }}>
            <div className="label-eyebrow" style={{ marginBottom: 14 }}>Reports & Documentation</div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
              Project documentation
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Access comprehensive reports covering design, architecture, AI implementation, and user testing. All documents are available for download.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {reports.map((report, i) => (
            <FadeIn key={report.filename} delay={i * 0.06}>
              <a href={`/reports/${report.filename}`} download style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-lg)', padding: 20,
                  boxShadow: 'var(--shadow-soft)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                  display: 'flex', flexDirection: 'column' as const, gap: 10,
                  height: '100%',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-float)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${report.color}12`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-soft)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 'var(--radius-sm)',
                    background: `${report.color}22`,
                    border: `1px solid ${report.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                    flexShrink: 0,
                    margin: '0 auto',
                  }}>{report.icon}</div>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, flex: 1, textAlign: 'center' }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{report.title}</h3>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: report.color, fontSize: 12, fontWeight: 600 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Download PDF
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 900px) {
          #reports .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #reports .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
