import { useState, useEffect } from 'react'
import { profile } from '../data/resume.js'

const MENU_ITEMS = [
  { key: 'campaign',     label: 'CAMPAIGN',      desc: 'View combat record' },
  { key: 'armory',       label: 'ARMORY',        desc: 'Browse tech loadout' },
  { key: 'command',      label: 'COMMAND CENTER', desc: 'Active operations' },
  { key: 'intel',        label: 'INTEL',          desc: 'Background dossier' },
  { key: 'transmission', label: 'TRANSMISSION',   desc: 'Open comm channel' },
]

const FULL_TITLE = profile.codename
const TYPING_SPEED = 80

export default function MainMenu({ navigate }) {
  const [typed, setTyped] = useState('')
  const [ready, setReady] = useState(false)
  const [hovered, setHovered] = useState(null)

  // Typing animation for title
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setTyped(FULL_TITLE.slice(0, i))
      if (i >= FULL_TITLE.length) {
        clearInterval(interval)
        setTimeout(() => setReady(true), 400)
      }
    }, TYPING_SPEED)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '0.25em',
            color: 'var(--accent)',
            textShadow: '0 0 20px rgba(0,212,255,0.6), 0 0 60px rgba(0,212,255,0.2)',
            minHeight: '1.2em',
          }}
        >
          {typed}
          <span className="cursor" />
        </div>

        {ready && (
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
              letterSpacing: '0.2em',
              color: 'var(--text-dim)',
              marginTop: '0.5rem',
              animation: 'fadeIn 0.6s ease forwards',
            }}
          >
            {profile.tagline}
          </div>
        )}
      </div>

      {/* Divider */}
      {ready && (
        <div
          style={{
            width: 'min(400px, 90vw)',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
            marginBottom: '2.5rem',
            opacity: 0.6,
          }}
        />
      )}

      {/* Menu items */}
      {ready && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: 'min(420px, 90vw)',
          }}
        >
          {MENU_ITEMS.map(({ key, label, desc }, idx) => (
            <button
              key={key}
              onClick={() => navigate(key)}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: hovered === key ? '#fff' : 'var(--text-bright)',
                background: hovered === key ? 'rgba(0,212,255,0.12)' : 'rgba(13,27,42,0.7)',
                border: `1px solid ${hovered === key ? 'var(--accent)' : 'var(--border)'}`,
                padding: '0.9rem 1.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.2s',
                boxShadow: hovered === key ? '0 0 16px rgba(0,212,255,0.2), inset 0 0 8px rgba(0,212,255,0.05)' : 'none',
                clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                animationDelay: `${idx * 0.08}s`,
                animation: 'slideIn 0.4s ease forwards',
                opacity: 0,
              }}
            >
              <span>{label}</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: hovered === key ? 'var(--accent)' : 'var(--text-dim)',
                  transition: 'color 0.2s',
                }}
              >
                {desc}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Bottom status bar */}
      {ready && (
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: 'var(--text-dim)',
            display: 'flex',
            gap: '2rem',
          }}
        >
          <span>STATUS: <span style={{ color: 'var(--success)' }}>ONLINE</span></span>
          <span>LOCATION: {profile.location.toUpperCase()}</span>
          <span>CLEARANCE: <span style={{ color: 'var(--accent)' }}>OPEN</span></span>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
