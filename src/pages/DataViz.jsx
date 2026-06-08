import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function DataViz() {
  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
      <div className="container">
        <div className="dataviz-wrapper">
          <div className="dataviz-heading reveal" style={{'--delay': '0s'}}>
            <h1>Data Viz &amp; Engineering</h1>
            <p>Interactive tools that make complex datasets explorable.</p>
          </div>

          <div className="dataviz-grid">
            <Link to="/dataviz-pcsrf" className="dataviz-card reveal" style={{'--delay': '0.08s'}}>
              <div className="dataviz-card-thumb">
                <span className="thumb-label">dataviz.stevelibbey.com</span>
              </div>
              <div className="dataviz-card-body">
                <div>
                  <h3>NOAA Pacific Coastal Salmon Recovery Fund</h3>
                  <p>26 years of federal salmon conservation investment, mapped. $1.72B across 15,794 projects, animated by year, filtered by program category, layered with Southern Resident killer whale population data.</p>
                </div>
                <div>
                  <div className="dataviz-card-tags">
                    <span className="meta-tag">React</span>
                    <span className="meta-tag">D3</span>
                    <span className="meta-tag">Mapbox GL JS</span>
                  </div>
                  <span className="dataviz-card-cta">View case study &rarr;</span>
                </div>
              </div>
            </Link>

            <div className="dataviz-placeholder reveal" style={{'--delay': '0.12s'}}>
              <div className="dataviz-placeholder-inner">
                <span>Coming soon</span>
              </div>
            </div>

            <div className="dataviz-placeholder reveal" style={{'--delay': '0.16s'}}>
              <div className="dataviz-placeholder-inner">
                <span>Coming soon</span>
              </div>
            </div>

            <div className="dataviz-placeholder reveal" style={{'--delay': '0.20s'}}>
              <div className="dataviz-placeholder-inner">
                <span>Coming soon</span>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
