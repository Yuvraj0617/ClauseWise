import SectionHeading from '../../../components/ui/SectionHeading'
import { REVIEW_STEPS } from '../homeContent'

function ReviewSteps() {
  return <section className="py-20" aria-labelledby="steps-title"><SectionHeading eyebrow="How your review works" title="A clear path from upload to understanding." titleId="steps-title" className="max-w-155" /><ol className="mt-10 grid gap-4 md:grid-cols-3">{REVIEW_STEPS.map(([title, description], index) => <li className="rounded-lg border border-[#e8ded2] bg-paper p-6" key={title}><span className="font-sans text-xs font-extrabold text-[#c76443]">Step 0{index + 1}</span><h3 className="mt-5 text-xl text-[#49362d]">{title}</h3><p className="mt-3 font-sans text-sm leading-6 text-[#806f64]">{description}</p></li>)}</ol></section>
}

export default ReviewSteps
