import react from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeaturedServices from "../../containers/FeaturedServices";
import AboutContainer from "../../containers/AboutContainer";
import WhyUs from "../../containers/WhyUs";
import Clients from "../../containers/Clients";
import Services from "../../containers/Services";
import Cta from "../../containers/Cta";
import Team from "../../containers/Team";
import Contact from "../../containers/Contact";
import Footer from "../../containers/Footer";
import PartfolioContainer from "../../containers/PartfolioContainer";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main id="main">
        <FeaturedServices />
        <AboutContainer />
        <WhyUs />
        <Clients />
        <Services />
        <Cta />
        <PartfolioContainer />
        <Team />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
export default HomePage;
