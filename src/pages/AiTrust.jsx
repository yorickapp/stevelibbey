import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import * as d3 from 'd3'

const TIMELINE = [
  { year: 2024, metric: 'ai_adoption_us_working_age', value: 39.6, label: 'Working-age Americans using generative AI', sourceLabel: 'Brookings / Real-Time Population Survey' },
  { year: 2025, metric: 'ai_adoption_us_adults', value: 56, label: 'American adults using AI tools', sourceLabel: 'Brookings / YouGov' },
  { year: 2024, metric: 'ai_use_at_work', value: 16, label: 'U.S. workers using AI at work', sourceLabel: 'Pew Research' },
  { year: 2025, metric: 'ai_use_at_work', value: 21, label: 'U.S. workers using AI at work', sourceLabel: 'Pew Research' },
  { year: 2021, metric: 'more_concerned_than_excited', value: 37, label: 'Americans more concerned than excited about AI', sourceLabel: 'Pew Research' },
  { year: 2025, metric: 'more_concerned_than_excited', value: 50, label: 'Americans more concerned than excited about AI', sourceLabel: 'Pew Research' },
]

const FICTION = [
  { metric: 'human_involvement_matters', value: 92, label: 'Readers who say human involvement in writing and producing books matters', sourceLabel: 'Wakefield Research for Wattpad' },
  { metric: 'want_disclosure_before_reading', value: 56, label: 'Readers who want AI disclosure before reading a book', sourceLabel: 'YouGov for Black Château' },
  { metric: 'less_fulfilled_post_discovery', value: 61, label: 'Readers who feel less fulfilled if they later learn a book was AI-written', sourceLabel: 'YouGov for Black Château' },
]

const DISCLOSURE = [
  { domain: 'News', finding: 'AI label lowers perceived trustworthiness', trust: -1, engagement: 0, futureIntent: 0, note: 'Even when accuracy and fairness ratings stayed flat', sourceLabel: 'Political Communication / Sage, 2024' },
  { domain: 'News', finding: 'Disclosure raises short-term willingness to continue reading', trust: 0, engagement: 1, futureIntent: -1, note: 'Short-term engagement tick-up but no improvement in future willingness to read AI news', sourceLabel: 'Gilardi et al. preregistered study, 2024' },
  { domain: 'Books', finding: 'Post-hoc discovery of AI authorship reduces fulfillment', trust: -1, engagement: 0, futureIntent: -1, note: '61% feel less fulfilled. Distinct from pre-read disclosure.', sourceLabel: 'YouGov for Black Château, 2025' },
]

function observeOnce(el, cb) {
  if (!el) return
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { cb(); obs.disconnect() }
  }, { threshold: 0.15 })
  obs.observe(el)
  return obs
}

function Chart1({ tooltipRef }) {
  const svgRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const el = svgRef.current
    const wrapper = wrapperRef.current
    if (!el || !wrapper) return

    const series = [
      { key: 'adoption', label: 'AI adoption (general)', color: '#e8a838', points: TIMELINE.filter(d => d.metric === 'ai_adoption_us_working_age' || d.metric === 'ai_adoption_us_adults'), dashed: false },
      { key: 'work', label: 'AI use at work', color: '#5b8db8', points: TIMELINE.filter(d => d.metric === 'ai_use_at_work'), dashed: false },
      { key: 'concern', label: 'More concerned than excited about AI', color: '#c45c4a', points: TIMELINE.filter(d => d.metric === 'more_concerned_than_excited'), dashed: true },
    ]

    const margin = { top: 24, right: 80, bottom: 48, left: 44 }
    const W = Math.min(wrapper.offsetWidth || 840, 840)
    const H = 320
    const iW = W - margin.left - margin.right
    const iH = H - margin.top - margin.bottom
    const tickYears = [2021, 2024, 2025]

    const xScale = d3.scalePoint().domain(tickYears).range([0, iW]).padding(0.15)
    const yScale = d3.scaleLinear().domain([0, 100]).range([iH, 0])

    const svg = d3.select(el).attr('viewBox', `0 0 ${W} ${H}`).attr('width', '100%')
    svg.selectAll('*').remove()

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

    g.append('g').selectAll('line').data(yScale.ticks(5)).join('line')
      .attr('x1', 0).attr('x2', iW)
      .attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
      .attr('stroke', '#2a2a2a').attr('stroke-width', 1)

    g.append('g').attr('transform', `translate(0,${iH})`)
      .call(d3.axisBottom(xScale).tickValues(tickYears).tickSize(0))
      .call(ax => ax.select('.domain').remove())
      .call(ax => ax.selectAll('text').attr('fill', '#888').attr('font-family', 'DM Mono, monospace').attr('font-size', '12px').attr('dy', '1.5em'))

    g.append('g').call(d3.axisLeft(yScale).ticks(5).tickFormat(d => d + '%').tickSize(0))
      .call(ax => ax.select('.domain').remove())
      .call(ax => ax.selectAll('text').attr('fill', '#888').attr('font-family', 'DM Mono, monospace').attr('font-size', '12px').attr('dx', '-0.5em'))

    const tooltip = tooltipRef.current

    series.forEach(s => {
      const pts = s.points.slice().sort((a, b) => a.year - b.year)

      if (s.dashed && pts.length === 2) {
        g.append('line')
          .attr('x1', xScale(pts[0].year)).attr('y1', yScale(pts[0].value))
          .attr('x2', xScale(pts[1].year)).attr('y2', yScale(pts[1].value))
          .attr('stroke', s.color).attr('stroke-width', 2).attr('stroke-dasharray', '6 4').attr('opacity', 0.7).attr('class', 'chart1-line')
      } else {
        const lineGen = d3.line().x(d => xScale(d.year)).y(d => yScale(d.value))
        const path = g.append('path').datum(pts).attr('fill', 'none').attr('stroke', s.color).attr('stroke-width', 2.5).attr('d', lineGen).attr('class', 'chart1-line')
        const len = path.node().getTotalLength()
        path.attr('stroke-dasharray', len).attr('stroke-dashoffset', len)
      }

      g.selectAll(`.dot-${s.key}`).data(pts).join('circle')
        .attr('class', `dot-${s.key}`)
        .attr('cx', d => xScale(d.year)).attr('cy', d => yScale(d.value))
        .attr('r', 5).attr('fill', s.color).attr('stroke', '#0f0f0f').attr('stroke-width', 2).style('cursor', 'pointer')
        .on('mousemove', (evt, d) => {
          if (tooltip) {
            tooltip.innerHTML = `<div style="color:#888;font-size:12px;margin-bottom:0.25rem">${d.label}</div><div style="font-size:20px;font-weight:700;color:#e8a838">${d.value}%</div><div style="font-size:10px;color:#888;margin-top:0.4rem">${d.year} · ${d.sourceLabel}</div>`
            tooltip.style.opacity = '1'
            tooltip.style.left = (evt.clientX + 16) + 'px'
            tooltip.style.top = (evt.clientY + 16) + 'px'
          }
        })
        .on('mouseleave', () => { if (tooltip) tooltip.style.opacity = '0' })
    })

    const annX = xScale(2025) + 10
    const annY = yScale(50) - 10
    g.append('text').attr('x', annX).attr('y', annY).attr('fill', '#888').attr('font-family', 'DM Mono, monospace').attr('font-size', '11px').text('Usage up.')
    g.append('text').attr('x', annX).attr('y', annY + 14).attr('fill', '#888').attr('font-family', 'DM Mono, monospace').attr('font-size', '11px').text('Comfort lagging.')

    function animateChart1() {
      g.selectAll('.chart1-line').transition().duration(1400).ease(d3.easeCubicInOut).attr('stroke-dashoffset', 0)
    }
    const obs = observeOnce(wrapper, animateChart1)
    return () => { if (obs) obs.disconnect() }
  }, [])

  return (
    <div ref={wrapperRef} style={{marginBottom: '1rem'}}>
      <svg ref={svgRef} id="chart1" style={{width: '100%', overflow: 'visible'}}></svg>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.25rem'}}>
        {[
          { color: '#e8a838', label: 'AI adoption (general)', dashed: false },
          { color: '#5b8db8', label: 'AI use at work', dashed: false },
          { color: '#c45c4a', label: 'More concerned than excited about AI', dashed: true },
        ].map(l => (
          <div key={l.label} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'DM Mono, monospace', fontSize: '12px', color: '#888'}}>
            <div style={{width: '24px', height: '3px', borderRadius: '2px', background: l.dashed ? `repeating-linear-gradient(to right, ${l.color} 0, ${l.color} 4px, transparent 4px, transparent 8px)` : l.color, flexShrink: 0}}></div>
            {l.label}
          </div>
        ))}
      </div>
    </div>
  )
}

function Chart2() {
  const containerRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const obs = observeOnce(container.closest('.chart-wrapper'), () => {
      if (animated.current) return
      animated.current = true
      container.querySelectorAll('.bar-fill').forEach(f => f.classList.add('animate'))
    })
    return () => { if (obs) obs.disconnect() }
  }, [])

  return (
    <div ref={containerRef} style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      {FICTION.map((d, i) => (
        <div key={d.metric}>
          <div style={{fontSize: '14px', color: '#888', marginBottom: '0.5rem'}}>{d.label}</div>
          <div style={{background: 'rgba(232,168,56,0.1)', borderRadius: '3px', height: '36px', position: 'relative', overflow: 'hidden'}}>
            <div
              className="bar-fill"
              style={{'--target-width': d.value + '%', transitionDelay: (i * 150) + 'ms', height: '100%', background: '#e8a838', borderRadius: '3px', width: '0%', transition: 'width 1s cubic-bezier(0.4,0,0.2,1)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12px'}}
            >
              <span style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 700, color: '#0f0f0f', whiteSpace: 'nowrap'}}>{d.value}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function Chart3() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 480

  const dirCell = (val) => {
    let bg, arrow
    if (val === -1) {
      bg = 'rgba(196,92,74,0.2)'
      arrow = <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 4 L10 16 M4 10 L10 16 L16 10" fill="none" stroke="#c45c4a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    } else if (val === 1) {
      bg = 'rgba(90,138,106,0.2)'
      arrow = <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 16 L10 4 M4 10 L10 4 L16 10" fill="none" stroke="#5a8a6a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    } else {
      bg = 'rgba(68,68,68,0.2)'
      arrow = <svg width="20" height="20" viewBox="0 0 20 20"><path d="M4 10 L16 10" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/></svg>
    }
    return <td style={{background: bg, textAlign: 'center', padding: '1rem', borderBottom: '1px solid #2a2a2a'}}>{arrow}</td>
  }

  return (
    <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '14px'}}>
        <thead>
          <tr>
            {['Domain', 'Finding', 'Trust Effect', 'Short-term Engagement', 'Future Intent', 'Source'].map(h => (
              <th key={h} style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', textAlign: 'left', padding: '0.75rem 1rem', borderBottom: '1px solid #2a2a2a', whiteSpace: 'nowrap'}}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DISCLOSURE.map((row, i) => (
            <tr key={i}>
              <td style={{fontFamily: 'DM Mono, monospace', fontSize: '12px', color: '#888', padding: '1rem', borderBottom: '1px solid #2a2a2a', whiteSpace: 'nowrap'}}>{row.domain}</td>
              <td style={{color: '#f0ede8', lineHeight: 1.5, padding: '1rem', borderBottom: '1px solid #2a2a2a'}}>
                {row.finding}
                {isMobile && <div style={{fontSize: '12px', color: '#888', fontStyle: 'italic', marginTop: '0.4rem', lineHeight: 1.5}}>{row.note}</div>}
              </td>
              {dirCell(row.trust)}
              {dirCell(row.engagement)}
              {dirCell(row.futureIntent)}
              <td style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#888', padding: '1rem', borderBottom: '1px solid #2a2a2a', lineHeight: 1.5}}>{row.sourceLabel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Chart4() {
  const columns = ['Accuracy', 'Disclosure', 'Authorship', 'Copyright & Training Data', 'Reader Credibility', 'Job Displacement']
  const rows = [
    { label: 'Nonfiction', cells: ['high', 'high', 'medium', 'low', 'high', 'none'] },
    { label: 'Corporate', cells: ['medium', 'medium', 'none', 'medium', 'none', 'high'] },
    { label: 'Fiction', cells: ['low', 'high', 'high', 'high', 'high', 'none'] },
  ]

  const dotStyles = {
    high:   { background: '#c45c4a', opacity: 1 },
    medium: { background: '#c45c4a', opacity: 0.55 },
    low:    { background: '#c45c4a', opacity: 0.22 },
    none:   { background: 'transparent', border: '1px solid #2a2a2a', opacity: 1 },
  }

  return (
    <div style={{display: 'grid', gridTemplateColumns: '140px repeat(6, 1fr)', gap: '1px', background: '#2a2a2a', border: '1px solid #2a2a2a', borderRadius: '6px', overflow: 'hidden', fontSize: '13px', margin: '1.5rem 0'}}>
      <div style={{background: '#1a1a1a', padding: '0.75rem 0.5rem'}}></div>
      {columns.map(col => (
        <div key={col} style={{background: '#1a1a1a', fontFamily: 'DM Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#888', textAlign: 'center', padding: '0.75rem 0.5rem', lineHeight: 1.4}}>{col}</div>
      ))}
      {rows.map(row => (
        <>
          <div key={row.label + '-label'} style={{background: '#1a1a1a', fontFamily: 'Playfair Display, Georgia, serif', fontSize: '14px', fontWeight: 600, color: '#f0ede8', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center'}}>{row.label}</div>
          {row.cells.map((level, ci) => (
            <div key={ci} style={{background: '#0f0f0f', padding: '0.75rem 0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{width: '16px', height: '16px', borderRadius: '3px', display: 'block', ...dotStyles[level]}}></span>
            </div>
          ))}
        </>
      ))}
    </div>
  )
}

export default function AiTrust() {
  const tooltipRef = useRef(null)

  // Animate bar fills on scroll using CSS class
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = '.bar-fill.animate { width: var(--target-width) !important; }'
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const pageStyle = {
    background: '#0f0f0f',
    color: '#f0ede8',
    minHeight: '100vh',
    fontFamily: 'DM Sans, system-ui, sans-serif',
    fontSize: '17px',
    lineHeight: 1.7,
    overflowX: 'hidden',
  }

  const sectionStyle = { padding: '120px 0', borderTop: '1px solid #2a2a2a' }
  const heroSectionStyle = { padding: '120px 0' }
  const pageInner = { maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
    borderBottom: '1px solid #2a2a2a', background: 'rgba(15,15,15,0.92)', backdropFilter: 'blur(8px)',
  }

  const navInner = { maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }

  const chartWrapper = { margin: '3rem 0' }
  const chartTitle = { fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 600, marginBottom: '0.5rem', color: '#f0ede8' }
  const chartSubtitle = { fontSize: '14px', color: '#888', marginBottom: '1.5rem' }
  const chartSource = { fontFamily: 'DM Mono, monospace', fontSize: '12px', color: '#888', marginTop: '1rem' }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        .ai-trust-page a { color: #e8a838 !important; }
        .ai-trust-page a:visited { color: #e8a838 !important; }
        .ai-trust-page .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .ai-trust-page .reveal.is-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div style={pageStyle} className="ai-trust-page">
        <nav style={navStyle}>
          <div style={navInner}>
            <Link to="/portfolio" style={{fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: '#888', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s'}}>&larr; Portfolio</Link>
            <span style={{fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#888', letterSpacing: '0.08em', textTransform: 'uppercase'}}>AI Trust &amp; Authorship</span>
          </div>
        </nav>

        <div ref={tooltipRef} style={{position: 'fixed', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '6px', padding: '0.75rem 1rem', fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: '13px', color: '#f0ede8', pointerEvents: 'none', zIndex: 1000, maxWidth: '240px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.15s'}}></div>

        <div style={{...pageInner, paddingTop: '80px'}}>

          <section style={heroSectionStyle}>
            <h1 style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, lineHeight: 1.15, color: '#f0ede8', marginBottom: '0.25em', opacity: 0, animation: 'fadeIn 0.7s ease-out 0.1s forwards'}}>AI writing adoption is a usage story.</h1>
            <p style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 400, lineHeight: 1.2, color: '#888', marginBottom: '2rem', opacity: 0, animation: 'fadeIn 0.7s ease-out 0.3s forwards'}}>Trust is an authorship and transparency story.</p>
            <p style={{fontSize: '17px', lineHeight: 1.8, color: '#888', maxWidth: '680px', marginBottom: '3rem', opacity: 0, animation: 'fadeIn 0.7s ease-out 0.5s forwards'}}>
              AI writing tools are being adopted faster than social norms around trust, authorship, and disclosure are settling. The result is not one trust problem, but several. Nonfiction writers face credibility and accuracy pressure. Corporate writers face workflow opacity and brand risk. Fiction writers face the hardest authorship questions of all.
            </p>

            <div style={chartWrapper} className="chart-wrapper reveal">
              <div style={chartTitle}>AI use is rising faster than comfort with AI</div>
              <Chart1 tooltipRef={tooltipRef} />
              <div style={chartSource}>Sources: Pew Research, Brookings Institute</div>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 600, lineHeight: 1.25, marginBottom: '1rem', color: '#f0ede8'}} className="reveal">Three writing contexts. Three different trust problems.</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem'}}>
              {[
                { title: 'Nonfiction', items: ['Fear of hallucinations corrupting factual claims', 'Disclosure standards and editorial accountability', 'Reader trust tied directly to accuracy'], source: 'Pew Research, 2024–25' },
                { title: 'Corporate', items: ['Hidden AI use inside production workflows', 'Brand and legal exposure', 'Workers worried about AI displacement'], source: 'Pew Research, 2024–25' },
                { title: 'Fiction', items: ['Authorship, authenticity, and training data ethics', 'Readers expect human involvement', 'Disclosure changes whether the work feels worth reading'], source: 'Wakefield / Wattpad, YouGov / Black Château' },
              ].map((card, i) => (
                <div key={card.title} className="reveal" style={{background: '#1a1a1a', borderRadius: '8px', padding: '1.75rem', border: '1px solid #2a2a2a', transitionDelay: `${i * 0.05}s`}}>
                  <h3 style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: '17px', fontWeight: 600, marginBottom: '1rem', color: '#f0ede8'}}>{card.title}</h3>
                  <ul style={{listStyle: 'none', padding: 0}}>
                    {card.items.map(item => (
                      <li key={item} style={{fontSize: '14px', color: '#888', lineHeight: 1.6, padding: '0.3rem 0', paddingLeft: '1rem', position: 'relative'}}>
                        <span style={{position: 'absolute', left: 0, color: '#e8a838'}}>–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#888', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #2a2a2a'}}>{card.source}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 600, lineHeight: 1.25, marginBottom: '1rem', color: '#f0ede8'}} className="reveal">Reader expectations for AI in books</h2>
            <p style={{color: '#888', marginBottom: '3rem', maxWidth: '600px'}} className="reveal">Three numbers from two independent surveys, all pointing in the same direction.</p>

            <div style={chartWrapper} className="chart-wrapper reveal">
              <div style={chartTitle}>Readers still want human authorship and transparency</div>
              <Chart2 />
              <div style={chartSource}>Sources: Wakefield Research for Wattpad (2024); YouGov for Black Château (2025)</div>
            </div>

            <div style={{borderLeft: '3px solid #e8a838', background: 'rgba(232,168,56,0.05)', padding: '1.25rem 1.5rem', margin: '2rem 0', borderRadius: '0 6px 6px 0'}} className="reveal">
              <div style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e8a838', marginBottom: '0.5rem'}}>Research note</div>
              <p style={{fontSize: '15px', color: '#888', lineHeight: 1.7}}>Blind reading research complicates this. Controlled studies found lay readers are not always able to reliably distinguish human from AI writing in literary excerpts, and did not always show a clear blind preference. Expert readers are consistently harsher. The reader-attitude data above measures what people say they want — not what they detect.</p>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 600, lineHeight: 1.25, marginBottom: '1rem', color: '#f0ede8'}} className="reveal">Disclosure affects trust. But not in one direction.</h2>
            <p style={{color: '#888', marginBottom: '3rem', maxWidth: '600px'}} className="reveal">The journalism research does not all point the same way.</p>

            <div style={chartWrapper} className="chart-wrapper reveal">
              <div style={chartTitle}>Disclosure affects trust, but not in one direction</div>
              <div style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#888', fontStyle: 'italic', marginBottom: '1.5rem'}}>Study findings — specific contexts, not universal percentages</div>
              <Chart3 />
              <div style={chartSource}>Sources: Political Communication / Sage (2024); Gilardi et al. preregistered study (2024); YouGov for Black Château (2025)</div>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 600, lineHeight: 1.25, marginBottom: '1rem', color: '#f0ede8'}} className="reveal">The trust problem depends on who is writing and why.</h2>

            <div style={chartWrapper} className="chart-wrapper reveal">
              <div style={chartTitle}>Trust issues are not the same across writing contexts</div>
              <div style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem'}}>
                {[['high', 1, 'High concern'], ['medium', 0.55, 'Medium'], ['low', 0.22, 'Low'], ['none', 0, 'Not primary']].map(([level, opacity, label]) => (
                  <div key={level} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#888'}}>
                    <span style={{width: '16px', height: '16px', borderRadius: '3px', display: 'block', background: level === 'none' ? 'transparent' : '#c45c4a', border: level === 'none' ? '1px solid #2a2a2a' : 'none', opacity: level === 'none' ? 1 : opacity}}></span>
                    {label}
                  </div>
                ))}
              </div>
              <Chart4 />
              <div style={{fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#888', marginTop: '1rem', lineHeight: 1.6}}>
                Based on cited survey data. Cell values represent relative concern weighting, not measured percentages.<br />
                Corporate + workplace: Pew Research. Fiction: Wakefield / Wattpad, YouGov / Black Château.
              </div>
            </div>
          </section>

          <section style={sectionStyle}>
            <h2 style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 600, lineHeight: 1.25, marginBottom: '1rem', color: '#f0ede8'}} className="reveal">Five design principles that follow from this research</h2>
            <ol style={{listStyle: 'none', counterReset: 'takeaway', marginTop: '2rem'}}>
              {[
                { num: '01', title: 'Treat authorship as a product surface.', body: 'Not a legal footnote. Who or what wrote this is part of the product experience.' },
                { num: '02', title: 'Make AI participation inspectable.', body: 'Users should be able to see where and how AI contributed, without hunting for it.' },
                { num: '03', title: 'Separate assistance from authorship.', body: 'Helping a writer is not the same as writing for them. Products that blur this line create trust problems downstream.' },
                { num: '04', title: 'Support disclosure without making users guess.', body: 'If the workflow produces AI-assisted content, disclosure should be an output of the tool, not an afterthought the user has to construct manually.' },
                { num: '05', title: 'Build for editorial review, not just generation speed.', body: 'The bottleneck in trust-sensitive writing is not output volume. It is human judgment about what to use.' },
              ].map((item, i) => (
                <li key={item.num} className="reveal" style={{counterIncrement: 'takeaway', display: 'flex', gap: '2rem', padding: '2rem 0', borderBottom: '1px solid #2a2a2a', transitionDelay: `${i * 0.05}s`}}>
                  <div style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: '48px', fontWeight: 700, color: '#2a2a2a', lineHeight: 1, flexShrink: 0, width: '60px'}}>{item.num}</div>
                  <div>
                    <h3 style={{fontFamily: 'Playfair Display, Georgia, serif', fontSize: '20px', fontWeight: 600, marginBottom: '0.5rem', color: '#f0ede8'}}>{item.title}</h3>
                    <p style={{color: '#888', fontSize: '15px'}}>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="reveal" style={{fontSize: '13px', color: '#888', fontStyle: 'italic', marginTop: '2rem'}}>These are design conclusions drawn from the cited research, not universal product requirements.</p>
          </section>

          <div style={{padding: '60px 0 80px'}}>
            <hr style={{border: 'none', borderTop: '1px solid #2a2a2a', marginBottom: '2rem'}} />
            <p style={{fontFamily: 'DM Mono, monospace', fontSize: '12px', color: '#888', lineHeight: 1.8, maxWidth: '700px'}}>
              This artifact combines national surveys (Pew, Brookings), book-reader surveys (Wakefield Research for Wattpad, YouGov for Black Château), and academic disclosure studies (Political Communication / Sage; Gilardi et al.). Some measures are direct population percentages from nationally representative samples. Some are study findings from specific experimental contexts. Fiction and book-reader data measures reader attitudes and disclosure response — not book sales or consumption volume. The writer-type trust matrix is interpretive, based on relative concern weighting across cited sources.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
