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
    <div className="min-h-screen bg-canvas">
      <SiteHeader workspace />

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section className="py-12 sm:py-16" aria-labelledby="page-title">
          <p className="mb-2 font-sans text-sm font-medium text-accent">
            AI contract review
          </p>
          <h1 id="page-title" className="font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            Understand the important parts of your agreement.
          </h1>
          <p className="mt-3 max-w-xl font-sans text-base leading-7 text-fog">
            Upload a PDF to extract its parties, key clauses, dates, risks, and practical next steps.
          </p>
          <DocumentUploader status={status} error={error} onAnalyse={handleAnalyse} />
        </section>

        {analysis && <AnalysisResults analysis={analysis} />}
      </main>

      <SiteFooter />
    </div>
  )
}

export default AnalysePage
