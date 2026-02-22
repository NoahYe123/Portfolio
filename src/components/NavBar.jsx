import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { key: 'menu',         label: 'MAIN MENU' },
  { key: 'campaign',     label: 'CAMPAIGN' },
  { key: 'armory',       label: 'ARMORY' },
  { key: 'command',      label: 'CMD CENTER' },
  { key: 'intel',        label: 'INTEL' },
  { key: 'transmission', label: 'TRANSMISSION' },
]

export default function NavBar({ current, navigate }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const currentLabel = NAV_ITEMS.find(i => i.key === current)?.label ?? 'MENU'

  if (isMobile) {
    return (
      <div ref={menuRef} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        {/* Mobile bar */}
        <div style={{
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(10, 12, 16, 0.97)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(8px)',
          padding: '0 1rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-head)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'var(--accent)',
          }}>
            {currentLabel}
          </span>

          <button
            onClick={() => setOpen(o => !o)}
            style={{
              background: open ? 'var(--accent-glow)' : 'transparent',
              border: `1px solid ${open ? 'var(--accent)' : 'var(--border)'}`,
              padding: '0.4rem 0.7rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              transition: 'all 0.2s',
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: '18px',
                height: '2px',
                background: open ? 'var(--accent)' : 'var(--text-dim)',
                transition: 'all 0.2s',
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                  : 'scaleX(0)'
                  : 'none',
              }} />
            ))}
          </button>
        </div>

        {/* Dropdown */}
        {open && (
          <div style={{
            background: 'rgba(10, 12, 16, 0.98)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {NAV_ITEMS.map(({ key, label }) => {
              const active = key === current
              return (
                <button
                  key={key}
                  onClick={() => { navigate(key); setOpen(false) }}
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: active ? 'var(--accent)' : 'var(--text-dim)',
                    background: active ? 'rgba(0,212,255,0.08)' : 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    padding: '0.9rem 1.25rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {label}
                  {active && <span style={{ color: 'var(--accent)', fontSize: '0.6rem' }}>◈ CURRENT</span>}
                </button>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  // Desktop nav
  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      height: '52px',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(10, 12, 16, 0.92)',
      borderBottom: '1px solid var(--border)',
      backdropFilter: 'blur(8px)',
      padding: '0 0.75rem',
      gap: '0.15rem',
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollbarWidth: 'none',
    }}>
      {NAV_ITEMS.map(({ key, label }) => {
        const active = key === current
        return (
          <button
            key={key}
            onClick={() => navigate(key)}
            style={{
              fontFamily: 'var(--font-head)',
              fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: active ? '#fff' : 'var(--text-dim)',
              background: active ? 'var(--accent-glow)' : 'transparent',
              border: active ? '1px solid var(--accent)' : '1px solid transparent',
              padding: '0.35rem 0.6rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--text-bright)' }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-dim)' }}
          >
            {label}
          </button>
        )
      })}
    </nav>
  )
}
