import { Link } from "react-router";
import SiteFooter from "../components/layout/SiteFooter";
import SiteHeader from "../components/layout/SiteHeader";
import FeaturesSection from "../features/home/components/FeaturesSection";
import HomeHero from "../features/home/components/HomeHero";
import ReviewSteps from "../features/home/components/ReviewSteps";
import WhyClauseWise from "../features/home/components/WhyClauseWise";
import { PRIMARY_ACTION_CLASS } from "../features/home/homeStyles";

function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_85%_4%,#f2dfcf_0,transparent_25%),#f8f4ec]">
      <div className="mx-auto w-[min(100%-2rem,1180px)] pb-14">
        <SiteHeader />
        <HomeHero />
        <WhyClauseWise />
        <FeaturesSection />
        <ReviewSteps />

        <section className="grid gap-6 border-y border-[#e5dacd] py-12 sm:grid-cols-3">
          <Principle
            title="Designed for clarity"
            description="A consistent review structure for every supported agreement."
          />
          <Principle
            title="Focused on the facts"
            description="Extracted information stays tied to what appears in the document."
          />
          <Principle
            title="Ready to discuss"
            description="Bring a useful summary and focused questions to your advisor."
          />
        </section>

        <section className="flex flex-col gap-7 py-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-sans text-[11px] font-extrabold uppercase tracking-[.12em] text-[#c76443]">
              Ready when you are
            </p>
            <h2 className="max-w-142 text-3xl leading-tight tracking-[-.04em] sm:text-4xl">
              Bring clarity to the next contract on your desk.
            </h2>
          </div>
          <Link className={PRIMARY_ACTION_CLASS} to="/analyse">
            Start an analysis <span className="text-lg">→</span>
          </Link>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}

function Principle({ title, description }) {
  return (
    <div>
      <p className="font-sans text-xs font-extrabold uppercase tracking-[.1em] text-[#c76443]">
        {title}
      </p>
      <p className="mt-3 font-sans text-sm leading-6 text-[#806f64]">
        {description}
      </p>
    </div>
  );
}

export default HomePage;
