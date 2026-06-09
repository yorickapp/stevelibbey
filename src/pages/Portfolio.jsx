import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const CASES = [
  {
    slug: 'west-health',
    title: 'West Health Institute',
    thumb: '/img/seniors-are-sickest.png',
    tags: ['Policy Communications', 'Healthcare Data Viz', 'Data Storytelling'],
    summary: 'Translating dense policy research into communication tools for lawmakers, researchers, and students. Built on the West Health–Gallup Survey on Aging in America.',
  },
  {
    slug: 'pedi-crisis',
    title: 'Pedi Crisis',
    thumb: '/img/SteveLibbey-Portfolio-PEDI.jpg',
    tags: ['Healthcare', 'Clinical Decision Support', 'Human Factors', '2012–2013'],
    summary: 'A mobile cognitive aid for pediatric anesthesia emergencies, translating clinical crisis protocols into interactive treatment algorithms for iOS and Windows 8 tablets.',
  },
  {
    slug: 'providence',
    title: 'Providence Clinical Desktop Unification',
    thumb: '/img/providence-surgery.jpg',
    tags: ['Healthcare', 'Enterprise UX', 'Citrix', 'Epic'],
    summary: 'Unified a fragmented clinical desktop across 100+ acquired hospitals into a single workflow layer spanning Epic, ServiceNow, and legacy systems inside a Citrix security perimeter.',
  },
  {
    slug: 'tmo-sales',
    title: 'T-Mobile Internal Sales Analytics',
    thumb: '/img/SteveLibbey-Portfolio-tmosort.jpg',
    tags: ['Enterprise Analytics', 'Angular', 'BI Platform', 'UX Engineering'],
    summary: 'Angular-based business intelligence platform used by thousands of management and executive users for data-driven decision making across the T-Mobile sales organization.',
  },
  {
    slug: 'tmo-coaching',
    title: 'Call Center Performance Platform',
    thumb: '/img/SteveLibbey-Portfolio-tmoshout.jpg',
    tags: ['Enterprise UX', 'Performance Design', 'Gamification'],
    summary: 'Real-time performance coaching platform for T-Mobile call center agents and managers, turning dry metrics into an engaging, actionable experience.',
  },
  {
    slug: 'noaa',
    title: 'NOAA Salmon Recovery Tracker',
    thumb: '/img/SteveLibbey-Portfolio-noaa1.jpg',
    tags: ['Data Visualization', 'React', 'D3', 'Mapbox', 'Federal'],
    summary: 'Interactive map tracking $1.72B across 15,794 Pacific salmon recovery projects from 2000–2025, built for the Pacific Coastal Salmon Recovery Fund.',
  },
  {
    slug: 'norad',
    title: 'NORAD Tracks Santa',
    thumb: '/img/SteveLibbey-Portfolio-norad1.jpg',
    tags: ['High-Traffic', 'Responsive Design', 'Performance', '2013–2014'],
    summary: 'Rebuilt the holiday multimedia site from scratch after predecessor code caused production bugs. Millions of global users on Christmas Eve.',
  },
]

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio | Steve Libbey'
  }, [])

  return (
    <>
      <div className="container">
        <div className="page-header reveal" style={{ '--delay': '0s' }}>
          <div className="page-header-text">
            <h1>Portfolio</h1>
            <p>Case studies from two decades of designing healthcare platforms, enterprise analytics tools, clinical decision-support systems, data visualization interfaces, and complex workflow products.</p>
          </div>
        </div>

        <div className="portfolio-grid reveal" style={{ '--delay': '0.1s' }}>
          {CASES.map(c => (
            <Link key={c.slug} to={`/work/${c.slug}`} className="portfolio-card">
              <div className="portfolio-card-img-wrap">
                <img src={c.thumb} alt={c.title} className="portfolio-card-img" />
              </div>
              <div className="portfolio-card-body">
                <div className="portfolio-card-tags">
                  {c.tags.map(t => <span key={t} className="meta-tag">{t}</span>)}
                </div>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <span className="portfolio-card-cta">View case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
