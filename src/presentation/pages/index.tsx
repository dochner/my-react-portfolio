import "@/presentation/styles/home.css";
import PublicLayout from "@/presentation/components/template/PublicLayout";

import PublicHeroSection from "@/presentation/components/organisms/PublicHeroSection";
import PublicLanguagesSection from "@/presentation/components/organisms/PublicLanguagesSection";
import PublicJobTimelineSection from "@/presentation/components/organisms/PublicJobTimelineSection";
import PublicCtaContactMe from "@/presentation/components/organisms/PublicCtaContactMe";

export const HomePage = () => {
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

export default HomePage;
