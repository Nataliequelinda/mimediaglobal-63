
import ServiceCard from '../ServiceCard';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Palette, BarChart } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-light mb-5">Our Expertise</h2>
          <p className="text-lg text-muted-foreground font-light">
            We help brands define their voice, craft their identity, and establish meaningful connections with their audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Palette className="h-8 w-8 text-primary" />}
            title="Brand Strategy"
            description="We develop strategic frameworks that define your brand's positioning, voice, and personality in the market."
            link="/services/branding"
          />
          <ServiceCard
            icon={<Monitor className="h-8 w-8 text-primary" />}
            title="Digital Experience"
            description="Create seamless digital journeys that engage your audience and communicate your brand's unique value proposition."
            link="/services/web-design"
          />
          <ServiceCard
            icon={<BarChart className="h-8 w-8 text-primary" />}
            title="Market Analysis"
            description="Deep insights into market trends, customer behaviors, and competitive landscapes to inform strategic decisions."
            link="/services/digital-marketing"
          />
        </div>
        
        <div className="mt-16 flex justify-start">
          <Button asChild variant="outline" className="rounded-none border-2 hover:bg-transparent hover:text-primary">
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
