
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-light mb-5">Selected Work</h2>
          <p className="text-lg text-muted-foreground font-light">
            A glimpse into our strategic brand development projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative overflow-hidden">
              <div className="aspect-[1/1] bg-gray-100">
                <img
                  src={`https://source.unsplash.com/random/800x800?branding,minimal,${item}`}
                  alt={`Project ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium">Project Title {item}</h3>
                <p className="text-muted-foreground text-sm mt-1">Brand Strategy / Visual Identity</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-start">
          <Button asChild variant="outline" className="rounded-none border-2 hover:bg-transparent hover:text-primary">
            <Link to="/portfolio" className="flex items-center gap-2">
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
