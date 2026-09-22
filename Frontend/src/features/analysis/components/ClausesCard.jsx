import ResultCard from '../../../components/ui/ResultCard'

function ClausesCard({ clauses }) {
  if (!Array.isArray(clauses) || clauses.length === 0) return null

  return (
    <ResultCard title="Clause Deep-Dive">
      <div className="divide-y divide-[#eee5da]">
        {clauses.map((clause, index) => (
          <article className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[78px_1fr] sm:gap-4" key={index}>
            <span className="font-sans text-[10px] font-extrabold uppercase text-[#b95b40]">Section {index + 1}</span>
            <div>
              <h3 className="text-sm text-[#49362d]">{clause.title}</h3>
              <p className="mt-1 font-sans text-xs leading-5 text-[#725f54]">{clause.text}</p>
            </div>
          </article>
        ))}
      </div>
    </ResultCard>
  )
}

export default ClausesCard
