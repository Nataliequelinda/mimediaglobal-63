
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#B14D4D] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Let's Elevate Your Brand Together</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 font-light">
            Schedule a discovery call and explore how we can support your brand's next move.
          </p>
          <Button size="lg" variant="outline" asChild className="rounded-none border-2 border-white text-white hover:bg-white hover:text-[#B14D4D]">
            <Link to="mailto:hello@mimediaglobal.com">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
