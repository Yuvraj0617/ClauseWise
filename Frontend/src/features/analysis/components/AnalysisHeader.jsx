function AnalysisHeader({ documentType }) {
  return (
    <div className="mb-6">
      <p className="mb-2 font-sans text-sm font-medium text-accent">
        Analysis complete &middot; {documentType || 'Agreement'}
      </p>
      <h2 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">{documentType || 'Contract'} review</h2>
      <p className="mt-2 font-sans text-sm text-fog">AI-assisted extraction for a faster, more informed review.</p>
    </div>
  )
}

export default AnalysisHeader
