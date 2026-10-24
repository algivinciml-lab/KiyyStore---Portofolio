import { useEffect, useState } from 'react'
import { NAV } from '../data/content.js'

const IDS = NAV.map((n) => n.id)

function read() {
  const h = window.location.hash.replace(/^#\/?/, '')
  return IDS.includes(h) ? h : 'home'
}

// Router ringan berbasis hash (#/about). Tidak perlu library dan aman di hosting statis apa pun.
export default function useHashRoute() {
  const [route, setRoute] = useState(read)

  useEffect(() => {
    const onChange = () => {
      setRoute(read())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
