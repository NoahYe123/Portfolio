import { useState } from 'react'
import { projects } from '../data/resume.js'

const STATUS_COLOR = {
  'DEPLOYED':       '#00ff88',
  'COMPLETE':       '#00d4ff',
  'IN DEVELOPMENT': '#ffaa00',
}

export default function CommandCenter({ navigate }) {
  const [selected, setSelected] = useState(null)

  const active = selected ? projects.find(p => p.id === selected) : null

  return (
    <div
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
      <div className="screen-title">COMMAND CENTER</div>
      <div className="screen-subtitle">// ACTIVE OPERATIONS — MISSION DOSSIERS</div>

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: active ? '1fr 1fr' : 'minmax(0, 50%)',
          gap: '1.5rem',
          overflow: 'hidden',
          minHeight: 0,
        }}
      >
        {/* Project list */}
        <div className="sc-scroll">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingBottom: '1rem' }}>
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(selected === p.id ? null : p.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: selected === p.id ? 'rgba(0,212,255,0.1)' : 'var(--panel)',
                  border: `1px solid ${selected === p.id ? 'var(--accent)' : 'var(--border)'}`,
                  padding: '2.25rem 4.5rem 2.25rem 1.25rem',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s',
                  boxShadow: selected === p.id ? '0 0 12px rgba(0,212,255,0.15)' : 'none',
                }}
              >
                {/* Corner accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '8px', height: '8px',
                    borderTop: '2px solid var(--accent)',
                    borderLeft: '2px solid var(--accent)',
                  }}
                />

                {/* Clickable arrow indicator */}
                <div
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: selected === p.id ? 'translateY(-50%) rotate(90deg)' : 'translateY(-50%)',
                    transition: 'transform 0.2s, color 0.2s',
                    fontFamily: 'var(--font-head)',
                    fontSize: '0.75rem',
                    color: selected === p.id ? 'var(--accent)' : 'var(--text-dim)',
                  }}
                >
                  ▶
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: selected === p.id ? 'var(--accent)' : 'var(--text-bright)',
                      letterSpacing: '0.08em',
                      transition: 'color 0.2s',
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {p.codename}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: STATUS_COLOR[p.status] ?? 'var(--text-dim)',
                      border: `1px solid ${STATUS_COLOR[p.status] ?? 'var(--border)'}`,
                      padding: '0.2rem 0.6rem',
                      background: `${STATUS_COLOR[p.status] ?? 'transparent'}18`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mission briefing panel */}
        {active && (
          <div className="sc-scroll">
            <div className="sc-panel" style={{ height: 'fit-content' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-dim)',
                  letterSpacing: '0.14em',
                  marginBottom: '0.75rem',
                }}
              >
                MISSION BRIEFING
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  marginBottom: '0.35rem',
                  textShadow: '0 0 10px rgba(0,212,255,0.4)',
                }}
              >
                {active.name}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-dim)',
                  marginBottom: '1.5rem',
                }}
              >
                {active.codename}
              </div>

              <div className="sc-divider" />

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  color: 'var(--text)',
                  lineHeight: 1.8,
                  marginBottom: '1.75rem',
                }}
              >
                {active.description}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--text-dim)',
                  marginBottom: '0.75rem',
                }}
              >
                TECH STACK
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {active.tech.map(t => (
                  <span key={t} className="sc-tag">{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: STATUS_COLOR[active.status] ?? 'var(--text-dim)',
                    border: `1px solid ${STATUS_COLOR[active.status] ?? 'var(--border)'}`,
                    padding: '0.3rem 0.75rem',
                  }}
                >
                  STATUS: {active.status}
                </span>

                {active.link && (
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sc-btn"
                    style={{ textDecoration: 'none', fontSize: '0.62rem' }}
                  >
                    VIEW PROJECT
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
