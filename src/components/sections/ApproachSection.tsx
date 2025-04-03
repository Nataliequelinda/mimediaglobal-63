
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ApproachSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light mb-6">Our Approach</h2>
            <p className="text-lg mb-8 font-light">
              We believe in thoughtful, strategic brand development that begins with understanding 
              your business goals and audience needs. Our collaborative process ensures that every 
              element of your brand strategy serves a purpose and delivers measurable results.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="font-light">Strategic analysis of market positioning</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="font-light">Audience-centered design methodology</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="font-light">Iterative development with client collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="font-light">Performance measurement and optimization</span>
              </li>
            </ul>
            
            <Button asChild variant="outline" className="rounded-none border-2 hover:bg-transparent hover:text-primary">
              <Link to="/about">Our Methodology</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-white rounded-none overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-lg">
              <div className="text-4xl font-light mb-1">15+</div>
              <div className="text-sm font-light">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
