import { Link } from 'react-router'
import { PRIMARY_ACTION_CLASS } from '../homeStyles'

function HomeHero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <p className="mb-3 font-sans text-sm font-medium text-accent">Contract intelligence, made simple</p>
      <h1 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">Read every agreement with more confidence.</h1>
      <p className="mt-4 max-w-xl font-sans text-base leading-7 text-slate">ClauseWise turns lengthy legal PDFs into a structured, easy-to-review contract brief in minutes.</p>
      <div className="mt-8 flex items-center gap-6">
        <Link className={PRIMARY_ACTION_CLASS} to="/analyse">Analyse a contract</Link>
        <a className="font-sans text-sm font-semibold text-accent underline underline-offset-4 transition-colors hover:text-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href="#how-it-works">How it works</a>
      </div>
      <p className="mt-4 font-sans text-sm text-fog">PDF documents only &middot; Up to 5 MB per analysis</p>
    </section>
  )
}

export default HomeHero
