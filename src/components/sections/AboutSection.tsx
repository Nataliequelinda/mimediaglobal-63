
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F4EF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-light mb-6 text-[#1A1A1A]">Boutique, agile, and always aligned with your big goals.</h2>
          <div className="space-y-6">
            <p className="text-lg text-[#1A1A1A] font-light">
              MI Media is a boutique consultancy working with purpose-driven founders and companies ready to level up.
              We act as your full-service outsourced team — combining strategy, design, storytelling, and operational expertise from Latin America's top creative minds.
            </p>
            <p className="text-lg text-[#1A1A1A] font-light">
              Whether you're launching, growing, or rebranding, we help you move with clarity and confidence.
            </p>
          </div>
          
          <div className="mt-10">
            <Link 
              to="/about" 
              className="inline-flex items-center text-lg text-[#B14D4D] hover:text-[#8A2C3B] transition-colors"
            >
              Learn more about our approach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
