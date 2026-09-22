function ResultCard({ title, children, className = "" }) {
  return (
    <article
      className={`rounded-md border border-[#e8ded2] bg-paper p-5 shadow-[0_5px_18px_rgb(89_61_42_/_4%)] ${className}`}
    >
      <h2 className="mb-4 text-base text-[#a95137]">{title}</h2>
      {children}
    </article>
  );
}

export default ResultCard;
