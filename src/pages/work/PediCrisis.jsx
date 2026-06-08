import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PediCrisis() {
  useEffect(() => {
    document.title = 'Pedi Crisis | Steve Libbey Portfolio'
  }, [])

  return (
    <div className="container">
      <div className="project-page-header">
        <Link to="/portfolio" className="project-back">Portfolio</Link>
        <div className="case-study-meta" style={{ marginBottom: '1rem' }}>
          <span className="meta-tag">Healthcare</span>
          <span className="meta-tag">Clinical Decision Support</span>
          <span className="meta-tag">Human Factors</span>
          <span className="meta-tag">Cross-Platform UX</span>
          <span className="meta-tag">2012&ndash;2013</span>
        </div>
        <h1>Pedi Crisis</h1>
        <p className="project-tagline">In collaboration with Children's Hospital of Philadelphia and the Society for Pediatric Anesthesiologists, a mobile cognitive aid for pediatric anesthesia emergencies, translating clinical crisis protocols into interactive treatment algorithms for iOS and Windows 8 tablets.</p>
      </div>

      <div className="project-status-bar reveal">
        <div className="psb-item">
          <div className="psb-label">Platforms</div>
          <div className="psb-value">iOS + Windows 8</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Use Case</div>
          <div className="psb-value">OR emergencies</div>
        </div>
        <div className="psb-item">
          <div className="psb-label">Core Function</div>
          <div className="psb-value">Interactive algorithms &amp; weight-based dosing</div>
        </div>
      </div>

      <img src="/img/SteveLibbey-Portfolio-PEDI.png" alt="Pedi Crisis pediatric emergency decision support application" className="case-study-image" style={{ marginBottom: '2rem' }} />

      <div className="project-body">
        <h4>The Challenge</h4>
        <p>Operating room emergencies are rare, fast-moving, and high risk. In pediatric anesthesia, clinicians must diagnose, treat, and coordinate as a team while managing weight-based dosing and rapidly changing conditions. Printed references were too slow, and even experienced providers can miss steps when cognitive load spikes.</p>

        <hr className="section-divider" />

        <h4>What I Designed</h4>
        <p>The system guided clinicians through a repeatable emergency workflow: select the crisis event, enter patient weight, confirm recognition criteria, follow staged treatment steps, review medication dosing, and move to a common end-of-algorithm review. The structure supported rare but life-threatening pediatric events such as anaphylaxis, bradycardia, hyperkalemia, airway fire, hypoxia, transfusion reactions, and cardiac arrest.</p>

        <hr className="section-divider" />

        <h4>Key Design Decisions</h4>
        <ul>
          <li>Translated paper crisis protocols into interactive algorithm flows clinicians could follow in real time</li>
          <li>Structured each event around the same pattern: event selection, recognition, treatment, dosing, escalation, and resolution</li>
          <li>Designed weight capture as a persistent system input so medication guidance stayed relevant throughout the workflow</li>
          <li>Used clear checklist interactions and progressive disclosure to reduce cognitive overload during emergencies</li>
          <li>Maintained the same clinical workflow across iOS and Windows 8 while adapting to each platform's interaction model</li>
        </ul>

        <hr className="section-divider" />

        <h4>Cross-Platform Design</h4>
        <p>iOS and Windows 8 required different UI conventions, but the clinical workflow had to remain consistent. I adapted the interface to each platform while preserving the same underlying algorithm structure, navigation logic, and treatment sequence. Clinicians could rely on the same mental model regardless of device.</p>

        <h4>Process and Collaboration</h4>
        <p>Algorithms were revised through ongoing collaboration with clinical stakeholders to improve symptom ordering, simplify navigation, standardize medication units, merge related pathways, and clarify escalation logic. That collaboration shaped not just the screens but the decision model itself.</p>

        <hr className="section-divider" />

        <h4>Design Principle</h4>
        <p>Do not ask clinicians to remember the protocol. Put the protocol in the interface, keep it structured, and make the next step obvious.</p>
      </div>

      <nav className="work-nav">
        <Link to="/work/west-health" className="work-nav-prev">West Health</Link>
        <Link to="/work/providence" className="work-nav-next">Providence</Link>
      </nav>
    </div>
  )
}
