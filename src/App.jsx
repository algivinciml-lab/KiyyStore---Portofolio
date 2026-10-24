import { useEffect } from 'react'
import useHashRoute from './hooks/useHashRoute.js'
import { TITLES } from './data/content.js'
import Navbar from './components/Navbar.jsx'
import Particles from './components/Particles.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'

const PAGES = {
  home: Home,
  about: About,
  portfolio: Portfolio,
  contact: Contact,
}

export default function App() {
  const route = useHashRoute()
  const Page = PAGES[route] || Home

  useEffect(() => {
    document.title = TITLES[route] || TITLES.home
  }, [route])

  return (
    <div className="app">
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <Particles />
      <Navbar route={route} />
      <main id="main" className="main">
        <Page key={route} />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Mohammad Rizky</p>
      </footer>
    </div>
  )
}