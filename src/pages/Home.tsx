
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ApproachSection from '../components/sections/ApproachSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ClientsSection from '../components/sections/ClientsSection';
import AboutSection from '../components/sections/AboutSection';
import ExpertsSection from '../components/sections/ExpertsSection';

const Home = () => {
  return (
    <div className="bg-[#FAF9F6]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExpertsSection />
      <ApproachSection />
      <TestimonialsSection />
      <PortfolioSection />
      <ClientsSection />
      <CtaSection />
    </div>
  );
};

export default Home;
