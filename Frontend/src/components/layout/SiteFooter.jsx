import { Link } from 'react-router'

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-paper px-6 py-10 font-sans text-sm text-fog">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.5fr_1fr_auto] md:items-start">
        <div>
          <Link className="text-base font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" to="/">
            ClauseWise
          </Link>
          <p className="mt-3 max-w-xs leading-relaxed">
            Clearer contract decisions, starting with a better first read.
          </p>
        </div>

        <nav className="grid gap-2" aria-label="Footer navigation">
          <Link className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" to="/">Home</Link>
          <Link className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" to="/analyse">Analyse a contract</Link>
          <a className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href="mailto:hello@clausewise.app">Contact</a>
        </nav>

        <small className="leading-relaxed md:text-right">
          &copy; {new Date().getFullYear()} ClauseWise.<br />
          AI-assisted contract review.
        </small>
      </div>
    </footer>
  )
}

export default SiteFooter
