import { GradientSectionBorder } from "../home-shared/GradientSectionBorder";
import { LandingPageGlobalStyles } from "../home-shared/GlobalStyles";
import { PackBenchmarks } from "./PackBenchmarks";
import { PackHero } from "./PackHero";
import { PackLetter } from "./PackLetter";
import { PackFeatures } from "./PackFeatures";

export default function Home() {
  return (
    <>
      <LandingPageGlobalStyles />
      <main className="relative">
        <PackHero />
        <GradientSectionBorder>
          <PackBenchmarks />
          <PackFeatures />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <PackLetter />
        </GradientSectionBorder>
      </main>
    </>
  );
}
