import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo" />
      <div className="container">
        <header>
          <div className="header-content">
            <div className="header-text">
              <h1>Steve Libbey</h1>
              <p className="tagline">Senior Product Designer for healthcare, analytics, and complex workflow systems.</p>
              <p className="intro">
                I design products where clarity matters. My work spans healthcare platforms, enterprise analytics, decision-support systems, and AI-enabled tools&mdash;translating dense workflows, regulatory constraints, and complex data into usable products.
              </p>
              <div className="quick-links">
                <Link to="/projects" className="btn btn-secondary">Projects</Link>
                <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
                <a href="/SteveLibbeyCV.pdf" className="btn btn-secondary">Resume / CV</a>
                <a href="mailto:stevelibbey@gmail.com" className="btn btn-secondary">Contact</a>
              </div>
            </div>
          </div>
        </header>

        {/* Credibility Strip */}
        <div className="credibility-strip reveal" style={{'--delay': '0s'}}>
          <div className="credibility-item">
            <div className="label">Experience</div>
            <div className="value">20+ years</div>
          </div>
          <div className="credibility-item">
            <div className="label">Domains</div>
            <div className="value">Healthcare, Enterprise, Analytics</div>
          </div>
          <div className="credibility-item">
            <div className="label">Clients &amp; Employers</div>
            <div className="value">Microsoft, T-Mobile, Boeing, Providence Healthcare</div>
          </div>
          <div className="credibility-item">
            <div className="label">Skills</div>
            <div className="value">Product Design, UX/UI, Data Visualization, AI Workflows</div>
          </div>
        </div>

        {/* Featured Work */}
        <section className="featured-work">
          <div className="section-header">
            <h2 className="reveal" style={{'--delay': '0s'}}>Selected Work</h2>
          </div>

          <div className="project-grid">
            <Link to="/portfolio#west-health" className="project-card reveal" style={{'--delay': '0.04s'}}>
              <img src="/img/seniors-are-sickest.png" alt="West Health Institute seniors are sickest infographic" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">Policy Communications</span>
                <span className="meta-tag">Healthcare Data Visualization</span>
                <span className="meta-tag">Data Storytelling</span>
                <h3>West Health Institute</h3>
                <p>Translated dense policy research from the West Health-Gallup Survey on Aging in America into communication tools for lawmakers, researchers, and students.</p>
                <span className="card-cta">View case study &rarr;</span>
              </div>
            </Link>

            <Link to="/portfolio#pedi-crisis" className="project-card reveal" style={{'--delay': '0.08s'}}>
              <img src="/img/SteveLibbey-Portfolio-PEDI.png" alt="Pedi Crisis pediatric emergency decision support app" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">Healthcare</span>
                <span className="meta-tag">Clinical Decision Support</span>
                <span className="meta-tag">Cross-Platform</span>
                <h3>Pedi Crisis</h3>
                <p>Designed a clinical decision-support system for pediatric anesthesia emergencies, translating complex crisis protocols into interactive treatment algorithms used in the operating room.</p>
                <span className="card-cta">View case study &rarr;</span>
              </div>
            </Link>

            <Link to="/portfolio#providence" className="project-card reveal" style={{'--delay': '0.12s'}}>
              <img src="/img/providence.png" alt="Providence clinical desktop unification project" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">Healthcare</span>
                <span className="meta-tag">Enterprise Workflow</span>
                <span className="meta-tag">Constraint Navigation</span>
                <h3>Providence Clinical Desktop Unification</h3>
                <p>Originated and led a project at Providence Health System to unify fragmented clinical workflows across acquired hospital systems into a single Citrix-secured desktop interface for administrators and providers.</p>
                <span className="card-cta">View case study &rarr;</span>
              </div>
            </Link>

            <Link to="/portfolio#tmo-sales" className="project-card reveal" style={{'--delay': '0.20s'}}>
              <img src="/img/SteveLibbey-Portfolio-tmosort.jpg" alt="T-Mobile internal sales analytics platform" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">Enterprise Analytics</span>
                <span className="meta-tag">Business Intelligence</span>
                <span className="meta-tag">Internal Tools</span>
                <h3>T-Mobile Internal Sales Analytics</h3>
                <p>Led UX design and front-end engineering for a business intelligence platform serving thousands of management and executive users with data-driven decision making tools.</p>
                <span className="card-cta">View case study &rarr;</span>
              </div>
            </Link>

            <Link to="/portfolio#tmo-coaching" className="project-card reveal" style={{'--delay': '0.36s'}}>
              <img src="/img/SteveLibbey-Portfolio-tmoshout.jpg" alt="T-Mobile call center performance coaching platform" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">Performance Analytics</span>
                <span className="meta-tag">Employee Tools</span>
                <span className="meta-tag">Data Visualization</span>
                <h3>Call Center Performance Platform</h3>
                <p>Redesigned a performance analytics tool for call center staff, combining predictive bonus modeling with data visualization and hierarchical management reporting.</p>
                <span className="card-cta">View case study &rarr;</span>
              </div>
            </Link>

            <Link to="/portfolio#norad" className="project-card reveal" style={{'--delay': '0.44s'}}>
              <img src="/img/SteveLibbey-Portfolio-norad1.jpg" alt="NORAD Tracks Santa website rebuild" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">High-Traffic</span>
                <span className="meta-tag">Responsive Design</span>
                <span className="meta-tag">Performance</span>
                <h3>NORAD Tracks Santa</h3>
                <p>Rebuilt a high-traffic holiday multimedia site from scratch after production failures, delivering a bug-free, responsive experience to millions of global users on Christmas Eve.</p>
                <span className="card-cta">View case study &rarr;</span>
              </div>
            </Link>
          </div>

          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/portfolio" className="btn btn-secondary">View All Case Studies</Link>
          </div>
        </section>

        {/* Projects Section */}
        <section className="featured-work">
          <div className="section-header">
            <h2 className="reveal" style={{'--delay': '0s'}}>Projects</h2>
          </div>

          <div className="project-grid">
            <Link to="/encraftable" className="project-card reveal" style={{'--delay': '0.04s'}}>
              <img src="/img/encraftable-screen-home.jpg" alt="Encraftable makerspace organizational memory app" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">React Native</span>
                <span className="meta-tag">Design Systems</span>
                <span className="meta-tag">Community Tools</span>
                <h3>Encraftable</h3>
                <p>A makerspace organizational memory app. Stations, gear, cables, and instructions &mdash; so the room works for everyone who walks in, not just the people who already know where everything is.</p>
                <span className="card-cta">View project &rarr;</span>
              </div>
            </Link>

            <Link to="/yorick" className="project-card reveal" style={{'--delay': '0.08s'}}>
              <img src="/img/yorickscreenshot.png" alt="Yorick Writing Studio" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">AI Product Design</span>
                <span className="meta-tag">Writing</span>
                <h3>Yorick Writing Studio</h3>
                <p>An AI-assisted writing system built to preserve the integrity of a writer's voice. The writer stays in control; AI assists without overwriting. Designed around authorship, not output.</p>
                <span className="card-cta">View project &rarr;</span>
              </div>
            </Link>

            <Link to="/thingmo" className="project-card reveal" style={{'--delay': '0.12s'}}>
              <img src="/img/thingmoscreens.jpg" alt="Thingmo music discovery tool" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">Music Tool</span>
                <span className="meta-tag">Research-Driven</span>
                <span className="meta-tag">Product Design</span>
                <h3>Thingmo</h3>
                <p>A research-driven music discovery tool that builds playlists from artist lineages, historical charts, and scenes defined by time and place. No algorithm. No feed.</p>
                <span className="card-cta">View project &rarr;</span>
              </div>
            </Link>

            <Link to="/noisegift" className="project-card reveal" style={{'--delay': '0.16s'}}>
              <img src="/img/scientific-american-v96-n10-1907-03-09-1.webp" alt="Noise Gift" className="project-card-image" />
              <div className="project-card-body">
                <span className="meta-tag">VST Instruments</span>
                <span className="meta-tag">Web Tools</span>
                <span className="meta-tag">Audio</span>
                <h3>Noise Gift</h3>
                <p>Historically grounded physical modeling instruments and web-based creative audio tools. Built from primary sources. Anomalies are features.</p>
                <span className="card-cta">View project &rarr;</span>
              </div>
            </Link>
          </div>

          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/projects" className="btn btn-secondary">View All Projects</Link>
          </div>
        </section>

        {/* Consulting Teaser */}
        <section className="section-teaser section-teaser--with-image reveal" style={{'--delay': '0s'}}>
          <img src="/img/artifact3.png" alt="Consulting" className="teaser-image" />
          <div className="teaser-content">
            <h2>Consulting</h2>
            <p>I help teams design and deliver complex digital products, especially those involving analytics UX, data visualization, AI workflows, and high-stakes decision support. Engagements range from focused audits to short-term embedded work.</p>
            <Link to="/consulting" className="btn btn-secondary">View Services</Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
