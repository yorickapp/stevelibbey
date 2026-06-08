import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import Footer from '../components/Footer'

// Eagerly import all markdown files so Vite can bundle them
const articleModules = {
  'ai-disclosure': () => import('../writing/ai-disclosure.md?raw'),
  'analytics-ux': () => import('../writing/analytics-ux.md?raw'),
  'healthcare-systems': () => import('../writing/healthcare-systems.md?raw'),
  'design-judgment': () => import('../writing/design-judgment.md?raw'),
  'product-thinking': () => import('../writing/product-thinking.md?raw'),
  'structured-creativity': () => import('../writing/structured-creativity.md?raw'),
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }
  const frontmatter = {}
  match[1].split('\n').forEach(line => {
    const [key, ...rest] = line.split(':')
    if (key && rest.length) {
      frontmatter[key.trim()] = rest.join(':').trim().replace(/^"(.*)"$/, '$1')
    }
  })
  return { meta: frontmatter, content: match[2].trim() }
}

export default function WritingArticle() {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const loader = articleModules[slug]
    if (!loader) {
      setError(true)
      return
    }
    loader()
      .then(mod => {
        const { meta, content } = parseFrontmatter(mod.default)
        setArticle({ meta, content })
      })
      .catch(() => setError(true))
  }, [slug])

  if (error) {
    return (
      <>
        <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
        <div className="container">
          <div className="page-header">
            <h1>Article not found</h1>
            <p><Link to="/writing">Back to Writing</Link></p>
          </div>
          <Footer />
        </div>
      </>
    )
  }

  if (!article) {
    return (
      <>
        <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
        <div className="container">
          <div className="page-header"><p>Loading...</p></div>
        </div>
      </>
    )
  }

  return (
    <>
      <img src="/img/stevelibbey.png" alt="Steve Libbey" className="logo logo-static" />
      <div className="container">
        <div className="writing-article">
          <Link to="/writing" className="project-back" style={{marginBottom: '2rem', display: 'inline-block'}}>Writing</Link>
          {article.meta.topic && (
            <div style={{fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.5rem'}}>
              {article.meta.topic}
            </div>
          )}
          <h1>{article.meta.title}</h1>
          {article.meta.date && (
            <div className="article-date">{article.meta.date}</div>
          )}
          <div className="writing-article-body">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
