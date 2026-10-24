import { useMemo } from 'react'

// Partikel emas yang melayang pelan di latar belakang.
export default function Particles({ count = 22 }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 6,
        dur: 14 + Math.random() * 18,
        delay: -Math.random() * 30,
      })),
    [count]
  )

  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          style={{
            left: `${d.left}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            '--dur': `${d.dur}s`,
            '--delay': `${d.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
