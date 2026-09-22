import ResultCard from '../../../components/ui/ResultCard'

function RiskSection({ risks, suggestion }) {
  return <>
    <ResultCard className="mt-5" title="Risk Identification">
      <div className="grid gap-3 md:grid-cols-3">
        {risks.length ? risks.map((risk, index) => (
          <article className="flex min-h-19 gap-2 rounded bg-[#fdf7f0] p-3" key={index}>
            <span className="grid size-[18px] shrink-0 place-items-center rounded-full bg-[#f8dfd6] font-sans text-[11px] font-extrabold text-[#c76245]">!</span>
            <div><small className="font-sans text-[9px] font-extrabold uppercase tracking-wider text-[#b55a3f]">Review point</small><p className="mt-1 font-sans text-[11px] leading-4 text-[#725f54]">{risk}</p></div>
          </article>
        )) : <p className="font-sans text-sm text-[#725f54]">No explicit risks were identified in this agreement.</p>}
      </div>
    </ResultCard>
    {suggestion && <section className="mt-4 flex gap-2.5 border-t border-[#e8ded2] px-5 py-4"><span className="text-[#d16849]">✦</span><div><small className="font-sans text-[9px] font-extrabold uppercase tracking-wider text-[#b55a3f]">Suggestion</small><p className="mt-1 font-sans text-xs leading-5 text-[#806d62]">{suggestion}</p></div></section>}
  </>
}

export default RiskSection
