import rizky from '../assets/rizky.jpg'
import GoldFrame from '../components/GoldFrame.jsx'
import NextButton from '../components/NextButton.jsx'

export default function Home() {
  return (
    <section className="page hero container" aria-labelledby="hero-title">
      <div className="hero-text">
        <p className="eyebrow">Selamat datang di portfolio saya</p>
        <h1 id="hero-title" className="gold-shift">Mohammad Rizky</h1>
        <p className="lead">
          Halo! Perkenalkan, saya Rizky, mahasiswa Universitas Muhammadiyah Semarang (UNIMUS),
          Fakultas Teknik, Program Studi S1 Teknik Mesin.
        </p>
        <ul className="chips" aria-label="Latar belakang">
          <li>UNIMUS</li>
          <li>Fakultas Teknik</li>
          <li>S1 Teknik Mesin</li>
        </ul>
        <NextButton to="about" title="About Me" hint="Kenal lebih jauh tentang saya" />
      </div>

      <div className="hero-visual">
        <div className="photo-stage">
          <div className="orbit" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="photo-glow" aria-hidden="true" />
          <GoldFrame className="photo-frame">
            <img src={rizky} alt="Foto Mohammad Rizky" width="370" height="553" fetchPriority="high" />
          </GoldFrame>
        </div>
      </div>
    </section>
  )
}
