import { education, leadership, profile } from '../data/resume.js'

export default function IntelScreen({ navigate }) {
  return (
    <div
      className="screen-mobile-pad"
      style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        paddingBottom: '1rem',
      }}
    >
      <div className="screen-title">INTEL</div>
      <div className="screen-subtitle">// CLASSIFIED DOSSIER — BACKGROUND & CLEARANCE</div>

      <div className="sc-scroll" style={{ flex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: '1.5rem',
            paddingBottom: '2rem',
          }}
        >
          {/* Education */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--text-dim)',
                marginBottom: '1rem',
              }}
            >
              ◈ EDUCATION
            </div>

            {education.map((edu, i) => (
              <div key={i} className="sc-panel" style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    marginBottom: '0.4rem',
                  }}
                >
                  {edu.institution}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    color: 'var(--text-bright)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {edu.degree}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      color: 'var(--text-dim)',
                    }}
                  >
                    {edu.period}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--success)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    GPA: {edu.gpa}
                  </span>
                </div>

                <div className="sc-divider" style={{ margin: '0.75rem 0' }} />

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {edu.highlights.map((h, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.95rem',
                        color: 'var(--text)',
                        lineHeight: 1.7,
                        display: 'flex',
                        gap: '0.6rem',
                      }}
                    >
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--text-dim)',
                marginBottom: '1rem',
              }}
            >
              ◈ LEADERSHIP & ACTIVITIES
            </div>

            {leadership.map((item, i) => (
              <div key={i} className="sc-panel" style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.35rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-bright)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item.org}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      color: 'var(--text-dim)',
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    color: 'var(--accent)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {item.role}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.highlights.map((h, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.95rem',
                        color: 'var(--text)',
                        lineHeight: 1.7,
                        display: 'flex',
                        gap: '0.6rem',
                      }}
                    >
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Agent ID card */}
            <div
              className="sc-panel"
              style={{
                background: 'rgba(0,212,255,0.04)',
                borderColor: 'var(--accent)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'var(--text-dim)',
                  marginBottom: '1rem',
                }}
              >
                AGENT IDENTIFICATION
              </div>

              {[
                ['DESIGNATION', profile.name],
                ['CODENAME', profile.codename],
                ['SPECIALIZATION', profile.title],
                ['BASE OF OPERATIONS', profile.location],
              ].map(([label, val]) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    marginBottom: '0.4rem',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span style={{ color: 'var(--text-dim)', minWidth: '13rem' }}>{label}</span>
                  <span style={{ color: 'var(--text-bright)' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
