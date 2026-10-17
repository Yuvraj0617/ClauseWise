import ResultCard from '../../../components/ui/ResultCard'

function ClausesCard({ clauses }) {
  if (!Array.isArray(clauses) || clauses.length === 0) return null

  return (
    <ResultCard title="Clause Deep-Dive">
      <div className="divide-y divide-line">
        {clauses.map((clause, index) => (
          <article className="grid gap-2 py-4 first:pt-0 sm:grid-cols-[80px_1fr] sm:gap-4" key={index}>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent">Section {index + 1}</span>
            <div>
              <h3 className="text-sm font-semibold text-ink">{clause.title}</h3>
              <p className="mt-1 font-sans text-sm leading-5 text-slate">{clause.text}</p>
            </div>
          </article>
        ))}
      </div>
    </ResultCard>
  )
}

export default ClausesCard
