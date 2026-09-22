import { useState } from 'react'
import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/layout/SiteHeader'
import DocumentUploader from '../components/upload/DocumentUploader'
import AnalysisResults from '../features/analysis/AnalysisResults'
import { analysePdf } from '../services/api'

function AnalysePage() {
  const [analysis, setAnalysis] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleAnalyse = async (file) => {
    setStatus('loading')
    setError('')
    setAnalysis(null)

    try {
      setAnalysis(await analysePdf(file))
      setStatus('success')
    } catch (requestError) {
      setStatus('error')
      setError(requestError.message)
    }
  }

  return (
    <main className="mx-auto w-[min(100%-2rem,1180px)] pb-14">
      <SiteHeader workspace />

      <section className="mx-auto my-16 max-w-180 text-center sm:my-24" aria-labelledby="page-title">
        <p className="mb-2 font-sans text-[11px] font-extrabold uppercase tracking-[.12em] text-[#c76443]">
          AI contract review
        </p>
        <h1 id="page-title" className="text-4xl leading-none tracking-[-.05em] text-[#382820] sm:text-6xl">
          Understand the important parts of your agreement.
        </h1>
        <p className="mx-auto mt-5 max-w-150 font-sans text-base leading-7 text-[#806f64]">
          Upload a PDF to extract its parties, key clauses, dates, risks, and practical next steps.
        </p>
        <DocumentUploader status={status} error={error} onAnalyse={handleAnalyse} />
      </section>

      {analysis && <AnalysisResults analysis={analysis} />}
      <SiteFooter />
    </main>
  )
}

export default AnalysePage
