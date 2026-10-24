import GoldFrame from '../components/GoldFrame.jsx'
import NextButton from '../components/NextButton.jsx'
import Reveal from '../components/Reveal.jsx'
import { HOBBIES } from '../data/content.js'

export default function About() {
  return (
    <section className="page container" aria-labelledby="about-title">
      <header className="page-head">
        <p className="eyebrow">About me</p>
        <h1 id="about-title" className="page-title gold-shift">Who Am I?</h1>
        <p className="page-sub">Saya Rizky, ini adalah berbagai hal tentang saya.</p>
      </header>

      <Reveal className="card story">
        <p>
          Selain menjalani aktivitas perkuliahan, saya juga memiliki usaha di bidang jual beli akun
          game sebagai sumber penghasilan tambahan (passive income). Kegiatan ini menjadi salah satu
          cara saya mengembangkan jiwa kewirausahaan, melatih kemampuan berbisnis, serta belajar
          mengelola peluang di dunia digital.
        </p>
        <p>
          Saya percaya bahwa kesuksesan dapat dibangun melalui kombinasi antara pendidikan,
          kreativitas, dan semangat berwirausaha. Saya terus berusaha mengembangkan diri, menambah
          pengalaman, serta meningkatkan kemampuan baik di bidang teknik mesin maupun bisnis digital.
        </p>
      </Reveal>

      <Reveal as="h2" className="section-title">
        Hobi <span className="gold-text">Saya</span>
      </Reveal>

      <div className="hobbies">
        {HOBBIES.map((h, i) => (
          <Reveal key={h.title} className="hobby" delay={i * 80}>
            <GoldFrame className="hobby-media">
              <img src={h.image} alt={h.alt} loading="lazy" width="460" height="614" />
            </GoldFrame>
            <div className="hobby-text">
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="next-wrap">
        <NextButton to="portfolio" title="Portofolio" hint="Lihat hasil kerja saya" />
      </Reveal>
    </section>
  )
}
