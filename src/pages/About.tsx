
import Hero from '../components/Hero';
import { Users, Award, Coffee, CheckCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  return (
    <div>
      <Hero
        title="About Mi Media Global"
        subtitle="We're a team of creative minds dedicated to delivering excellence in digital solutions."
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
      />

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                Mi Media Global was founded in 2010 with a simple mission: to help businesses
                succeed in the digital world. What started as a small web design studio has
                evolved into a full-service digital agency with a global reach.
              </p>
              <p className="text-lg mb-6">
                Over the years, we've partnered with businesses of all sizes across various
                industries, helping them transform their digital presence and achieve their goals.
                Our approach combines creativity, technology, and strategy to deliver solutions
                that drive real results.
              </p>
              <p className="text-lg">
                Today, we're proud to be recognized as a leading digital agency, known for our
                innovative thinking, exceptional design, and commitment to client success.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground">
              What drives us and shapes the way we work every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To empower businesses with digital solutions that help them connect with their
                audience, stand out from the competition, and achieve sustainable growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the most trusted digital partner for businesses worldwide, known for our
                innovation, quality, and results-driven approach.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 p-3 bg-primary/10 rounded-md w-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p>
                We strive for excellence in everything we do, from design and development to
                client communication and support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 p-3 bg-primary/10 rounded-md w-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                We embrace new technologies and approaches to deliver innovative solutions
                that give our clients a competitive edge.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 p-3 bg-primary/10 rounded-md w-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p>
                We build relationships based on trust, transparency, and respect, always
                putting our clients' best interests first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-xl opacity-90">Years of Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-xl opacity-90">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-xl opacity-90">Team Members</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-xl opacity-90">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The talented people behind our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Emily Johnson",
                role: "Creative Director",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "David Wilson",
                role: "Technical Lead",
                image: "https://randomuser.me/api/portraits/men/45.jpg"
              },
              {
                name: "Lisa Brown",
                role: "Marketing Director",
                image: "https://randomuser.me/api/portraits/women/67.jpg"
              },
              {
                name: "Michael Lee",
                role: "UX Designer",
                image: "https://randomuser.me/api/portraits/men/22.jpg"
              },
              {
                name: "Sarah Davis",
                role: "Content Strategist",
                image: "https://randomuser.me/api/portraits/women/28.jpg"
              },
              {
                name: "Robert Taylor",
                role: "Developer",
                image: "https://randomuser.me/api/portraits/men/36.jpg"
              },
              {
                name: "Jennifer White",
                role: "Project Manager",
                image: "https://randomuser.me/api/portraits/women/15.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
