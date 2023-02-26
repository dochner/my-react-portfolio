import "@/presentation/styles/home.css";
import PublicLayout from "../components/template/PublicLayout";

import PublicHeroSection from "../components/organisms/PublicHeroSection";
import PublicLanguagesSection from "../components/organisms/PublicLanguagesSection";
import PublicJobTimelineSection from "../components/organisms/PublicJobTimelineSection";

export const Index = () => {
  return (
    <PublicLayout>
      <article>
        <PublicHeroSection />
        <PublicLanguagesSection />
        <PublicJobTimelineSection />
      </article>
    </PublicLayout>
  );
};

export default Index;
