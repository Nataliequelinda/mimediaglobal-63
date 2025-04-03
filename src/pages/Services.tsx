
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Palette, Monitor, BarChart, Code, MessageSquare, Camera, Users, LineChart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to your business needs."
        backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984"
      />

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              From branding to digital marketing, we provide end-to-end solutions to help your business thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Palette className="h-6 w-6 text-primary" />}
              title="Branding & Identity"
              description="Create a distinctive brand identity that resonates with your audience and sets you apart from the competition."
              link="/services/branding"
            />
            <ServiceCard
              icon={<Monitor className="h-6 w-6 text-primary" />}
              title="Web Design"
              description="Beautiful, responsive websites designed to engage visitors, convey your message, and drive conversions."
              link="/services/web-design"
            />
            <ServiceCard
              icon={<BarChart className="h-6 w-6 text-primary" />}
              title="Digital Marketing"
              description="Strategic digital marketing campaigns that increase visibility, generate leads, and grow your business."
              link="/services/digital-marketing"
            />
            <ServiceCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title="Software Development"
              description="Custom software solutions built to solve your unique business challenges and improve operations."
              link="/services/software"
            />
            <ServiceCard
              icon={<MessageSquare className="h-6 w-6 text-primary" />}
              title="Content Creation"
              description="Engaging content that tells your brand's story, educates your audience, and drives engagement."
              link="/services/content"
            />
            <ServiceCard
              icon={<Camera className="h-6 w-6 text-primary" />}
              title="Photography & Video"
              description="Professional photography and video production to showcase your products and services."
              link="/services/multimedia"
            />
            <ServiceCard
              icon={<Users className="h-6 w-6 text-primary" />}
              title="Social Media"
              description="Social media management and strategy to build community and increase brand awareness."
              link="/services/social-media"
            />
            <ServiceCard
              icon={<LineChart className="h-6 w-6 text-primary" />}
              title="Analytics & Reporting"
              description="Data analysis and reporting to measure performance and make informed business decisions."
              link="/services/analytics"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              We follow a structured, collaborative approach to deliver successful projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Discovery</h3>
              <p>
                We begin by understanding your business, goals, target audience, and challenges 
                to create a strong foundation for your project.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Strategy</h3>
              <p>
                Based on our findings, we develop a comprehensive strategy tailored to your 
                specific needs and objectives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Execution</h3>
              <p>
                Our team brings the strategy to life with creative design, development, 
                content creation, and implementation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute -top-5 -left-5 h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Optimization</h3>
              <p>
                We continuously monitor performance, gather feedback, and make improvements 
                to ensure ongoing success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
                <AccordionContent>
                  Project timelines vary depending on scope and complexity. A standard website 
                  might take 4-8 weeks, while larger projects like custom software development 
                  can take several months. We'll provide a detailed timeline during our initial 
                  consultation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is your pricing structure?</AccordionTrigger>
                <AccordionContent>
                  We offer customized pricing based on project requirements. Some services 
                  can be provided on a package basis, while others are priced hourly or as 
                  a flat project fee. We're transparent about costs and will provide detailed 
                  quotes before beginning any work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you work with businesses of all sizes?</AccordionTrigger>
                <AccordionContent>
                  Yes, we work with businesses of all sizes, from startups to enterprise-level 
                  organizations. Our solutions are scalable and can be tailored to meet your 
                  specific needs and budget.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What industries do you specialize in?</AccordionTrigger>
                <AccordionContent>
                  We've worked with clients across various industries including healthcare, 
                  education, retail, finance, technology, and more. Our diverse experience 
                  allows us to bring fresh perspectives to any industry.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you provide ongoing support after project completion?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer ongoing support and maintenance services to ensure your digital 
                  assets continue to perform optimally. We can also provide training for your 
                  team to manage day-to-day updates.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Let's discuss how our services can help you reach your goals and grow your business.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
