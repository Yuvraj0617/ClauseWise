import SectionHeading from '../../../components/ui/SectionHeading'
import { HOME_FEATURES } from '../homeContent'

function FeaturesSection() {
  return <section className="grid gap-8 rounded-lg border border-[#e8ded2] bg-paper p-7 sm:grid-cols-[.78fr_1.22fr] sm:gap-14 sm:p-11" id="how-it-works"><SectionHeading eyebrow="A better first read" title="From document to decision-ready." description="Built to help you get oriented before a detailed legal review." /><div className="grid gap-6 sm:grid-cols-3">{HOME_FEATURES.map(({ title, description }, index) => <article className="border-l border-[#eadfce] pl-4" key={title}><span className="font-sans text-[11px] font-extrabold text-[#cb6848]">0{index + 1}</span><h3 className="mt-3 text-base text-[#4e382f]">{title}</h3><p className="mt-2 font-sans text-xs leading-5 text-[#88776c]">{description}</p></article>)}</div></section>
}

export default FeaturesSection
