import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const PROJECTS = [
  {
    slug: '/yorick',
    title: 'Yorick Writing Studio',
    thumb: '/img/yorickscreenshot.png',
    tags: ['AI Product Design', 'Writing', '2024–Present'],
    summary: "An AI-assisted writing system built to preserve the integrity of a writer's voice. The writer stays in control; AI assists without overwriting. Designed around authorship, not output.",
  },
  {
    slug: '/thingmo',
    title: 'Thingmo',
    thumb: '/img/thingmoscreens.jpg',
    tags: ['Music Tool', 'Research-Driven', 'Product Design'],
    summary: 'A research-driven music discovery tool that builds playlists from real-world inputs: artist lineages, historical charts, and scenes defined by time and place. No algorithm. No feed.',
  },
  {
    slug: '/encraftable',
    title: 'Encraftable',
    thumb: '/img/encraftable-screen-home.jpg',
    tags: ['React Native', 'Design Systems', 'Community Tools'],
    summary: 'A makerspace organizational memory app. Stations, gear, cables, and instructions — so the room works for everyone who walks in, not just the people who already know where everything is.',
  },
  {
    slug: '/noisegift',
    title: 'Noise Gift',
    thumb: '/img/scientific-american-v96-n10-1907-03-09-1.webp',
    tags: ['VST Instruments', 'Web Tools', 'Audio'],
    summary: 'Historically grounded physical modeling instruments and web-based creative audio tools. Built from primary sources. Anomalies are features.',
  },
]

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects | Steve Libbey'
  }, [])

  return (
    <>
      <div className="container">
        <div className="page-header reveal" style={{ '--delay': '0s' }}>
          <div className="page-header-text">
            <h1>Projects</h1>
            <p>Exploratory product work where I test ideas about AI, trust, workflow design, and structured creativity. These are not side hobbies. They are design explorations that inform how I think about product problems.</p>
          </div>
        </div>

        <div className="portfolio-grid reveal" style={{ '--delay': '0.1s' }}>
          {PROJECTS.map(p => (
            <Link key={p.slug} to={p.slug} className="portfolio-card">
              <div className="portfolio-card-img-wrap">
                <img src={p.thumb} alt={p.title} className="portfolio-card-img" />
              </div>
              <div className="portfolio-card-body">
                <div className="portfolio-card-tags">
                  {p.tags.map(t => <span key={t} className="meta-tag">{t}</span>)}
                </div>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <span className="portfolio-card-cta">View project →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
