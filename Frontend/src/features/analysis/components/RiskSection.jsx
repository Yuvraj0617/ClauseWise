import ResultCard from '../../../components/ui/ResultCard'

function RiskSection({ risks, suggestion }) {
  return <>
    <ResultCard className="mt-5" title="Risk Identification">
      <div className="grid gap-3 md:grid-cols-3">
        {risks.length ? risks.map((risk, index) => (
          <article className="flex gap-3 rounded-md border border-line bg-paper p-4" key={index}>
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-alert-soft font-sans text-xs font-semibold text-alert">!</span>
            <div>
              <p className="font-sans text-sm leading-5 text-slate">{risk}</p>
            </div>
          </article>
        )) : <p className="font-sans text-sm text-slate">No explicit risks were identified in this agreement.</p>}
      </div>
    </ResultCard>
    {suggestion && (
      <section className="mt-4 flex gap-3 rounded-md border border-line bg-paper px-5 py-4">
        <span className="text-gold">&#10022;</span>
        <div>
          <p className="font-sans text-sm leading-5 text-slate">{suggestion}</p>
        </div>
      </section>
    )}
  </>
}

export default RiskSection
