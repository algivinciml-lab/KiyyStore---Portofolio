import { useEffect } from 'react'
import { createPortal } from 'react-dom'

// Dirender lewat portal ke <body> supaya selalu menutupi seluruh layar,
// tidak terjebak di dalam elemen halaman yang beranimasi (transform).
export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [item, onClose])

  if (!item) return null

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
      <button type="button" className="lightbox-close" aria-label="Tutup gambar" onClick={onClose}>
        ×
      </button>
      <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} />
      </div>
    </div>,
    document.body
  )
}