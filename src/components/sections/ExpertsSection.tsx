
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '../ui/card';

interface Expert {
  id: string;
  name: string;
  role: string;
  region: string;
  blurb: string;
  image?: string;
}

const experts: Expert[] = [
  {
    id: '1',
    name: 'Mariana R.',
    role: 'UX/UI Designer',
    region: 'Colombia',
    blurb: 'Intuitive, high-conversion digital design for brand-driven startups.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300',
  },
  {
    id: '2',
    name: 'Pedro T.',
    role: 'Brand Strategist',
    region: 'Brazil',
    blurb: 'Positioning and messaging expert for purpose-led companies.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=300',
  },
  {
    id: '3',
    name: 'Ana V.',
    role: 'Marketing Ops',
    region: 'Peru',
    blurb: 'CRM and automation queen — making the backend beautiful.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&h=300',
  },
];

const ExpertsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F4EF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-light mb-5 text-[#1A1A1A]">Meet the Experts Behind the Magic</h2>
          <p className="text-lg text-[#1A1A1A] font-light">
            We work with a curated collective of top-tier strategists, designers, developers, writers, and marketers from across Latin America.
            Each one vetted, trained, and ready to elevate your brand — all through one seamless point of contact: MI Media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <Card key={expert.id} className="border border-[#D6BFAF] hover:shadow-md transition-shadow bg-white">
              <div className="aspect-square overflow-hidden">
                {expert.image ? (
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#D6BFAF] flex items-center justify-center text-white text-4xl">
                    {expert.name.substring(0, 1)}
                  </div>
                )}
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-[#1A1A1A]">{expert.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#B14D4D] font-medium">{expert.role}</span>
                  <span className="text-sm text-[#1A1A1A] opacity-75">{expert.region}</span>
                </div>
                <p className="mt-4 text-[#1A1A1A]">{expert.blurb}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full mt-2 border-[#B14D4D] text-[#B14D4D] hover:bg-[#B14D4D] hover:text-white"
                  asChild
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Work with {expert.name.split(' ')[0]}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button asChild variant="outline" className="rounded-none border-2 border-[#B14D4D] text-[#B14D4D] hover:bg-[#B14D4D] hover:text-white">
            <Link to="/contact" className="flex items-center gap-2">
              Contact to Work with Our Experts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
