
import ServiceCard from '../ServiceCard';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Palette, Database, Rocket } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-light mb-5 text-[#1A1A1A]">What We Do</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<MessageCircle className="h-8 w-8 text-[#B14D4D]" />}
            title="Brand Strategy & Messaging"
            description="Clarify your voice, audience, and positioning to stand out with intention."
            link="/services/branding"
          />
          <ServiceCard
            icon={<Palette className="h-8 w-8 text-[#B14D4D]" />}
            title="Creative Direction & Identity"
            description="From visual style to storytelling, we bring your brand to life."
            link="/services/creative"
          />
          <ServiceCard
            icon={<Rocket className="h-8 w-8 text-[#B14D4D]" />}
            title="Campaign & Launch Support"
            description="From ideas to execution — we help you launch smarter."
            link="/services/campaigns"
          />
          <ServiceCard
            icon={<Database className="h-8 w-8 text-[#B14D4D]" />}
            title="Marketing Systems & Ops"
            description="We build the backend of your business so you can scale sustainably."
            link="/services/systems"
          />
        </div>
        
        <div className="mt-16 flex justify-start">
          <Button asChild variant="outline" className="rounded-none border-2 border-[#B14D4D] text-[#B14D4D] hover:bg-[#B14D4D] hover:text-white">
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
