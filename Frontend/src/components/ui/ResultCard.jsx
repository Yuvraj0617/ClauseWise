function ResultCard({ title, children, className = "" }) {
  return (
    <article
      className={`rounded-md border border-line bg-paper p-6 ${className}`}
    >
      <h2 className="mb-4 font-serif text-lg font-semibold text-ink">{title}</h2>
      {children}
    </article>
  );
}

export default ResultCard;
