import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useScrollProgress } from './hooks/useScrollProgress'
import Nav from './components/Nav'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import DataViz from './pages/DataViz'
import DataVizPCSRF from './pages/DataVizPCSRF'
import Consulting from './pages/Consulting'
import Writing from './pages/Writing'
import WritingArticle from './pages/WritingArticle'
import Music from './pages/Music'
import Art from './pages/Art'
import Projects from './pages/Projects'
import AiTrust from './pages/AiTrust'
import Yorick from './pages/Yorick'
import Thingmo from './pages/Thingmo'
import Encraftable from './pages/Encraftable'
import NoiseGift from './pages/NoiseGift'
import TmoSales from './pages/work/TmoSales'
import TmoCoaching from './pages/work/TmoCoaching'
import Noaa from './pages/work/Noaa'
import Norad from './pages/work/Norad'
import PediCrisis from './pages/work/PediCrisis'
import Providence from './pages/work/Providence'
import WestHealth from './pages/work/WestHealth'

function AppInner() {
  useScrollReveal()
  useScrollProgress()

  return (
    <>
      <Nav />
      <div className="scroll-indicator" id="scrollIndicator"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dataviz" element={<DataViz />} />
        <Route path="/dataviz-pcsrf" element={<DataVizPCSRF />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<WritingArticle />} />
        <Route path="/music" element={<Music />} />
        <Route path="/art" element={<Art />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ai-trust" element={<AiTrust />} />
        <Route path="/yorick" element={<Yorick />} />
        <Route path="/thingmo" element={<Thingmo />} />
        <Route path="/encraftable" element={<Encraftable />} />
        <Route path="/noisegift" element={<NoiseGift />} />
        <Route path="/work/tmo-sales" element={<TmoSales />} />
        <Route path="/work/tmo-coaching" element={<TmoCoaching />} />
        <Route path="/work/noaa" element={<Noaa />} />
        <Route path="/work/norad" element={<Norad />} />
        <Route path="/work/pedi-crisis" element={<PediCrisis />} />
        <Route path="/work/providence" element={<Providence />} />
        <Route path="/work/west-health" element={<WestHealth />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
