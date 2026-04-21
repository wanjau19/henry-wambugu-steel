import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import CanvasSequence from "./components/CanvasSequence";
import ProjectGrid from "./components/ProjectGrid";
import Services from "./components/Services";
import Customization from "./components/Customization";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Rina Steel | Premium Steel & Metal Works Nairobi",
  description: "Custom-crafted steel gates, metallic doors, furniture and welding solutions in Nairobi Kenya.",
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <CanvasSequence />
        <ProjectGrid />
        <Services />
        <Customization />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
