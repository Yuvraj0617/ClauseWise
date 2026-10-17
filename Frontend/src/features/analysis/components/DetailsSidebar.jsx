import ResultCard from '../../../components/ui/ResultCard'
import { formatLabel } from '../analysisUtils'

function DetailsSidebar({ parties, dates, nextSteps }) {
  return (
    <aside className="grid content-start gap-5">
      {Array.isArray(parties) && parties.length > 0 && (
        <ResultCard title="Contracting Parties">
          <div className="space-y-3">
            {parties.map((party, index) => (
              <div className="flex items-center gap-3" key={index}>
                <span className="grid size-7 place-items-center rounded-full bg-accent-soft font-sans text-xs font-semibold text-accent">
                  {party.name?.slice(0, 1) || '?'}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{party.name}</p>
                  <p className="text-xs text-fog">{party.role}</p>
                </div>
              </div>
            ))}
          </div>
        </ResultCard>
      )}
      {dates.length > 0 && (
        <ResultCard title="Critical Timelines">
          <dl className="divide-y divide-line">
            {dates.map(([key, value]) => (
              <div className="flex justify-between gap-3 py-2.5 first:pt-0" key={key}>
                <dt className="font-sans text-xs text-fog">{formatLabel(key)}</dt>
                <dd className="text-right font-sans text-xs font-semibold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </ResultCard>
      )}
      {nextSteps && (
        <ResultCard className="border-accent bg-accent-soft" title="Next Step">
          <p className="font-sans text-sm leading-5 text-ink">{nextSteps}</p>
        </ResultCard>
      )}
    </aside>
  )
}

export default DetailsSidebar
