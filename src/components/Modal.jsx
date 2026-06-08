import { useEffect } from 'react'

export default function Modal({ src, alt, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!src) return null

  return (
    <div className="modal active" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>&times;</button>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={src} alt={alt || ''} />
      </div>
    </div>
  )
}
