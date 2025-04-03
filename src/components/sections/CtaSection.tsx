
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 font-light">
            Let's discuss how our strategic approach can help you connect with your audience and achieve your business goals.
          </p>
          <Button size="lg" variant="outline" asChild className="rounded-none border-2 border-white text-white hover:bg-white hover:text-gray-900">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
