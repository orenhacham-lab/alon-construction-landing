import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { AboutIntro } from "@/components/AboutIntro";
import { PainPoints } from "@/components/PainPoints";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { ContactSection } from "@/components/ContactSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <AboutIntro />
        <PainPoints />
        <Services />
        <Projects />
        <WhyUs />
        <Process />
        <ContactSection />
        <CtaBanner />
      </main>
      <Footer />
      {/* רווח עבור בר הפעולה התחתון במובייל */}
      <div aria-hidden className="h-14 lg:hidden" />
      <FloatingButtons />
    </>
  );
}
