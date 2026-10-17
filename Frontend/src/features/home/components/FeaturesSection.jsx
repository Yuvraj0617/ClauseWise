import SectionHeading from '../../../components/ui/SectionHeading'
import { HOME_FEATURES } from '../homeContent'

function FeaturesSection() {
  return (
    <section className="rounded-md border border-line bg-paper p-8 sm:p-10" id="how-it-works">
      <div className="grid gap-8 sm:grid-cols-[.78fr_1.22fr] sm:gap-12">
        <SectionHeading eyebrow="A better first read" title="From document to decision-ready." description="Built to help you get oriented before a detailed legal review." />
        <div className="grid gap-6 sm:grid-cols-3">
          {HOME_FEATURES.map(({ title, description }) => (
            <article className="border-l-2 border-line pl-4" key={title}>
              <h3 className="text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 font-sans text-sm leading-5 text-fog">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
