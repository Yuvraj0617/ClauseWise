import ResultCard from '../../components/ui/ResultCard'
import AnalysisHeader from './components/AnalysisHeader'
import ClausesCard from './components/ClausesCard'
import DetailsSidebar from './components/DetailsSidebar'
import RiskSection from './components/RiskSection'
import SummaryCard from './components/SummaryCard'
import { getAnalysisValue } from './analysisUtils'

function AnalysisResults({ analysis }) {
  if (typeof analysis === 'string') {
    return <section className="mt-9" aria-live="polite"><ResultCard title="Analysis result"><p className="font-sans text-sm leading-6 text-[#725f54]">{analysis}</p></ResultCard></section>
  }

  const dates = Object.entries(analysis.importantDates || {}).filter(([, value]) => value)
  const risks = Array.isArray(analysis.risks) ? analysis.risks : []
  const suggestion = getAnalysisValue(analysis, 'Suggestions')
  const nextSteps = getAnalysisValue(analysis, 'NextSteps')

  return (
    <section className="mt-9" id="analysis" aria-live="polite">
      <AnalysisHeader documentType={analysis.documentType} />
      <div className="grid gap-5 lg:grid-cols-[1.68fr_.72fr]">
        <div className="grid content-start gap-5"><SummaryCard summary={analysis.summary} /><ClausesCard clauses={analysis.clauses} /></div>
        <DetailsSidebar parties={analysis.parties} dates={dates} nextSteps={nextSteps} />
      </div>
      <RiskSection risks={risks} suggestion={suggestion} />
    </section>
  )
}

export default AnalysisResults
