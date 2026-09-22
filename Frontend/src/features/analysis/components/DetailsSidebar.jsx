import ResultCard from '../../../components/ui/ResultCard'
import { formatLabel } from '../analysisUtils'

function DetailsSidebar({ parties, dates, nextSteps }) {
  return (
    <aside className="grid content-start gap-5">
      {Array.isArray(parties) && parties.length > 0 && (
        <ResultCard title="Contracting Parties">
          <div className="space-y-3">
            {parties.map((party, index) => (
              <div className="flex items-center gap-2.5" key={index}>
                <span className="grid size-6 place-items-center rounded-full bg-[#f8e7db] font-sans text-[11px] font-extrabold text-[#b75a3e]">
                  {party.name?.slice(0, 1) || '?'}
                </span>
                <p className="font-sans text-xs"><strong className="block text-[#594139]">{party.name}</strong><span className="text-[#9b8a7e]">{party.role}</span></p>
              </div>
            ))}
          </div>
        </ResultCard>
      )}
      {dates.length > 0 && (
        <ResultCard title="Critical Timelines">
          <dl className="divide-y divide-[#eee5da]">
            {dates.map(([key, value]) => (
              <div className="flex justify-between gap-3 py-2.5 first:pt-0" key={key}>
                <dt className="font-sans text-[11px] text-[#967f72]">{formatLabel(key)}</dt>
                <dd className="text-right font-sans text-[11px] font-bold text-[#5f463b]">{value}</dd>
              </div>
            ))}
          </dl>
        </ResultCard>
      )}
      {nextSteps && <ResultCard className="relative overflow-hidden border-clay bg-clay" title="Next Step"><p className="w-[85%] font-sans text-xs leading-5 text-white">{nextSteps}</p><span className="absolute bottom-3 right-4 font-sans text-xl text-white">→</span></ResultCard>}
    </aside>
  )
}

export default DetailsSidebar
