import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function DataVizPCSRF() {
  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
      <div className="container">
        <div className="project-page-header">
          <Link to="/dataviz" className="project-back">Data Viz</Link>
          <div className="case-study-meta" style={{marginBottom: '1rem'}}>
            <span className="meta-tag">Data Viz Engineering</span>
            <span className="meta-tag">Government / Conservation</span>
            <span className="meta-tag">Interactive Map</span>
            <span className="meta-tag">2026</span>
          </div>
          <h1>NOAA Pacific Coastal Salmon Recovery Fund</h1>
          <p className="project-tagline">26 years of federal salmon conservation investment, made explorable. $1.72 billion across 15,794 projects, animated by year, filtered by program, layered with Southern Resident killer whale population data.</p>
        </div>

        <div className="project-status-bar reveal">
          <div className="psb-item">
            <div className="psb-label">Role</div>
            <div className="psb-value">Data Viz Engineer</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Year</div>
            <div className="psb-value">2026 (rebuilt), originally 2008</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Stack</div>
            <div className="psb-value">React, D3 v7, Mapbox GL JS, Vite, Python, Node.js</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Data Source</div>
            <div className="psb-value">NOAA PCSRF database, Center for Whale Research, USGS</div>
          </div>
        </div>

        <div className="launch-cta reveal">
          <a href="https://dataviz.stevelibbey.com" target="_blank" rel="noopener" className="btn btn-primary">Launch interactive map ↗</a>
        </div>

        <div className="pcsrf-screenshot reveal">
          <div className="pcsrf-screenshot-label">
            Interactive map at <a href="https://dataviz.stevelibbey.com" target="_blank" rel="noopener">dataviz.stevelibbey.com</a>
          </div>
        </div>

        <div className="project-body">
          <h2>The Challenge</h2>
          <p>The NOAA Pacific Coastal Salmon Recovery Fund database was originally built in Oracle APEX in 2008. The data covers 15,794 projects and $1.72 billion in federal conservation investment from 2000 to 2025 across five program categories. The original interface was a paginated table with dropdown filters. The story it contained was invisible.</p>

          <hr className="section-divider" />

          <h2>What I Built</h2>
          <p>An interactive map visualization that lets users explore 26 years of salmon recovery investment across the Pacific Coast. Projects accumulate on the map as a year slider advances. Category toggles filter by program type. At overview zoom, recovery domains display as investment bubbles. Zooming in disaggregates to individual project dots. The tool also surfaces Southern Resident killer whale population data alongside the investment timeline, connecting federal salmon habitat funding to the food web it supports.</p>

          <hr className="section-divider" />

          <h2>Key Design Decisions</h2>

          <h3>Zoom-dependent aggregation</h3>
          <p>At overview zoom, the Pacific Coast resolves into recovery domains &mdash; large geographic units used by NOAA for program management. Each domain appears as a scaled bubble representing total investment. Zooming in disaggregates those bubbles into individual project dots. The decision was about cognitive load: 15,794 dots at overview scale is noise. Investment bubbles let the reader see the geographic story first, then drill into it. The transition is continuous, not a mode switch.</p>

          <h3>The orca data layer</h3>
          <p>Southern Resident killer whales eat Chinook salmon almost exclusively. The PCSRF database exists, in part, because the salmon these whales depend on are in trouble. Surfacing Center for Whale Research population counts alongside the investment timeline wasn't decorative &mdash; it was the point. The data doesn't show causation, but it shows the relationship the money was intended to address. Without it, the map is an accounting tool. With it, it's an argument.</p>

          <h3>Dark to light theme</h3>
          <p>The base map is dark. Dark map backgrounds make point data readable at low density and don't compete with the data layer at high density. The color encoding for program categories was chosen to work against the dark background &mdash; saturated enough to read, distinct enough to tell apart, not so intense that they overwhelm at full dataset scale. The UI chrome is lighter, creating a clear separation between the map canvas and the control layer.</p>

          <h3>Civic tool aesthetic over BI dashboard</h3>
          <p>The intended audience isn't an analyst querying a database. It's anyone who cares where this money went and what it did. That meant plain-language labels, a year slider that rewards the user for watching as well as for scrubbing, and text that contextualizes the numbers rather than just presenting them. The tool is a story delivery mechanism with filtering. The BI instinct is to maximize data density. The civic tool instinct is to make one thing clear at a time and let the user ask the next question.</p>

          <hr className="section-divider" />

          <h2>2026 Revisit</h2>
          <p>I built the original PCSRF database in 2008 as an Oracle APEX application. This rebuild uses the same dataset with a completely different frame: not a database to query, but a story to explore. The investment is the same. What changed is what you can see.</p>

          <hr className="section-divider" />

          <div className="launch-cta">
            <a href="https://dataviz.stevelibbey.com" target="_blank" rel="noopener" className="btn btn-primary">Launch interactive map ↗</a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
