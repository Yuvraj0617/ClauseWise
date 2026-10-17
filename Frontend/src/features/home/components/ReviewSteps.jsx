import SectionHeading from '../../../components/ui/SectionHeading'
import { REVIEW_STEPS } from '../homeContent'

function ReviewSteps() {
  return (
    <section className="py-16" aria-labelledby="steps-title">
      <SectionHeading eyebrow="How your review works" title="A clear path from upload to understanding." titleId="steps-title" className="max-w-xl" />
      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        {REVIEW_STEPS.map(([title, description], index) => (
          <li className="rounded-md border border-line bg-paper p-6" key={title}>
            <span className="font-sans text-sm font-semibold text-accent">Step {index + 1}</span>
            <h3 className="mt-4 font-serif text-lg text-ink">{title}</h3>
            <p className="mt-2 font-sans text-sm leading-6 text-fog">{description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ReviewSteps
