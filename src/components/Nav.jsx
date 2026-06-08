import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [worksOpen, setWorksOpen] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  const closeMobile = () => {
    setMobileOpen(false)
    setWorksOpen(false)
    setCvOpen(false)
  }

  const handleWorksClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setWorksOpen(prev => !prev)
      setCvOpen(false)
    }
  }

  const handleCvClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setCvOpen(prev => !prev)
      setWorksOpen(false)
    }
  }

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(prev => !prev)}
        >
          &#9776;
        </button>
        <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
          <li>
            <Link to="/" className={isActive('/')} onClick={closeMobile}>Home</Link>
          </li>
          <li>
            <Link to="/portfolio" className={isActive('/portfolio')} onClick={closeMobile}>Portfolio</Link>
          </li>
          <li>
            <Link to="/dataviz" className={isActive('/dataviz')} onClick={closeMobile}>Data Viz</Link>
          </li>
          <li>
            <Link to="/consulting" className={isActive('/consulting')} onClick={closeMobile}>Consulting</Link>
          </li>
          <li>
            <Link to="/projects" className={isActive('/projects')} onClick={closeMobile}>Projects</Link>
          </li>
          <li>
            <a href="/SteveLibbey_Resume.docx" download onClick={closeMobile}>CV</a>
          </li>
          <li>
            <a href="mailto:stevelibbey@gmail.com" aria-label="Email" className="email-icon" onClick={closeMobile}>&#9993;</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
