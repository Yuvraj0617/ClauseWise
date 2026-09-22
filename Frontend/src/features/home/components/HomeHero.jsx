import { Link } from 'react-router'
import { PRIMARY_ACTION_CLASS } from '../homeStyles'

function HomeHero() {
  return (
    <section className="max-w-195 py-22 sm:py-32 lg:py-40">
      <p className="mb-2 font-sans text-[11px] font-extrabold uppercase tracking-[.12em] text-[#c76443]">Contract intelligence, made simple</p>
      <h1 className="max-w-172 text-5xl leading-none tracking-[-.05em] text-[#382820] sm:text-7xl lg:text-[5.85rem]">Read every agreement with more confidence.</h1>
      <p className="mt-5 max-w-135 font-sans text-base leading-7 text-[#78655a]">ClauseWise turns lengthy legal PDFs into a structured, easy-to-review contract brief in minutes.</p>
      <div className="mt-8 flex items-center gap-6"><Link className={PRIMARY_ACTION_CLASS} to="/analyse">Analyse a contract <span className="text-lg">→</span></Link><a className="font-sans text-xs font-bold text-[#8e5341] underline underline-offset-4" href="#how-it-works">How it works</a></div>
      <small className="mt-5 block font-sans text-[11px] text-[#9b8b7e]">PDF documents only · Up to 5 MB per analysis</small>
    </section>
  )
}

export default HomeHero
