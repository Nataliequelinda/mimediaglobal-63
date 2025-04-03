
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1E293B] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Elevate Your Brand with AI-Powered Solutions</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 font-light">
            Schedule a discovery call to explore how our cutting-edge technology and talented team can transform your business.
          </p>
          <Button size="lg" variant="outline" asChild className="rounded-none border-2 border-white text-white hover:bg-white hover:text-[#1E293B] group">
            <Link to="mailto:hello@mimediaglobal.com" className="flex items-center gap-2">
              Get Started With AI-Driven Marketing
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
