import ResultCard from '../../../components/ui/ResultCard'

function SummaryCard({ summary }) {
  if (!Array.isArray(summary) || summary.length === 0) return null

  return (
    <ResultCard title="Executive Summary">
      <div className="space-y-2 font-sans text-sm leading-6 text-[#725f54]">
        {summary.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </ResultCard>
  )
}

export default SummaryCard
