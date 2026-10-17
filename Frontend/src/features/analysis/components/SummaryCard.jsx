import ResultCard from '../../../components/ui/ResultCard'

function SummaryCard({ summary }) {
  if (!Array.isArray(summary) || summary.length === 0) return null

  return (
    <ResultCard title="Executive Summary">
      <div className="space-y-3 font-sans text-sm leading-6 text-slate">
        {summary.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </ResultCard>
  )
}

export default SummaryCard
