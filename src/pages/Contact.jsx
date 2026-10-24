import GoldFrame from '../components/GoldFrame.jsx'
import Reveal from '../components/Reveal.jsx'
import { ExternalIcon, InstagramIcon, WhatsappIcon } from '../components/Icons.jsx'
import { CONTACTS } from '../data/content.js'

const ICONS = { instagram: InstagramIcon, whatsapp: WhatsappIcon }

export default function Contact() {
  return (
    <section className="page container" aria-labelledby="contact-title">
      <header className="page-head">
        <p className="eyebrow">Contact</p>
        <h1 id="contact-title" className="page-title gold-shift">Hubungi Saya di Sini</h1>
        <p className="page-sub">Pilih platform yang paling nyaman untukmu.</p>
      </header>

      <div className="contacts">
        {CONTACTS.map((c, i) => {
          const Icon = ICONS[c.id]
          return (
            <Reveal key={c.id} delay={i * 100}>
              <GoldFrame className="contact-card">
                <div className="contact-body">
                  <span className="contact-icon">
                    <Icon />
                  </span>
                  <h2>{c.name}</h2>
                  <p className="contact-handle">{c.handle}</p>
                  <a className="btn btn-gold" href={c.url} target="_blank" rel="noopener noreferrer">
                    {c.cta} <ExternalIcon />
                  </a>
                </div>
              </GoldFrame>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="next-wrap">
        <a className="btn btn-ghost" href="#/home">← Kembali ke Home</a>
      </Reveal>
    </section>
  )
}
