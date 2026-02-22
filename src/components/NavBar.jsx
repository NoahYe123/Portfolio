const NAV_ITEMS = [
  { key: 'menu',         label: 'MAIN MENU' },
  { key: 'campaign',     label: 'CAMPAIGN' },
  { key: 'armory',       label: 'ARMORY' },
  { key: 'command',      label: 'CMD CENTER' },
  { key: 'intel',        label: 'INTEL' },
  { key: 'transmission', label: 'TRANSMISSION' },
]

export default function NavBar({ current, navigate }) {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(10, 12, 16, 0.92)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(8px)',
        padding: '0 1.5rem',
        gap: '0.25rem',
      }}
    >
      {NAV_ITEMS.map(({ key, label }) => {
        const active = key === current
        return (
          <button
            key={key}
            onClick={() => navigate(key)}
            style={{
              fontFamily: 'var(--font-head)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: active ? '#fff' : 'var(--text-dim)',
              background: active ? 'var(--accent-glow)' : 'transparent',
              border: active ? '1px solid var(--accent)' : '1px solid transparent',
              padding: '0.35rem 0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              if (!active) e.currentTarget.style.color = 'var(--text-bright)'
            }}
            onMouseLeave={e => {
              if (!active) e.currentTarget.style.color = 'var(--text-dim)'
            }}
          >
            {label}
          </button>
        )
      })}
    </nav>
  )
}
