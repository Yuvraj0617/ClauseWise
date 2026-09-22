function SectionHeading({ eyebrow, title, description, titleId, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <p className="mb-2 font-sans text-[11px] font-extrabold uppercase tracking-[.12em] text-[#c76443]">{eyebrow}</p>}
      <h2 id={titleId} className="text-3xl leading-tight tracking-[-.04em] sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 font-sans text-sm leading-6 text-[#837167]">{description}</p>}
    </div>
  )
}

export default SectionHeading
