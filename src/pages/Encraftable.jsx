import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Encraftable() {
  const screens = [
    { src: '/img/encraftable-screen-home.jpg', caption: 'Home', alt: 'Home screen showing room readiness, today\'s hours, and upcoming events' },
    { src: '/img/encraftable-screen-stations.jpg', caption: 'Stations', alt: 'Stations list showing readiness status for each playing position' },
    { src: '/img/encraftable-screen-cables.jpg', caption: 'Cables', alt: 'Cable inventory organized by station assignment' },
    { src: '/img/encraftable-screen-issues.jpg', caption: 'Issues', alt: 'Issues screen listing open and in-progress problems' },
    { src: '/img/encraftable-screen-routines.jpg', caption: 'Routines', alt: 'Routines screen capturing how things are actually done' },
    { src: '/img/encraftable-screen-hours.jpg', caption: 'Hours & Events', alt: 'Hours and events screen with room schedule' },
    { src: '/img/encraftable-screen-search.jpg', caption: 'Search', alt: 'Search screen showing XLR cable results' },
    { src: '/img/encraftable-screen-people.jpg', caption: 'People', alt: 'People screen with member presence and roles' },
    { src: '/img/encraftable-screen-guide.jpg', caption: 'Guide', alt: 'Guide screen with welcome text and space orientation' },
  ]

  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
      <div className="container">
        <div className="project-page-header">
          <Link to="/projects" className="project-back">Projects</Link>
          <div className="case-study-meta" style={{marginBottom: '1rem'}}>
            <span className="meta-tag">React Native</span>
            <span className="meta-tag">Design Systems</span>
            <span className="meta-tag">Community Tools</span>
            <span className="meta-tag">2025</span>
          </div>
          <h1>Encraftable</h1>
          <p className="project-tagline">A React Native iOS prototype for makerspace organizational memory &mdash; stations, gear, cables, and instructions, so the room works for everyone who walks in, not just the people who already know where everything is.</p>
        </div>

        <div className="project-status-bar reveal">
          <div className="psb-item">
            <div className="psb-label">Platform</div>
            <div className="psb-value">iOS (React Native)</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Stack</div>
            <div className="psb-value">Expo / TypeScript / Expo Router</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Install</div>
            <div className="psb-value">Noisegiftland</div>
          </div>
          <div className="psb-item">
            <div className="psb-label">Domain</div>
            <div className="psb-value">Volunteer-run makerspaces</div>
          </div>
        </div>

        <div className="screen-gallery-label reveal">Screens</div>
        <div className="screen-gallery reveal">
          {screens.map(s => (
            <figure key={s.caption}>
              <img src={s.src} alt={s.alt} />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="screen-gallery-hint reveal">&larr; scroll to see all screens</p>

        <div className="project-body">
          <h2>The Challenge</h2>
          <p>Makerspaces run on volunteer stewardship. Equipment gets donated, set up by someone who knows how it works, and maintained by whoever cares enough to show up. When that person moves on &mdash; and they always do &mdash; what they knew goes with them. The result is a room full of gear that technically works but practically doesn't, because nobody knows the power sequence for the organ, which cable goes where, or who to ask when the mixing board stops responding.</p>
          <p>Inventory software doesn't solve this. A list of items with condition fields tells you what's there. It doesn't tell you whether the station is actually playable right now, what the setup sequence is for a first-timer, or why there's a note taped to the bass amp that says "don't touch the red knob." The real problem is organizational memory.</p>

          <hr className="section-divider" />

          <h2>What I Designed</h2>
          <p>A mobile app that treats the station &mdash; not the individual item &mdash; as the primary unit of information. A station is a fully configured playing position: Guitar Station 1, Hammond Station, Recording Station. The question the app answers is not "what gear is in this room" but "can I actually use this station right now, and how do I do it."</p>

          <p>Each station record contains:</p>
          <ul>
            <li>A readiness status &mdash; Ready, Needs Attention, or Down &mdash; with a plain-language explanation</li>
            <li>A complete gear list with condition and status for each item</li>
            <li>A cable diagram showing every assigned cable by type, length, label, and condition</li>
            <li>A prose instruction sheet written for someone who has never touched the equipment</li>
            <li>A quirks field for accumulated lore that doesn't fit formal documentation</li>
          </ul>

          <p>Cables are first-class objects, not fields on gear records. A cable has a type, a length, a condition, an assignment, and a physical label that matches the label on the cable itself. The spare bin is a distinct concept &mdash; unassigned cables available to borrow &mdash; and its contents are surfaced by type on each station detail screen.</p>

          <p>The app also surfaces room hours, recurring events with the stations they use, steward contacts with their areas of expertise, and availability notes for shared equipment.</p>

          <hr className="section-divider" />

          <h2>Key Design Decisions</h2>

          <h3>Station as the primary unit, not the item</h3>
          <p>The instinct in inventory software is to start with the item. I started with the station because that's the unit that matters to the person walking in. A guitarist doesn't care that there's an Ibanez acoustic and a Fender combo amp in the room. They care whether Guitar Station 1 is set up and ready to play. Readiness lives at the station level. Gear and cables are supporting evidence.</p>

          <h3>Cables as first-class objects</h3>
          <p>Cables are the most common reason a station fails to work. They break, they disappear, they get borrowed and not returned, and nobody notices until someone sits down to play and nothing happens. Making cables a first-class entity &mdash; with their own records, conditions, assignments, and a labeled spare bin &mdash; turns a chronic invisible problem into a visible, manageable one.</p>

          <h3>Instructions written for the person who has never been here before</h3>
          <p>Every station has a full prose onboarding sheet: step-by-step, written plainly, covering power sequence, basic settings, and how to leave the station for the next person. These instructions are the thing that survives steward turnover.</p>

          <h3>Honest about partial truth</h3>
          <p>The app does not normalize incomplete data into false completeness. Bass Station has no bass guitar assigned &mdash; the app says so plainly. The turntable signal chain is unverified &mdash; the app says that too. Empty states are honest: "No instrument currently assigned to this station." The room is a work in progress and the app reflects that, because pretending otherwise makes the app useless the moment someone relies on it.</p>

          <h3>Component architecture designed for reuse</h3>
          <p>Screens don't talk directly to the data. Helper functions &mdash; getStation, getGearForStation, getCablesForStation, getReadinessCount &mdash; sit between the data layer and the UI so new screens don't require new data logic. This is a prototype, but it's built as if it's going to grow.</p>

          <hr className="section-divider" />

          <h2>Research Foundation</h2>
          <p>The Noisegiftland install is grounded in field research on real makerspace failure modes. High member turnover is endemic &mdash; spaces grow every month but lose members just as fast because people join without knowing what to do with the equipment and never find their footing. Volunteer burnout is the primary sustainability threat: the person who knows the most tends to carry the most, and when they leave, the knowledge leaves with them.</p>
          <p>The music room inventory was seeded from the actual Noisebridge staging CSV, with stations posited to reflect the simplified, plug-and-play goal the Music Guild is working toward: two guitar stations, bass, electronic drums, recording, DJ, keyboard, Hammond, and PA. Each station fully configured, cabled, and documented.</p>

          <hr className="section-divider" />

          <h2>Design Principle</h2>
          <p>The room has a lot of knowledge in it. Most of it is in people's heads. The app's job is to move that knowledge from heads to hardware &mdash; attached to the physical thing it describes, readable by anyone who walks in, and still there after the person who knew it moves on.</p>
        </div>

        <Footer />
      </div>
    </>
  )
}
