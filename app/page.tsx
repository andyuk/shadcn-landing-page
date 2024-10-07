import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ExploreSoftwareCategories } from "@/components/layout/sections/exploreSoftwareCategories";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ShareSoftwareStack } from "@/components/layout/sections/shareSoftwareStack";
import { WhyUseOurDirectory } from "@/components/layout/sections/whyUseOurDirectory";
import { AboutUs } from "@/components/layout/sections/aboutUs";

export const metadata = {
  title: "CT Stack - Software & Technologies for the Construction Industry",
  description: "",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "A comprehensive directory of construction technology products for main contractors and architects.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExploreSoftwareCategories />
      <ShareSoftwareStack />
      <WhyUseOurDirectory />
      <BenefitsSection />
      <AboutUs />
      <FooterSection />
    </>
  );
}