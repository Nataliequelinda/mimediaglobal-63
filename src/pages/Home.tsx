
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Palette, BarChart, Code, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Hero
        title="Elevating Brands Through Strategic Design"
        subtitle="We craft meaningful brand experiences that connect with your audience and drive business growth."
        ctaText="Start a Project"
        ctaLink="/contact"
        alignment="left"
      />
      
      {/* Services Section */}
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

      {/* About Section */}
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

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-light mb-5">Client Experiences</h2>
            <p className="text-lg text-muted-foreground font-light">
              Partnerships built on trust, collaboration, and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Their strategic approach transformed how we connect with our audience. The insights they provided were invaluable to our rebrand."
              name="Sarah Johnson"
              role="CEO"
              company="Elevia Partners"
              image="https://randomuser.me/api/portraits/women/1.jpg"
            />
            <TestimonialCard
              quote="Working with this team elevated our brand presence in a competitive market. Their research-driven approach delivered exceptional results."
              name="Michael Thompson"
              role="Marketing Director"
              company="Horizon Tech"
              image="https://randomuser.me/api/portraits/men/2.jpg"
            />
            <TestimonialCard
              quote="Their ability to distill complex business challenges into clear strategic direction has been transformative for our company's growth."
              name="Emma Davis"
              role="Founder"
              company="Atelier Studios"
              image="https://randomuser.me/api/portraits/women/3.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Portfolio Preview */}
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

      {/* Clients Section - Minimal */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Trusted Partners</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-16">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <div className="h-6 md:h-8 flex items-center">
                  <img
                    src={`https://source.unsplash.com/random/200x80?logo,minimal&${item}`}
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
