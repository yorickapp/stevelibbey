import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Noaa() {
  useEffect(() => {
    document.title = 'NOAA Salmon Recovery Tracker | Steve Libbey Portfolio'
  }, [])

  return (
    <div className="container">
      <div className="project-page-header">
        <Link to="/portfolio" className="project-back">Portfolio</Link>
        <div className="case-study-meta" style={{ marginBottom: '1rem' }}>
          <span className="meta-tag">Government / Conservation</span>
          <span className="meta-tag">Data Systems</span>
          <span className="meta-tag">Data Visualization</span>
          <span className="meta-tag">2008</span>
        </div>
        <h1>NOAA Salmon Recovery Tracker</h1>
        <p className="project-tagline">Government conservation project tracking system connecting scientists, policymakers, and students through multi-level data access and visualization. The original PCSRF database, rebuilt in 2026 as an interactive map — see <Link to="/dataviz-pcsrf" style={{ color: 'var(--accent)' }}>Data Viz → PCSRF</Link>.</p>
      </div>

      <div className="project-status-bar reveal">
        <div className="psb-item">
          <div className="psb-label">Audience</div>
          <div className="psb-value">Multi-level — scientists to students</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Data Handling</div>
          <div className="psb-value">Oracle APEX — complex scientific datasets</div>
        </div>
      </div>

      <img src="/img/SteveLibbey-Portfolio-noaa1.jpg" alt="NOAA Pacific Coastal Salmon Recovery Fund data tracking system" className="case-study-image" style={{ marginBottom: '2rem' }} />

      <div className="project-body">
        <h4>The Challenge</h4>
        <p>Tracking information for salmon recovery projects required serving vastly different user needs: scientists wanting raw data tables, policymakers needing summaries, and students requiring educational context. Database queries returned massive tables of scientific data that needed progressive disclosure.</p>

        <hr className="section-divider" />

        <h4>Key Design Decisions</h4>
        <ul>
          <li>Designed familiar webpage interface with intuitive navigation</li>
          <li>Built progressive disclosure: summaries in graphics/charts for general users, full scientific data access on demand</li>
          <li>Integrated with Oracle database using APEX (HTML/CSS front-end)</li>
          <li>Created visualization layer that made complex conservation metrics accessible to non-scientists</li>
          <li>Also designed commercial fisherman trading app with regulatory compliance built-in</li>
        </ul>

        <hr className="section-divider" />

        <h4>Design Principle</h4>
        <p>Don't hide the complexity&mdash;layer it. Scientists got their tables, students got their charts, everyone got value from the same underlying data.</p>
      </div>

      <nav className="work-nav">
        <Link to="/work/tmo-coaching" className="work-nav-prev">Call Center Performance</Link>
        <Link to="/work/norad" className="work-nav-next">NORAD Tracks Santa</Link>
      </nav>
    </div>
  )
}
