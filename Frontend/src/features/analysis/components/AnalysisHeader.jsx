function AnalysisHeader({ documentType }) {
  return (
    <div className="mb-5">
      <p className="mb-2 font-sans text-[11px] font-extrabold uppercase tracking-[.12em] text-[#c76443]">
        Analysis complete · {documentType || 'Agreement'}
      </p>
      <h2 className="text-3xl tracking-[-.045em] text-[#3c2c24]">{documentType || 'Contract'} review</h2>
      <p className="mt-1 font-sans text-sm text-[#87766b]">AI-assisted extraction for a faster, more informed review.</p>
    </div>
  )
}

export default AnalysisHeader
