import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Providence() {
  useEffect(() => {
    document.title = 'Providence Clinical Desktop Unification | Steve Libbey Portfolio'
  }, [])

  return (
    <div className="container">
      <div className="project-page-header">
        <Link to="/portfolio" className="project-back">Portfolio</Link>
        <div className="case-study-meta" style={{ marginBottom: '1rem' }}>
          <span className="meta-tag">Healthcare</span>
          <span className="meta-tag">Enterprise Workflow</span>
          <span className="meta-tag">Constraint Navigation</span>
          <span className="meta-tag">2021&ndash;2022</span>
        </div>
        <h1>Providence Clinical Desktop Unification</h1>
        <p className="project-tagline">At Providence Health System, one of the largest nonprofit health systems in the country, I originated and led a project to reduce the workflow fragmentation that came with decades of hospital acquisitions.</p>
      </div>

      <div className="project-status-bar reveal">
        <div className="psb-item">
          <div className="psb-label">Environment</div>
          <div className="psb-value">Citrix secured desktop</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Users</div>
          <div className="psb-value">Admins &amp; providers</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Problem</div>
          <div className="psb-value">Fragmented workflows across acquired systems</div>
        </div>
      </div>

      <img src="/img/providence.png" alt="Providence Health System clinical desktop unification" className="case-study-image" style={{ marginBottom: '2rem' }} />

      <div className="project-body">
        <h4>The Challenge</h4>
        <p>Providence absorbed over 100 cyberattacks daily. That threat level required keeping the entire clinical desktop inside a Citrix security perimeter. It was the right call. But it meant that Epic, ServiceNow, and a patchwork of other systems inherited from acquired hospitals all lived as separate applications inside a walled garden with no shared layer connecting them.</p>
        <p>Administrators bore the heaviest cost. Approving or denying routine requests&mdash;a new computer for cardiology, a schedule change, a supply order&mdash;meant navigating between multiple applications for tasks that should take seconds. Providers had the same problem. Everyone interviewed said the same thing: they wanted one place to handle this, and the constant switching was eating their time.</p>

        <hr className="section-divider" />

        <h4>The Approach</h4>
        <p>The director who originated the initiative had prior experience at Citrix and identified a widget feature that could serve as an aggregation layer inside the secured desktop. The idea was to surface consolidated request workflows from Epic, ServiceNow, and other systems inside a single Citrix dashboard, available on login, without requiring users to launch separate applications.</p>
        <p>I hired and led the development team, conducted discovery interviews with administrators and providers, and designed the workflow model. Our first test case was administrator request approvals: one interface, one click per request, no app switching.</p>

        <hr className="section-divider" />

        <h4>Where It Broke Down</h4>
        <p>Two constraints converged and closed off the path. The only sanctioned build tool for the Citrix widget was a low-code environment that couldn't support what we were designing. The workaround was to surface a web application inside the widget space, but that created security vulnerabilities the Citrix perimeter existed to prevent. We couldn't use the sanctioned tool and we couldn't safely use the workaround.</p>
        <p>While we were working through this, Citrix engineers began signaling informally that the widget feature itself was not long for the platform. Shortly after, it was sunsetted entirely. The one mechanism that could aggregate inside the security boundary was gone.</p>

        <h4>What We Proposed Instead</h4>
        <p>We came back to leadership with an alternative. A standalone web application dashboard with broader scope, designed to span not just the original use cases but the full patchwork of systems across every hospital Providence had acquired. It was technically stronger and more scalable than the original widget approach.</p>
        <p>But it couldn't meet the one non-negotiable requirement: available on login, inside the perimeter, without adding another application to the stack. Leadership made the right call and shut the project down. The team was reassigned.</p>

        <hr className="section-divider" />

        <h4>Design Principle</h4>
        <p>Know which constraints are load-bearing before you build against them. When the foundation changes, stop, assess what's still possible, and say clearly what isn't.</p>
      </div>

      <nav className="work-nav">
        <Link to="/work/pedi-crisis" className="work-nav-prev">Pedi Crisis</Link>
        <Link to="/work/tmo-sales" className="work-nav-next">T-Mobile Sales Analytics</Link>
      </nav>
    </div>
  )
}
