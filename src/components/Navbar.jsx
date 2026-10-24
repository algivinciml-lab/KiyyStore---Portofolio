import { useEffect, useState } from 'react'
import { NAV } from '../data/content.js'

export default function Navbar({ route }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [route])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Navigasi utama">
        <a className="brand" href="#/home" aria-label="Mohammad Rizky — ke halaman Home">
          <span className="brand-mark">MR</span>
          <span className="brand-name">Rizky</span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map((item) => (
            <li key={item.id}>
              <a href={`#/${item.id}`} aria-current={route === item.id ? 'page' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
