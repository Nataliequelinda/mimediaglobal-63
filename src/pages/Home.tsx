
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Palette, BarChart, Code, CheckCircle, Users } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero
        title="Transform Your Digital Presence"
        subtitle="We help brands grow with creative design, innovative technology, and strategic marketing."
        ctaText="Get Started"
        ctaLink="/contact"
      />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              We offer comprehensive solutions to help your business grow in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Palette className="h-6 w-6 text-primary" />}
              title="Branding & Identity"
              description="We build memorable brand identities that connect with your audience and stand out in the market."
              link="/services/branding"
            />
            <ServiceCard
              icon={<Monitor className="h-6 w-6 text-primary" />}
              title="Web Design"
              description="Beautiful, functional websites designed to convert visitors and provide exceptional user experiences."
              link="/services/web-design"
            />
            <ServiceCard
              icon={<BarChart className="h-6 w-6 text-primary" />}
              title="Digital Marketing"
              description="Data-driven strategies that increase brand awareness and drive measurable results."
              link="/services/digital-marketing"
            />
            <ServiceCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title="Software Development"
              description="Custom software solutions built to solve your unique business challenges."
              link="/services/software"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Mi Media Global</h2>
              <p className="text-lg mb-6">
                We are a full-service digital agency dedicated to helping businesses grow. 
                With our talented team of creatives, developers, and strategists, we deliver 
                exceptional results that exceed expectations.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>10+ years of industry experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Award-winning creative team</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>End-to-end digital solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Dedicated support and maintenance</span>
                </li>
              </ul>
              
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Team working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold mb-1">200+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              We take pride in our work and the relationships we build with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Mi Media Global transformed our online presence. Their team was professional, creative, and delivered beyond our expectations."
              name="Sarah Johnson"
              role="CEO"
              company="TechStart"
              image="https://randomuser.me/api/portraits/women/1.jpg"
            />
            <TestimonialCard
              quote="Working with them was a seamless experience. They understood our vision and brought it to life with stunning design and functionality."
              name="Michael Thompson"
              role="Marketing Director"
              company="Innovate Inc."
              image="https://randomuser.me/api/portraits/men/2.jpg"
            />
            <TestimonialCard
              quote="Their marketing strategies have significantly improved our conversion rates. Highly recommend their services to anyone looking to grow their business."
              name="Emma Davis"
              role="Owner"
              company="Bloom Boutique"
              image="https://randomuser.me/api/portraits/women/3.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your business goals with our comprehensive digital solutions.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-lg text-muted-foreground">
              Check out some of our latest projects and see what we can do for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] bg-gray-200">
                  <img
                    src={`https://source.unsplash.com/random/600x450?website,design&${item}`}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl">Project Title {item}</h3>
                  <p className="text-white/80 text-sm">Web Design / Branding</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/portfolio" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="grayscale hover:grayscale-0 transition-all">
                <div className="h-12 flex items-center">
                  <img
                    src={`https://source.unsplash.com/random/200x80?logo&${item}`}
                    alt={`Client ${item}`}
                    className="h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
