import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Thingmo() {
  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
      <div className="container">
        <div className="project-page-header">
          <Link to="/projects" className="project-back">Projects</Link>
          <div className="case-study-meta" style={{marginBottom: '1rem'}}>
            <span className="meta-tag">Music Tool</span>
            <span className="meta-tag">Research-Driven Discovery</span>
            <span className="meta-tag">Product Design</span>
          </div>
          <h1>Thingmo</h1>
          <p className="project-tagline">A research-driven music discovery tool that builds playlists from artist lineages, historical charts, and scenes defined by time and place. No algorithm. No feed.</p>
        </div>

        <div className="project-status-bar reveal">
          <div className="psb-item">
            <div className="psb-label">Type</div>
            <div className="psb-value">Music tool</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Model</div>
            <div className="psb-value">Research-driven</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Output</div>
            <div className="psb-value">Importable playlists</div>
          </div>
        </div>

        <div className="project-body">
          <h2>The Problem</h2>
          <p>Streaming recommendation engines optimize for engagement. They are good at keeping you listening to things you already like. They are not good at helping you find music that connects to something specific &mdash; an artist's stated influences, a moment in a city's music history, a scene you read about but never heard.</p>
          <p>Thingmo is built for a different kind of curiosity.</p>

          <h2>How It Works</h2>
          <p>Instead of recommending music based on behavior, Thingmo builds playlists from real-world inputs: artists and the records they explicitly pointed to, historical charts tied to specific dates and locations, and scenes defined by time and place.</p>

          <div className="search-examples reveal" style={{margin: '1.5rem 0 2rem', padding: '1.5rem', background: 'var(--surface)', borderRadius: '8px', borderLeft: '3px solid var(--accent)'}}>
            <div style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '1rem'}}>You can search things like</div>
            <ul style={{listStyle: 'none', paddingLeft: 0, marginBottom: 0}}>
              {['Tom Waits', 'Jamaica 1963', 'Los Angeles punk 1978', 'Chicago blues 1955', 'Bristol sound 1994'].map(ex => (
                <li key={ex} style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.9rem', color: 'var(--text)', paddingLeft: '1.4rem', position: 'relative', marginBottom: '0.4rem'}}>
                  <span style={{position: 'absolute', left: 0, color: 'var(--accent)'}}>›</span>
                  {ex}
                </li>
              ))}
            </ul>
          </div>

          <p>Each search produces a clean, playable playlist that can be exported to services like Apple Music and Spotify.</p>

          <h2>Design Principles</h2>
          <ul>
            <li>No accounts, no feeds, no social features &mdash; this is a tool, not a platform</li>
            <li>Results grounded in documented history, not behavioral inference</li>
            <li>Fast path from idea to something you can hear immediately</li>
            <li>No algorithmic drift &mdash; the same search returns the same kind of result</li>
            <li>Export-first: the goal is music in your player, not time on the site</li>
          </ul>

          <h2>Why It Exists</h2>
          <p>Music discovery tools are mostly built around what the algorithm thinks you want next. Thingmo is built around what you're actually curious about. The difference is whether the tool follows your intent or substitutes its own.</p>
          <p>That distinction &mdash; user intent versus system intent &mdash; is the same tension at the center of most AI product design problems. Thingmo is one place I work through it in a concrete domain.</p>

          <h2>Current Status</h2>
          <p>In development. Core search model and playlist generation are functional. Export integration and UI are in progress.</p>
        </div>

        <Footer />
      </div>
    </>
  )
}
