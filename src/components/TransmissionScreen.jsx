import { useState, useEffect } from 'react'
import { profile } from '../data/resume.js'

const LINKS = [
  {
    label: 'EMAIL',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: '✉',
    desc: 'Direct comm channel',
  },
  {
    label: 'GITHUB',
    value: 'github.com/NoahYe123',
    href: profile.github,
    icon: '⌥',
    desc: 'Code repository access',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/noah-ye',
    href: profile.linkedin,
    icon: '◈',
    desc: 'Professional network',
  },
]

const LINES = [
  '> INITIALIZING COMM TERMINAL...',
  '> ENCRYPTION HANDSHAKE: OK',
  '> SECURE CHANNEL ESTABLISHED',
  '> AWAITING TRANSMISSION FROM OPERATOR...',
]

export default function TransmissionScreen({ navigate }) {
  const [copied, setCopied] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const copy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    })
  }

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
      {/* Radar background */}
      {!isMobile && <div aria-hidden="true" style={{
        position: 'absolute',
        right: '-5%',
        bottom: '10%',
        width: 'min(70vh, 70vw)',
        height: 'min(70vh, 70vw)',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        {/* Concentric rings */}
        {[1, 0.72, 0.5, 0.28].map((scale, i) => (
          <div key={i} style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '1px solid rgba(0, 212, 255, 0.12)',
            transform: `scale(${scale})`,
            transformOrigin: 'center',
          }} />
        ))}
        {/* Cross-hairs */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, transparent calc(50% - 0.5px), rgba(0,212,255,0.08) calc(50% - 0.5px), rgba(0,212,255,0.08) calc(50% + 0.5px), transparent calc(50% + 0.5px)),
            linear-gradient(to bottom, transparent calc(50% - 0.5px), rgba(0,212,255,0.08) calc(50% - 0.5px), rgba(0,212,255,0.08) calc(50% + 0.5px), transparent calc(50% + 0.5px))
          `,
        }} />
        {/* Sweep */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, transparent 340deg, rgba(0,212,255,0.18) 355deg, rgba(0,212,255,0.06) 360deg)',
          animation: 'radarSweep 4s linear infinite',
        }} />
        {/* Center dot */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '6px', height: '6px',
          borderRadius: '50%',
          background: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent)',
          transform: 'translate(-50%, -50%)',
        }} />
        {/* Ping blips */}
        {[
          { top: '32%', left: '58%', delay: '1.2s' },
          { top: '61%', left: '38%', delay: '2.8s' },
          { top: '44%', left: '72%', delay: '0.4s' },
        ].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '4px', height: '4px',
            borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 6px var(--accent)',
            top: pos.top, left: pos.left,
            animation: `blip 4s ${pos.delay} ease-out infinite`,
          }} />
        ))}
      </div>}
      <div className="screen-title">TRANSMISSION</div>
      <div className="screen-subtitle">// SECURE COMM — OPEN CHANNEL</div>

      <div
        className={isMobile ? '' : 'sc-scroll'}
        style={{
          flex: 1,
          position: 'relative',
          zIndex: 1,
          overflowY: isMobile ? 'auto' : undefined,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
            gridAutoRows: 'auto',
            alignContent: 'start',
            gap: '1.5rem',
            paddingBottom: '2rem',
          }}
        >
          {/* Terminal log panel */}
          <div className="sc-panel" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <div
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--text-dim)',
                marginBottom: '1rem',
              }}
            >
              ◈ COMM TERMINAL
            </div>

            {/* Terminal lines */}
            <div style={{ marginBottom: '1.5rem' }}>
              {LINES.map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: i === LINES.length - 1 ? 'var(--accent)' : 'var(--text-dim)',
                    lineHeight: 1.8,
                    animation: `fadeIn 0.4s ease ${i * 0.15}s both`,
                  }}
                >
                  {line}
                </div>
              ))}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '0.25rem',
                }}
              >
                <span style={{ marginRight: '4px' }}>{'>'}</span>
                <span className="cursor" />
              </div>
            </div>

            <div className="sc-divider" />

            {/* Status readout */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                ['SIGNAL STRENGTH', '████████░░', 'var(--success)'],
                ['ENCRYPTION', 'AES-256', 'var(--accent)'],
                ['STATUS', 'OPEN', 'var(--success)'],
              ].map(([label, val, color]) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                  }}
                >
                  <span style={{ color: 'var(--text-dim)' }}>{label}</span>
                  <span style={{ color }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--text-dim)',
                marginBottom: '1rem',
              }}
            >
              ◈ CONTACT
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {LINKS.map(({ label, value, href, icon, desc }) => (
                <div
                  key={label}
                  className="sc-panel"
                  style={{ padding: '1.5rem 1.75rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                        <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>{icon}</span>
                        <span
                          style={{
                            fontFamily: 'var(--font-head)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                            color: 'var(--text-dim)',
                          }}
                        >
                          {label}
                        </span>
                      </div>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '1rem',
                          color: 'var(--accent)',
                          textDecoration: 'none',
                          display: 'block',
                          marginBottom: '0.3rem',
                          wordBreak: 'break-all',
                        }}
                        onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                      >
                        {value}
                      </a>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--text-dim)',
                        }}
                      >
                        {desc}
                      </div>
                    </div>

                    <button
                      onClick={() => copy(label === 'EMAIL' ? value : href, label)}
                      style={{
                        fontFamily: 'var(--font-head)',
                        fontSize: '0.55rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: copied === label ? 'var(--success)' : 'var(--text-dim)',
                        background: 'transparent',
                        border: `1px solid ${copied === label ? 'var(--success)' : 'var(--border)'}`,
                        padding: '0.3rem 0.6rem',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s',
                        flexShrink: 0,
                      }}
                    >
                      {copied === label ? 'COPIED' : 'COPY'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                border: '1px solid var(--border)',
                background: 'rgba(0,212,255,0.03)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-dim)',
                lineHeight: 1.8,
              }}
            >
              <span style={{ color: 'var(--accent)' }}>// </span>
              Open to new opportunities, collaborations, and interesting problems.
              <br />
              <span style={{ color: 'var(--accent)' }}>// </span>
              Response time: usually within 24h.
              <br />
              <span style={{ color: 'var(--accent)' }}>// </span>
              <span style={{ color: 'var(--text-bright)' }}>—{profile.codename}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blip {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          10%       { opacity: 1; transform: scale(1); }
          30%       { opacity: 0.6; }
          60%       { opacity: 0; transform: scale(1.5); }
        }
      `}</style>
    </div>
  )
}
