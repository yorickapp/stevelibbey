import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function NoiseGift() {
  const gallery = [
    { src: '/img/Teleharmonium1897.jpg', caption: 'The instrument, 1897', alt: 'The Telharmonium instrument, 1897' },
    { src: '/img/telharmoniumpatent.webp', caption: 'Cahill patent', alt: 'Telharmonium patent drawing by Thaddeus Cahill' },
    { src: '/img/scientific-american-v96-n10-1907-03-09-1.webp', caption: 'Scientific American, March 1907', alt: 'Scientific American cover, March 9, 1907' },
  ]

  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
      <div className="container">
        <div className="project-page-header">
          <Link to="/projects" className="project-back">Projects</Link>
          <div className="case-study-meta" style={{marginBottom: '1rem'}}>
            <span className="meta-tag">VST Instruments</span>
            <span className="meta-tag">Web Tools</span>
            <span className="meta-tag">Audio</span>
          </div>
          <h1>Noise Gift</h1>
          <p className="project-tagline">Historically grounded physical modeling instruments and web-based creative audio tools. Built from primary sources. Anomalies are features.</p>
        </div>

        <div className="project-status-bar reveal">
          <div className="psb-item">
            <div className="psb-label">VST Stack</div>
            <div className="psb-value">JUCE / C++ / CMake</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Formats</div>
            <div className="psb-value">VST3 / AU</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Pricing</div>
            <div className="psb-value">Buy-once</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Shared format</div>
            <div className="psb-value">.ngft</div>
          </div>
        </div>

        <div className="screen-gallery-label reveal">Reference Material</div>
        <div className="screen-gallery reveal" style={{'--imgHeight': '360px'}}>
          {gallery.map(g => (
            <figure key={g.caption}>
              <img src={g.src} alt={g.alt} style={{height: '360px', borderRadius: '4px'}} />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="screen-gallery-hint reveal">&larr; scroll to see all</p>

        <div className="project-body">
          <h2>VST Instrument Suite</h2>
          <p>Period-accurate physical modeling of rare historical instruments, each built from primary sources &mdash; patents, scholarly texts, original schematics &mdash; rather than timbral approximation. Demo mode uses instrument-characteristic interruptions rather than generic license prompts.</p>

          <h3>Completed or fully specced</h3>
          <ul>
            <li>Sea Organ <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>tube resonance, stochastic wave generation</span></li>
            <li>Daxophone <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>modal blade synthesis, wolf tones preserved</span></li>
            <li>Audion Piano <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>1915 heterodyne oscillator, thermal drift</span></li>
            <li>Telharmonium <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>additive synthesis, just intonation, telephone wire rolloff</span></li>
            <li>Elisha Gray Electro-Harmonic Telegraph <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>odd harmonic additive synthesis</span></li>
            <li>Staccatone <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>hard staccato only, no sustain</span></li>
            <li>Luminaphone <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>selenium cell fatigue, tempo-synced rotation</span></li>
            <li>Clavecin &Eacute;lectrique <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>Leyden jar as sole envelope system</span></li>
            <li>Sph&auml;raphon <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>kidney-plate condenser, patent as only timbral ground truth</span></li>
            <li>Mixtur-Trautonium <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>Sala's subharmonic divider, four formant filters</span></li>
            <li>Choralcelo <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>electromagnetic string excitation, no attack transient by design</span></li>
            <li>Orchestrion <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>11-voice mechanical ensemble, Performer and Paper Roll modes</span></li>
          </ul>

          <h3>Still being scoped</h3>
          <ul>
            <li>Singing Arc</li>
            <li>Clavecin Magn&eacute;tique</li>
            <li>Rhythmicon <span style={{fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', opacity: 0.7}}>research complete, spec not yet written</span></li>
          </ul>

          <h3>Queued for later</h3>
          <ul>
            <li style={{opacity: 0.55}}>Croix Sonore</li>
            <li style={{opacity: 0.55}}>Severy Sound-Producing Device</li>
            <li style={{opacity: 0.55}}>Circuit Bending Suite</li>
          </ul>

          <hr className="section-divider" />

          <h2>Noise Gift Web Tools</h2>
          <p>A set of web-based creative tools sharing the <code>.ngft</code> file format for cross-tool compatibility.</p>

          <h3>WORLDMANGLE</h3>
          <p>Audio mangling driven by real-world data streams: DOW close, geomagnetic index, extinction rates, and a conspiracy belief proxy. Demucs vocal separation, librosa beat slicing. A DOW reading above 50,000 triggers an undocumented behavior change.</p>

          <h3>Driftbook</h3>
          <p>Visual narrative platform for sequencing images, text overlays, and performance into evolving nonlinear story experiences. Three modes: Studio (authoring), Performance (live projection), Drift (authored nonlinear evolution and recurrence). Sequences loop, branch probabilistically, and evolve across passes while remaining authored and intentional. Built on Next.js, React, TypeScript, and Postgres. MIDI integration and graph-based sequencing in later phases.</p>

          <h3>Driftbook FX</h3>
          <p>Flipbook-metaphor effects plugin. Up to 20 image frames drive DSP at 30Hz via CoreImage analysis.</p>

          <h3>Driftorama</h3>
          <p>Live visual audio instrument where illustrated scenes function as the interface. Up to 10 scene elements control audio effects. Performances export as .wav files.</p>

          <hr className="section-divider" />

          <h2>Shared Principles</h2>
          <ul style={{listStyle: 'none', paddingLeft: 0}}>
            {[
              'Anomalies are features, not bugs',
              'Historical gesture vocabulary drives UI design',
              'Physical accuracy over modern synth conventions',
              'WORLDMANGLE and Driftorama are the nearest-term demo priorities',
            ].map(p => (
              <li key={p} style={{paddingLeft: '1.4rem', position: 'relative', marginBottom: '0.4rem', fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.6}}>
                <span style={{position: 'absolute', left: 0, color: 'var(--text)'}}>—</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <Footer />
      </div>
    </>
  )
}
