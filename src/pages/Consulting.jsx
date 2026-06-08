import Footer from '../components/Footer'

export default function Consulting() {
  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
      <div className="container">
        <div className="page-header page-header--with-image">
          <div className="page-header-text">
            <h1>Consulting</h1>
            <p>I help teams design and deliver complex digital products, especially those involving analytics, data visualization, AI workflows, or high-stakes decision support. These are short, targeted engagements with clear deliverables.</p>
          </div>
          <img src="/img/artifact3.png" alt="Consulting" className="page-header-image reveal" style={{'--delay': '0.1s'}} />
        </div>

        <div className="service-card reveal" style={{'--delay': '0s'}}>
          <h3>Analytics UX Review</h3>
          <p className="service-for">For teams building dashboards, reporting tools, or internal analytics products</p>
          <p>I review your analytics product and identify usability, comprehension, and workflow issues that prevent users from getting value from the data. This is not a visual polish pass. It is a structural review of how information is organized, how decisions are supported, and where users get stuck or misinterpret results.</p>
          <h4 style={{fontFamily: "'Syne', sans-serif", fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text)'}}>Likely deliverables</h4>
          <ul>
            <li>Annotated audit of current analytics surfaces</li>
            <li>Identification of comprehension gaps, navigation dead ends, and decision bottlenecks</li>
            <li>Prioritized recommendations with rationale</li>
            <li>Written assessment document</li>
          </ul>
          <h4 style={{fontFamily: "'Syne', sans-serif", fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text)'}}>Value</h4>
          <p>Your team gets a clear picture of what is working, what is not, and what to fix first&mdash;from someone who has spent years building analytics platforms at scale.</p>
        </div>

        <div className="service-card reveal" style={{'--delay': '0.08s'}}>
          <h3>Data Visualization Critique</h3>
          <p className="service-for">For teams presenting data through charts, dashboards, or analytical interfaces</p>
          <p>I review your charts, dashboards, or data presentations and recommend clearer visual structures, better hierarchy, and stronger decision support. Good data visualization is not about aesthetics. It is about making the right information visible at the right time so people can act on it.</p>
          <h4 style={{fontFamily: "'Syne', sans-serif", fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text)'}}>Likely deliverables</h4>
          <ul>
            <li>Review of current visualization patterns and their effectiveness</li>
            <li>Specific recommendations for chart types, layout, hierarchy, and labeling</li>
            <li>Guidance on progressive disclosure for complex datasets</li>
            <li>Before/after sketches or wireframes where useful</li>
          </ul>
          <h4 style={{fontFamily: "'Syne', sans-serif", fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text)'}}>Value</h4>
          <p>Users stop misreading data. Decision-makers find what they need faster. Your product earns trust through clarity instead of density.</p>
        </div>

        <div className="service-card reveal" style={{'--delay': '0.16s'}}>
          <h3>AI Workflow &amp; Product Strategy Advisory</h3>
          <p className="service-for">For teams integrating AI into products or workflows</p>
          <p>I help teams think through where AI should support users, how trust should be handled, and how workflow design should prevent confusion or overconfidence. This is especially relevant for products where AI outputs affect decisions, where users need to maintain judgment, or where the line between human work and machine output needs to be clear.</p>
          <h4 style={{fontFamily: "'Syne', sans-serif", fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text)'}}>Likely deliverables</h4>
          <ul>
            <li>Workflow audit identifying where AI adds value vs. where it introduces risk</li>
            <li>Trust model assessment: how users perceive, verify, and act on AI outputs</li>
            <li>Recommendations for transparency, control, and fallback patterns</li>
            <li>Product strategy notes on AI positioning and user expectations</li>
          </ul>
          <h4 style={{fontFamily: "'Syne', sans-serif", fontSize: '0.9rem', marginTop: '1rem', color: 'var(--text)'}}>Value</h4>
          <p>Your AI features support users instead of undermining them. The product earns trust by being honest about what AI can and cannot do.</p>
        </div>

        <div style={{margin: '4rem 0', padding: '2rem 0', borderTop: '1px solid rgba(0,0,0,0.1)'}}>
          <h2>Engagement Notes</h2>
          <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0 2rem'}}>
            <li style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dim)'}}><span style={{position: 'absolute', left: 0}}>→</span> Fixed scope. No surprise hours.</li>
            <li style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dim)'}}><span style={{position: 'absolute', left: 0}}>→</span> Remote by default.</li>
            <li style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dim)'}}><span style={{position: 'absolute', left: 0}}>→</span> Work begins after agreement and scheduling.</li>
            <li style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dim)'}}><span style={{position: 'absolute', left: 0}}>→</span> Expanded scope priced separately.</li>
          </ul>
          <a href="mailto:stevelibbey@gmail.com?subject=Consulting%20Inquiry" className="btn btn-primary">Email me about fit and timing</a>
        </div>

        <Footer />
      </div>
    </>
  )
}
