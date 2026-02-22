import { useEffect, useRef } from 'react'

const STAR_COUNT = 200

export default function StarfieldBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let animId
    let W = window.innerWidth
    let H = window.innerHeight

    // Create stars
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.15 + 0.03,
      opacity: Math.random() * 0.7 + 0.3,
    }))

    const resize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      for (const s of stars) {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(140, 200, 255, ${s.opacity})`
        ctx.fill()

        // Drift downward slowly
        s.y += s.speed
        if (s.y > H + 2) {
          s.y = -2
          s.x = Math.random() * W
        }
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
