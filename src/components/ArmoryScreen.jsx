import { useEffect, useRef } from 'react'
import { skills } from '../data/resume.js'

const SECTIONS = [
  { key: 'languages', label: 'LANGUAGES', icon: '⟨/⟩' },
  { key: 'frameworks', label: 'FRAMEWORKS', icon: '⬡' },
  { key: 'infra', label: 'INFRASTRUCTURE', icon: '◈' },
]

function SkillBar({ name, level }) {
  const fillRef = useRef(null)
  const rowRef = useRef(null)

  useEffect(() => {
    const fill = fillRef.current
    const row = rowRef.current
    if (!fill || !row) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fill.style.width = `${level}%`
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(row)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={rowRef} style={{ marginBottom: '1.1rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.35rem',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: '0.4rem',
        }}
      >
        <span
          style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          color: 'var(--text)',
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
          flex: 1,
          minWidth: 0,
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: '0.78rem',
            color: 'var(--accent)',
          }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div ref={fillRef} className="skill-bar-fill" />
      </div>
    </div>
  )
}

export default function ArmoryScreen({ navigate }) {
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
        overflowX: 'hidden',
      }}
    >
      <div className="screen-title">ARMORY</div>
      <div className="screen-subtitle">// TECHNOLOGY LOADOUT — EQUIPMENT MANIFEST</div>

      <div className="sc-scroll" style={{ flex: 1, overflowX: 'hidden' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: '1.5rem',
            paddingBottom: '2rem',
            minWidth: 0,
          }}
        >
          {SECTIONS.map(({ key, label, icon }) => (
            <div key={key} className="sc-panel" style={{ minWidth: 0, overflow: 'hidden' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: '1.1rem',
                    color: 'var(--accent)',
                  }}
                >
                  {icon}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      color: 'var(--text-bright)',
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)',
                      marginTop: '0.1rem',
                    }}
                  >
                    {skills[key].length} SYSTEMS ONLINE
                  </div>
                </div>
              </div>

              {skills[key].map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
