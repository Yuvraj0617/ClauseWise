function SectionHeading({ eyebrow, title, description, titleId, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <p className="mb-2 font-sans text-sm font-medium text-accent">{eyebrow}</p>}
      <h2 id={titleId} className="font-serif text-2xl leading-tight tracking-tight text-ink sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 font-sans text-sm leading-6 text-fog">{description}</p>}
    </div>
  )
}

export default SectionHeading
