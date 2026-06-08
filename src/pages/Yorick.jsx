import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

export default function Yorick() {
  const [modal, setModal] = useState(null)

  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
      <div className="container">
        <div className="project-page-header">
          <Link to="/projects" className="project-back">Projects</Link>
          <div className="case-study-meta" style={{marginBottom: '1rem'}}>
            <span className="meta-tag">AI Product Design</span>
            <span className="meta-tag">Trust &amp; Control</span>
            <span className="meta-tag">Workflow Design</span>
            <span className="meta-tag">2024&ndash;Present</span>
          </div>
          <h1>Yorick Writing Studio</h1>
          <p className="project-tagline">An AI-assisted writing system built to preserve the integrity of a writer's voice. The writer stays in control. AI assists without overwriting.</p>
        </div>

        <img
          src="/img/yorickscreenshot.png"
          alt="Yorick Writing Studio"
          className="case-study-image reveal"
          onClick={() => setModal({src: '/img/yorickscreenshot.png', alt: 'Yorick Writing Studio'})}
          style={{maxWidth:'100%', cursor:'pointer'}}
        />

        <div className="project-status-bar reveal">
          <div className="psb-item">
            <div className="psb-label">Status</div>
            <div className="psb-value">Private alpha</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Focus</div>
            <div className="psb-value">Authorship &amp; voice</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Scope</div>
            <div className="psb-value">End-to-end</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Since</div>
            <div className="psb-value">2024</div>
          </div>
        </div>

        <div className="project-body">
          <h2>The Problem</h2>
          <p>As generative AI tools entered creative writing, most optimized for speed and output at the expense of voice. Readers began reacting negatively not just to AI-generated prose, but to the suspicion that a piece might be machine-written. Writers lost trust in the tools and in the work they produced.</p>
          <p>The challenge was to design an AI system that assists without overwriting authorial intent or encouraging generic text.</p>

          <h2>What I Designed</h2>
          <ul>
            <li>An editor-first workspace where the manuscript is the center of gravity, not a chat window</li>
            <li>Selection-driven AI actions: tighten, expand, clarify, increase tension, rewrite dialogue, check continuity</li>
            <li>A proposal tray that holds AI-generated alternatives without silently altering the draft</li>
            <li>Separation of analysis (diagnostics, continuity checks) from revision (text rewrites)</li>
            <li>Writer control over AI intrusiveness: quiet, helpful, or active modes</li>
            <li>Story Bible, canon tracking, and scene-level contextual intelligence</li>
          </ul>

          <h2>Key Design Decisions</h2>
          <ul>
            <li>Designed the system around preservation of the writer's voice rather than text generation</li>
            <li>Avoided default prompt-to-prose flows that encourage copy-paste authorship</li>
            <li>Built the experience around structure, revision, and decision-making</li>
            <li>Emphasized transparency and user control over "magic" outputs</li>
            <li>Treated AI as a collaborator within a workspace, not an authority</li>
          </ul>

          <h2>Why It Matters Professionally</h2>
          <p>Yorick is directly relevant to the broader challenge of designing AI-enabled products. The problems it addresses&mdash;trust, transparency, user control, workflow integration, the boundary between human judgment and machine output&mdash;are the same problems facing any team building AI into their product. This project forces me to work through those problems at the interaction design level, not just in theory.</p>

          <h2>Technical Implementation</h2>
          <p>Designed UX and system behavior in parallel, defining how context and state persist across a writing project. Built production frontend code to validate interaction models and collaborated closely with engineering on feasibility. Implementation details are intentionally private while core ideas remain in development.</p>

          <h2>Current Status</h2>
          <p>In active development. Private alpha with working writers. Core design decisions are stable. Implementation is ongoing. Details are intentionally limited while the product is in development.</p>

          <Link to="/ai-trust" className="project-artifact-link reveal">
            Research artifact: AI Trust &amp; Authorship data visualization →
          </Link>
        </div>

        <Footer />
      </div>

      <Modal src={modal?.src} alt={modal?.alt} onClose={() => setModal(null)} />
    </>
  )
}
