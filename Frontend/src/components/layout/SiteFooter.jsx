import { Link } from 'react-router'

function SiteFooter() {
  return (
    <footer className="mt-20 grid gap-7 border-t border-[#e5dacd] pt-7 font-sans text-[11px] text-[#897a6f] md:grid-cols-[1.5fr_1fr_auto] md:items-end">
      <div>
        <Link className="text-xs font-extrabold uppercase tracking-wide text-[#40302a]" to="/">
          ClauseWise
        </Link>
        <p className="mt-2.5 max-w-70 leading-relaxed">
          Clearer contract decisions, starting with a better first read.
        </p>
      </div>

      <nav className="grid gap-2" aria-label="Footer navigation">
        <Link className="hover:text-[#b1563d]" to="/">Home</Link>
        <Link className="hover:text-[#b1563d]" to="/analyse">Analyse a contract</Link>
        <a className="hover:text-[#b1563d]" href="mailto:hello@clausewise.app">Contact</a>
      </nav>

      <small className="leading-relaxed md:text-right">
        © {new Date().getFullYear()} ClauseWise.<br />
        AI-assisted contract review.
      </small>
    </footer>
  )
}

export default SiteFooter
