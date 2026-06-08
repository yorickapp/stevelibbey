import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TmoSales() {
  useEffect(() => {
    document.title = 'T-Mobile Internal Sales Analytics | Steve Libbey Portfolio'
  }, [])

  return (
    <div className="container">
      <div className="project-page-header">
        <Link to="/portfolio" className="project-back">Portfolio</Link>
        <div className="case-study-meta" style={{ marginBottom: '1rem' }}>
          <span className="meta-tag">Business Intelligence</span>
          <span className="meta-tag">Enterprise Analytics</span>
          <span className="meta-tag">Internal Tools</span>
          <span className="meta-tag">2016&ndash;2020</span>
        </div>
        <h1>T-Mobile Internal Sales Analytics Platform</h1>
        <p className="project-tagline">Senior UX Software Engineer role designing and building an Angular-based business intelligence platform used by thousands of management and executive users for data-driven decision making.</p>
      </div>

      <div className="project-status-bar reveal">
        <div className="psb-item">
          <div className="psb-label">Scale</div>
          <div className="psb-value">1000s of users</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Innovation</div>
          <div className="psb-value">First Agile team — template for entire department</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Lifespan</div>
          <div className="psb-value">4 years in active production</div>
        </div>
      </div>

      <img src="/img/SteveLibbey-Portfolio-tmosort.jpg" alt="T-Mobile internal sales analytics business intelligence platform" className="case-study-image" style={{ marginBottom: '2rem' }} />

      <div className="project-body">
        <h4>The Challenge</h4>
        <p>T-Mobile leadership needed a scalable business intelligence platform that could serve both current reporting needs and adapt to predicted forms of data. Multiple access levels required different views of the same underlying data without creating maintenance nightmares.</p>

        <hr className="section-divider" />

        <h4>Key Design Decisions</h4>
        <ul>
          <li>Determined user needs across all access levels through stakeholder interviews with leadership</li>
          <li>Designed UI that made the app serve both current and predicted data structures</li>
          <li>Implemented MVC architecture using Angular for clean separation of concerns</li>
          <li>Conceptualized scalable platform to be reused for future internal apps</li>
          <li>Led first team to adopt Agile Scrum methodology, which became department standard</li>
        </ul>

        <hr className="section-divider" />

        <h4>Technical Implementation</h4>
        <p>Built with Angular MVC architecture, designed for maintainability and reusability. Collaborated with data analysts on ongoing upgrades until sunset in 2020. The platform's architecture was reused multiple times for subsequent internal tools.</p>
      </div>

      <nav className="work-nav">
        <Link to="/work/providence" className="work-nav-prev">Providence</Link>
        <Link to="/work/tmo-coaching" className="work-nav-next">Call Center Performance</Link>
      </nav>
    </div>
  )
}
