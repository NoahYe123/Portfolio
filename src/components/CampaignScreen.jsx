import { experience } from '../data/resume.js'

const TYPE_COLOR = {
  'FULL-TIME':  '#00ff88',
  'INTERNSHIP': '#00d4ff',
  'VOLUNTEER':  '#ffaa00',
}

export default function CampaignScreen({ navigate }) {
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
      <div className="screen-title">CAMPAIGN</div>
      <div className="screen-subtitle">// COMBAT RECORD — DEPLOYMENT HISTORY</div>

      <div className="sc-scroll" style={{ flex: 1 }}>
        <div style={{ position: 'relative', paddingLeft: '2rem', paddingBottom: '2rem' }}>
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          {experience.map((job, idx) => (
            <div
              key={job.id}
              style={{
                position: 'relative',
                marginBottom: idx < experience.length - 1 ? '2.5rem' : 0,
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.4rem',
                  top: '1.2rem',
                  width: '10px',
                  height: '10px',
                  background: 'var(--accent)',
                  border: '2px solid var(--bg)',
                  boxShadow: '0 0 8px var(--accent)',
                  transform: 'rotate(45deg)',
                }}
              />

              <div className="sc-panel">
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-head)',
                        fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                        fontWeight: 700,
                        color: 'var(--text-bright)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {job.company}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        color: 'var(--accent)',
                        marginTop: '0.25rem',
                      }}
                    >
                      {job.role}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.95rem',
                        color: 'var(--text-dim)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {job.period}
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-head)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: TYPE_COLOR[job.type] ?? 'var(--text-dim)',
                        border: `1px solid ${TYPE_COLOR[job.type] ?? 'var(--border)'}`,
                        padding: '0.15rem 0.5rem',
                        background: `${TYPE_COLOR[job.type] ?? 'var(--border)'}18`,
                      }}
                    >
                      {job.type}
                    </span>
                  </div>
                </div>

                {job.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                    {job.tech.map(t => (
                      <span key={t} className="sc-tag">{t}</span>
                    ))}
                  </div>
                )}

                <div className="sc-divider" style={{ margin: '0.75rem 0' }} />

                {/* Bullet points */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.95rem',
                        color: 'var(--text)',
                        lineHeight: 1.8,
                        display: 'flex',
                        gap: '0.75rem',
                      }}
                    >
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.05em' }}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
