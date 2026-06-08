import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const articles = [
  {
    slug: 'ai-disclosure',
    topic: 'AI & Trust',
    title: 'When AI Writes for You, Who Is the Author?',
    excerpt: 'The problem with AI writing tools is not the quality of the output. It is the erosion of authorship as a meaningful concept. What happens when writers cannot tell which words are theirs?',
  },
  {
    slug: 'analytics-ux',
    topic: 'Analytics UX',
    title: 'Most Dashboards Are Not Designed. They Are Accumulated.',
    excerpt: 'The typical analytics dashboard is a graveyard of stakeholder requests. Each chart made sense when someone asked for it. Together, they tell no story and support no decision.',
  },
  {
    slug: 'healthcare-systems',
    topic: 'Healthcare Systems',
    title: 'Designing for the Clinician Who Has 30 Seconds',
    excerpt: 'Healthcare UX is not about making things look clean. It is about making the right action obvious when someone is under pressure, distracted, and responsible for a life.',
  },
  {
    slug: 'design-judgment',
    topic: 'Design Judgment',
    title: 'The Case for Saying No to Features',
    excerpt: 'Senior design work is mostly about what you choose not to build. The hardest skill is explaining why something that sounds reasonable would actually make the product worse.',
  },
  {
    slug: 'product-thinking',
    topic: 'Product Thinking',
    title: 'Complex Does Not Mean Complicated',
    excerpt: 'Products that serve dense workflows can still be clear. The difference between complex and complicated is whether the design respects the user\'s mental model or fights it.',
  },
  {
    slug: 'structured-creativity',
    topic: 'Writing & Creativity',
    title: 'Structured Creativity Is Still Creativity',
    excerpt: 'The assumption that creative work resists structure is wrong. The best creative tools impose constraints that make better work possible, not constraints that limit expression.',
  },
]

export default function Writing() {
  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
      <div className="container">
        <div className="page-header">
          <h1>Writing</h1>
          <p>Notes on the decisions that shape complex products. I write about AI and trust, analytics UX, healthcare systems, design judgment, and the kind of product thinking that does not fit neatly into a case study.</p>
        </div>

        <div className="article-grid">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              to={`/writing/${article.slug}`}
              className="article-card reveal"
              style={{'--delay': `${i * 0.08}s`}}
            >
              <div className="article-topic">{article.topic}</div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </>
  )
}
