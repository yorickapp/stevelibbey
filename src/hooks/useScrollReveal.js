import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )

    // Small delay to allow DOM to settle after route change
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }, 50)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [location.pathname])
}
