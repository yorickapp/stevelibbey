import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TmoCoaching() {
  useEffect(() => {
    document.title = 'Call Center Performance Platform | Steve Libbey Portfolio'
  }, [])

  return (
    <div className="container">
      <div className="project-page-header">
        <Link to="/portfolio" className="project-back">Portfolio</Link>
        <div className="case-study-meta" style={{ marginBottom: '1rem' }}>
          <span className="meta-tag">Performance Analytics</span>
          <span className="meta-tag">Employee Tools</span>
          <span className="meta-tag">Data Visualization</span>
          <span className="meta-tag">2017</span>
        </div>
        <h1>Call Center Performance &amp; Coaching Platform</h1>
        <p className="project-tagline">Redesigned the application call center staff used to track progress and predict monthly bonuses, combining data visualization with T-Mobile's energetic culture.</p>
      </div>

      <div className="project-status-bar reveal">
        <div className="psb-item">
          <div className="psb-label">User Impact</div>
          <div className="psb-value">Self-service bonus prediction</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Management View</div>
          <div className="psb-value">Aggregated stats by location &amp; team</div>
        </div>
      </div>

      <img src="/img/SteveLibbey-Portfolio-tmoshout.jpg" alt="T-Mobile call center performance and coaching platform" className="case-study-image" style={{ marginBottom: '2rem' }} />

      <div className="project-body">
        <h4>The Challenge</h4>
        <p>Care team needed a redesign that maintained T-Mobile's fun, enthusiastic culture while giving employees clear visibility into bonus calculations. Management needed aggregated statistics organized by location. The challenge: make complex performance metrics feel approachable and motivating.</p>

        <hr className="section-divider" />

        <h4>Key Design Decisions</h4>
        <ul>
          <li>Worked with Java developer to realize dynamic tile function possibilities (interactive gauges, real-time updates)</li>
          <li>Designed predictive interface allowing employees to model "what if" scenarios for bonus optimization</li>
          <li>Created enthusiasm-driven UI matching call center culture without sacrificing data clarity</li>
          <li>Built hierarchical views: individual performance → team → location aggregations</li>
        </ul>

        <hr className="section-divider" />

        <h4>Design Philosophy</h4>
        <p>Turned dry performance metrics into an engaging, game-like experience. The UI celebrated achievements while providing actionable insights for improvement&mdash;reflecting T-Mobile's unique approach to employee motivation.</p>
      </div>

      <nav className="work-nav">
        <Link to="/work/tmo-sales" className="work-nav-prev">T-Mobile Sales Analytics</Link>
        <Link to="/work/noaa" className="work-nav-next">NOAA Salmon Recovery</Link>
      </nav>
    </div>
  )
}
