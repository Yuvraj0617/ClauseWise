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
    <div className="min-h-screen bg-canvas">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <HomeHero />

        <div className="grid gap-8">
          <WhyClauseWise />
          <FeaturesSection />
        </div>

        <ReviewSteps />

        <section className="grid gap-6 border-y border-line py-12 sm:grid-cols-3">
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

        <section className="flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-sans text-sm font-medium text-accent">
              Ready when you are
            </p>
            <h2 className="max-w-lg font-serif text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
              Bring clarity to the next contract on your desk.
            </h2>
          </div>
          <Link className={PRIMARY_ACTION_CLASS} to="/analyse">
            Start an analysis
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Principle({ title, description }) {
  return (
    <div>
      <p className="font-sans text-sm font-medium text-accent">
        {title}
      </p>
      <p className="mt-2 font-sans text-sm leading-6 text-fog">
        {description}
      </p>
    </div>
  );
}

export default HomePage;
