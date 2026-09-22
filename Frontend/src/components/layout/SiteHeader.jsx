import { Link, NavLink } from 'react-router'

const navClass = ({ isActive }) => (
  `text-xs font-semibold transition ${isActive ? 'text-[#a94f37]' : 'text-[#897b70] hover:text-[#a94f37]'}`
)

function SiteHeader({ workspace = false }) {
  return (
    <header className="flex min-h-14 items-center border-b border-[#e7ddd0] font-sans">
      <Link className="text-xs font-extrabold uppercase tracking-wide text-[#40302a]" to="/">
        ClauseWise
      </Link>

      <nav className="ml-12 hidden items-center gap-6 sm:flex" aria-label="Primary navigation">
        <NavLink className={navClass} to="/" end>Home</NavLink>
        <NavLink className={navClass} to="/analyse">Analyse</NavLink>
        <a className="text-xs font-semibold text-[#897b70] transition hover:text-[#a94f37]" href="/#how-it-works">
          How it works
        </a>
      </nav>

      <div className="ml-auto flex gap-2">
        {workspace ? (
          <>
            <button className="hidden rounded border border-[#e2d8ca] px-3 py-2 text-[11px] text-[#7a6c60] sm:block" type="button">
              PDF report
            </button>
            <a className="rounded bg-clay px-3 py-2 text-[11px] font-bold text-white" href="#analysis">
              Share analysis
            </a>
          </>
        ) : (
          <Link className="rounded bg-clay px-3 py-2 text-[11px] font-bold text-white" to="/analyse">
            Start analysis
          </Link>
        )}
      </div>
    </header>
  )
}

export default SiteHeader
