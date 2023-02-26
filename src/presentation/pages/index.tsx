import "@/presentation/styles/home.css";
import PublicLayout from "../components/template/PublicLayout";

import PublicHeroSection from "../components/organisms/PublicHeroSection";
import PublicLanguagesSection from "../components/organisms/PublicLanguagesSection";
import PublicJobTimelineSection from "../components/organisms/PublicJobTimelineSection";
import PublicCtaContactMe from "../components/organisms/PublicCtaContactMe";

export const Index = () => {
  return (
    <PublicLayout>
      <article>
        <PublicHeroSection />
        <PublicLanguagesSection />
        <PublicJobTimelineSection />
        <PublicCtaContactMe />
      </article>
    </PublicLayout>
  );
};

export default Index;
