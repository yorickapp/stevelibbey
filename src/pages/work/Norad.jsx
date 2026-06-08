import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Norad() {
  useEffect(() => {
    document.title = 'NORAD Tracks Santa | Steve Libbey Portfolio'
  }, [])

  return (
    <div className="container">
      <div className="project-page-header">
        <Link to="/portfolio" className="project-back">Portfolio</Link>
        <div className="case-study-meta" style={{ marginBottom: '1rem' }}>
          <span className="meta-tag">High-Traffic</span>
          <span className="meta-tag">Responsive Design</span>
          <span className="meta-tag">Performance</span>
          <span className="meta-tag">2013&ndash;2014</span>
        </div>
        <h1>NORAD Tracks Santa</h1>
        <p className="project-tagline">Rebuilt holiday multimedia site from scratch after predecessor's indecipherable code caused production bugs. Millions of global users on Christmas Eve.</p>
      </div>

      <div className="project-status-bar reveal">
        <div className="psb-item">
          <div className="psb-label">Performance</div>
          <div className="psb-value">Bug-free launch after previous year's failures</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Code Quality</div>
          <div className="psb-value">Reusable codebase — used for future versions</div>
        </div>
      </div>

      <img src="/img/SteveLibbey-Portfolio-norad1.jpg" alt="NORAD Tracks Santa responsive holiday website" className="case-study-image" style={{ marginBottom: '2rem' }} />

      <div className="project-body">
        <h4>The Challenge</h4>
        <p>2013 site launched with bugs due to deliberately obfuscated JavaScript. Lead programmer was fired, leaving company scrambling for 2014 deployment. Brought in late in the game to rebuild entire site with weeks to deadline.</p>

        <hr className="section-divider" />

        <h4>Key Design Decisions</h4>
        <ul>
          <li>Threw out previous year's code completely</li>
          <li>Rebuilt from scratch using Bootstrap, jQuery, and Greensock JS for animations</li>
          <li>Optimized for performance under massive traffic spikes</li>
          <li>Built fully responsive (kids use whatever device they can access)</li>
          <li>Created maintainable codebase using well-supported libraries</li>
        </ul>

        <hr className="section-divider" />

        <h4>What I Said No To</h4>
        <p>Clever code. No custom animation engines, no framework reinvention, no showing off. Used battle-tested libraries and clear documentation so the next person could actually maintain it.</p>

        <h4>Fun Fact</h4>
        <p>When NPR ran the headline "NORAD Tracks Santa Begins with a Typo" for the 2014 launch, I nearly had a heart attack before realizing they meant the 1953 origin story.</p>
      </div>

      <nav className="work-nav">
        <Link to="/work/noaa" className="work-nav-prev">NOAA Salmon Recovery</Link>
        <span className="work-nav-spacer"></span>
      </nav>
    </div>
  )
}
