import { Link, NavLink } from 'react-router'

const navClass = ({ isActive }) => (
  `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-fog hover:text-ink'}`
)

function SiteHeader({ workspace = false }) {
  return (
    <header className="flex min-h-16 items-center border-b border-line bg-paper px-6 font-sans">
      <Link className="text-base font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" to="/">
        ClauseWise
      </Link>

      <nav className="ml-10 hidden items-center gap-8 sm:flex" aria-label="Primary navigation">
        <NavLink className={navClass} to="/" end>Home</NavLink>
        <NavLink className={navClass} to="/analyse">Analyse</NavLink>
        <a className="text-sm font-medium text-fog transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href="/#how-it-works">
          How it works
        </a>
      </nav>

      <div className="ml-auto flex items-center gap-3">
        {workspace ? (
          <>
            <button className="hidden rounded-md border border-line px-4 py-2 text-sm font-medium text-slate transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:block" type="button">
              PDF report
            </button>
            <a className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" href="#analysis">
              Share analysis
            </a>
          </>
        ) : (
          <Link className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" to="/analyse">
            Start analysis
          </Link>
        )}
      </div>
    </header>
  )
}

export default SiteHeader
