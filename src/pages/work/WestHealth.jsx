import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function WestHealth() {
  useEffect(() => {
    document.title = 'West Health Institute | Steve Libbey Portfolio'
  }, [])

  return (
    <div className="container">
      <div className="project-page-header">
        <Link to="/portfolio" className="project-back">Portfolio</Link>
        <div className="case-study-meta" style={{ marginBottom: '1rem' }}>
          <span className="meta-tag">Policy Communications</span>
          <span className="meta-tag">Healthcare Data Visualization</span>
          <span className="meta-tag">Data Storytelling</span>
          <span className="meta-tag">2024&ndash;2025</span>
        </div>
        <h1>West Health Institute</h1>
        <p className="project-tagline">Senior UX Designer role translating dense policy research into communication tools for lawmakers, researchers, and students. Built on the West Health-Gallup Survey on Aging in America, a nationally representative study of 5,000+ U.S. adults.</p>
      </div>

      <div className="project-status-bar reveal">
        <div className="psb-item">
          <div className="psb-label">Collaborators</div>
          <div className="psb-value">West Health + Gallup</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Stack</div>
          <div className="psb-value">Figma, React, D3.js, Recharts, Next.js, Storyblok CMS</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Team</div>
          <div className="psb-value">Distributed — offshore developers across time zones</div>
        </div>
      </div>

      <img src="/img/seniors-are-sickest.png" alt="Seniors Are Sickest infographic" className="case-study-image" style={{ marginBottom: '2rem' }} />

      <div className="project-body">
        <h4>The Challenge</h4>
        <p>The data was rigorous and the stakes were real. Over 80% of older adults live with at least one chronic condition. An estimated 72 million Americans skipped needed care in a single three-month window because they couldn't afford it. By 2030, seniors will make up 20% of the U.S. population. The research said all of this clearly. The problem was making it land for audiences who don't read 36-page policy reports.</p>

        <hr className="section-divider" />

        <h4>What I Designed</h4>
        <p>A suite of communication interfaces and data storytelling products that translated survey findings into tools people could actually read, absorb, and use. That meant decisions about hierarchy, visual weight, narrative entry points, and what to cut. The "Seniors Are Sickest" infographic organizes chronic condition burden by body system and age cohort, giving readers a spatial way into data that would otherwise require deep reading. Color does categorical work. The body silhouette grounds the statistics in something human. The layout lets readers navigate at their own pace rather than following a forced sequence.</p>

        <hr className="section-divider" />

        <h4>Key Design Decisions</h4>
        <ul>
          <li>Led end-to-end UX and front-end development across the full publication pipeline, from research output to finished web products</li>
          <li>Translated survey findings into visual hierarchies that served both general audiences and policy-focused readers</li>
          <li>Used progressive disclosure to let the data breathe without hiding the complexity underneath</li>
          <li>Coordinated across research, editorial, and product stakeholders at West Health and Gallup to keep outputs aligned with policy goals</li>
          <li>Integrated AI tools across data exploration, content workflows, and rapid iteration cycles to accelerate delivery</li>
        </ul>

        <hr className="section-divider" />

        <h4>Design Principle</h4>
        <p>The numbers already tell the story. The designer's job is to make sure the reader doesn't have to work to find it.</p>
      </div>

      <nav className="work-nav">
        <span className="work-nav-spacer"></span>
        <Link to="/work/pedi-crisis" className="work-nav-next">Pedi Crisis</Link>
      </nav>
    </div>
  )
}
