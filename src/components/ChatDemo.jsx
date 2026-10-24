import { useEffect, useRef, useState } from 'react'
import GoldFrame from './GoldFrame.jsx'
import { CHAT } from '../data/content.js'

function Ticks() {
  return (
    <svg className="tick" viewBox="0 0 18 12" width="16" height="11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 6.5l3.5 3.5L11 2" />
      <path d="M7 10l1 .8L16 2" />
    </svg>
  )
}

function Shot({ shot }) {
  if (shot.src) {
    return <img className="shot-img" src={shot.src} alt="Screenshot akun yang ingin dibeli" />
  }
  // Tampilan screenshot tiruan jika belum ada gambar asli
  return (
    <div className="shot" role="img" aria-label={`Screenshot akun dengan harga ${shot.price}`}>
      <div className="shot-top">
        <span>Profil akun</span>
        <span>Stok tersedia</span>
      </div>
      <div className="shot-grid" aria-hidden="true">
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>
      <div className="shot-price">{shot.price}</div>
    </div>
  )
}

function Account({ account }) {
  return (
    <div className="acct">
      <span className="acct-label">{account.label}</span>
      <span className="acct-num blur" aria-hidden="true">{account.number}</span>
      <span className="acct-holder blur" aria-hidden="true">{account.holder}</span>
      <span className="sr-only">Nomor rekening disembunyikan</span>
    </div>
  )
}

function Receipt({ receipt }) {
  return (
    <div className="receipt" role="img" aria-label={`Bukti transfer berhasil ${receipt.amount}`}>
      <div className="receipt-ok" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </div>
      <div className="receipt-title">Transfer berhasil</div>
      <div className="receipt-amount">{receipt.amount}</div>
      <div className="receipt-date">{receipt.date}</div>
      <div className="receipt-row">
        <span>Penerima</span>
        <span className="blur" aria-hidden="true">kiiystore 0000</span>
      </div>
    </div>
  )
}

function Creds({ creds }) {
  return (
    <div className="creds">
      {creds.map((c) => (
        <div className="creds-row" key={c.label}>
          <span className="creds-label">{c.label}</span>
          <span className="creds-value blur" aria-hidden="true">{c.value}</span>
        </div>
      ))}
      <span className="sr-only">ID dan password disembunyikan</span>
    </div>
  )
}

// Animasi chat ala WhatsApp: indikator mengetik lalu pesan muncul satu per satu.
export default function ChatDemo() {
  const rootRef = useRef(null)
  const bodyRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [run, setRun] = useState(0)
  const [count, setCount] = useState(0)
  const [typing, setTyping] = useState(null)

  // mulai saat chat terlihat di layar
  useEffect(() => {
    const el = rootRef.current
    if (!el) return undefined
    if (!('IntersectionObserver' in window)) {
      setStarted(true)
      return undefined
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // jalankan urutan pesan
  useEffect(() => {
    if (!started) return undefined
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setCount(CHAT.length)
      setTyping(null)
      return undefined
    }

    setCount(0)
    setTyping(null)
    const timers = []
    let t = 700
    CHAT.forEach((m, i) => {
      const typeMs = m.shot || m.receipt ? 1000 : Math.min(2400, 800 + m.text.length * 24)
      timers.push(setTimeout(() => setTyping(m.from), t))
      t += typeMs
      timers.push(
        setTimeout(() => {
          setTyping(null)
          setCount(i + 1)
        }, t)
      )
      t += 800
    })
    return () => timers.forEach(clearTimeout)
  }, [started, run])

  // gulir otomatis di dalam kotak chat saja (bukan halaman)
  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [count, typing])

  const finished = count === CHAT.length
  const status = typing === 'buyer' ? 'mengetik…' : 'online'
  const sellerTyping = typing === 'seller'

  return (
    <div className="chat-wrap" ref={rootRef}>
      <GoldFrame className="chat-frame">
        <div className="chat">
          <div className="chat-head">
            <span className="chat-avatar" aria-hidden="true">B</span>
            <div>
              <div className="chat-name">Buyer</div>
              <div className={`chat-status ${typing === 'buyer' ? 'is-typing' : ''}`}>{status}</div>
            </div>
          </div>

          <div className="chat-body" ref={bodyRef} aria-live="polite">
            {CHAT.slice(0, count).map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                <span className="msg-name">{m.name}</span>
                {m.shot && <Shot shot={m.shot} />}
                {m.receipt && <Receipt receipt={m.receipt} />}
                <p>{m.text}</p>
                {m.account && <Account account={m.account} />}
                {m.creds && <Creds creds={m.creds} />}
                <span className="msg-meta">
                  {m.time}
                  {m.from === 'seller' && <Ticks />}
                </span>
              </div>
            ))}

            {typing && (
              <div className={`msg typing ${typing}`} aria-label={`${typing === 'seller' ? 'kiiystore' : 'Buyer'} sedang mengetik`}>
                <span /><span /><span />
              </div>
            )}
          </div>
        </div>
      </GoldFrame>

      <div className={`chat-replay ${finished ? 'show' : ''}`}>
        <button type="button" className="btn btn-ghost" onClick={() => setRun((r) => r + 1)}>
          ↻ Putar ulang
        </button>
      </div>
      {sellerTyping && <span className="sr-only">kiiystore sedang mengetik</span>}
    </div>
  )
}