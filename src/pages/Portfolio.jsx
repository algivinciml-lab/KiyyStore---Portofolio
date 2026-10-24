import { useCallback, useState } from 'react'
import ChatDemo from '../components/ChatDemo.jsx'
import GoldFrame from '../components/GoldFrame.jsx'
import Lightbox from '../components/Lightbox.jsx'
import NextButton from '../components/NextButton.jsx'
import Reveal from '../components/Reveal.jsx'
import { ExternalIcon } from '../components/Icons.jsx'
import { PROOFS, STORE_URL } from '../data/content.js'

export default function Portfolio() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section className="page container" aria-labelledby="porto-title">
      <header className="page-head">
        <p className="eyebrow">Portofolio</p>
        <h1 id="porto-title" className="page-title gold-shift">Bukti Kerja Saya</h1>
      </header>

      <Reveal className="card story">
        <p>
          Di usia muda, apalagi di masa studi perkuliahan, menurut saya menjalani bisnis jual &amp;
          beli akun game adalah pilihan yang tepat. Bisnis ini bisa dilakukan secara online dan tidak
          terlalu memakan waktu, serta melatih dan memberi saya pengalaman di dunia bisnis.
        </p>
      </Reveal>

      <Reveal as="h2" className="section-title">
        Contoh <span className="gold-text">Interaksi</span> Buyer
      </Reveal>
      <p className="chat-section-sub">Begini kira-kira alur obrolan saya dengan pembeli.</p>
      <Reveal>
        <ChatDemo />
      </Reveal>

      <Reveal as="h2" className="section-title">
        My <span className="gold-text">Porto</span>
      </Reveal>

      <div className="proofs">
        {PROOFS.map((p, i) => (
          <Reveal key={p.src} className="proof" delay={i * 100}>
            <GoldFrame className="proof-frame">
              <button
                type="button"
                className="proof-btn"
                onClick={() => setActive(p)}
                aria-label={`Perbesar gambar: ${p.alt}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" style={{ objectPosition: p.position }} />
                <span className="proof-hint">Ketuk untuk memperbesar</span>
              </button>
            </GoldFrame>
            <p className="proof-caption">
              <span>Transaksi =</span> <strong className="gold-text">{p.amount}</strong>
              <small>{p.date}</small>
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="more-work">
        <p>Hasil kerja lain bisa Anda cek di sini</p>
        <a className="btn btn-gold" href={STORE_URL} target="_blank" rel="noopener noreferrer">
          lynk.id/kiiystore <ExternalIcon />
        </a>
        <p className="privacy-note">Data rekening pada bukti transaksi telah disamarkan demi keamanan.</p>
      </Reveal>

      <Reveal className="next-wrap">
        <NextButton to="contact" title="Contact" hint="Hubungi saya" />
      </Reveal>

      <Lightbox item={active} onClose={close} />
    </section>
  )
}