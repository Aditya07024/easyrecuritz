import { usePageTitle, useReveal } from "../components/ui";
import Hero from "./Hero";
import FeaturedJobs from "./FeaturedJobs";
import FAQ from "./Faq";
import Contact from "./Contact";
import {
  StatsStrip,
  AudienceSection,
  IntroStrip,
  Services,
  Approach,
  About,
  Commitments,
  BrandStatement,
} from "./Sections";

export default function HomePage() {
  usePageTitle("");
  useReveal();
  return (
    <main>
      <Hero />
      <StatsStrip />
      <FeaturedJobs />
      <AudienceSection />
      <IntroStrip />
      <Services />
      <Approach />
      <About />
      <Commitments />
      <BrandStatement />
      <FAQ />
      <Contact />
    </main>
  );
}
