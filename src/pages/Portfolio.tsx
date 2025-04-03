
import { useState } from 'react';
import Hero from '../components/Hero';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Brand Redesign",
    client: "TechStart Inc.",
    category: "branding",
    image: "https://images.unsplash.com/photo-1600775508114-5c30cf911a40"
  },
  {
    id: 2,
    title: "E-Commerce Website",
    client: "Fashion Forward",
    category: "web",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 3,
    title: "Mobile App Development",
    client: "Health Tracker",
    category: "app",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
  },
  {
    id: 4,
    title: "Social Media Campaign",
    client: "Organic Foods Co.",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
  },
  {
    id: 5,
    title: "Corporate Website",
    client: "Global Finance",
    category: "web",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  },
  {
    id: 6,
    title: "Product Photography",
    client: "Luxury Accessories",
    category: "multimedia",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    id: 7,
    title: "SEO Optimization",
    client: "Travel Agency",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1546768292-fb12f6c92568"
  },
  {
    id: 8,
    title: "Logo Design",
    client: "Green Energy",
    category: "branding",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91"
  },
  {
    id: 9,
    title: "CRM System",
    client: "Sales Pro",
    category: "app",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      <Hero
        title="Our Portfolio"
        subtitle="Explore our work and see how we've helped businesses transform their digital presence."
        backgroundImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
      />

      {/* Portfolio Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            <Button 
              variant={filter === 'web' ? 'default' : 'outline'} 
              onClick={() => setFilter('web')}
            >
              Web Design
            </Button>
            <Button 
              variant={filter === 'branding' ? 'default' : 'outline'} 
              onClick={() => setFilter('branding')}
            >
              Branding
            </Button>
            <Button 
              variant={filter === 'app' ? 'default' : 'outline'} 
              onClick={() => setFilter('app')}
            >
              App Development
            </Button>
            <Button 
              variant={filter === 'marketing' ? 'default' : 'outline'} 
              onClick={() => setFilter('marketing')}
            >
              Marketing
            </Button>
            <Button 
              variant={filter === 'multimedia' ? 'default' : 'outline'} 
              onClick={() => setFilter('multimedia')}
            >
              Multimedia
            </Button>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-[4/3] bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <p className="text-white/80 text-sm">Client: {project.client}</p>
                    <Button variant="secondary" size="sm" className="mt-4 w-fit">
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              Dive deeper into our work and explore how we've helped clients achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map(item => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1563986768494-4dee2763ff3f' : '1522542550496-7eedd2cd2548'}`}
                    alt={`Case Study ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {item === 1 ? 'Web Development' : 'Branding & Marketing'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {item === 1 ? 'Transforming Online Presence for TechStart' : 'Rebranding Success: The Fashion Forward Story'}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {item === 1 
                      ? 'How we increased conversion rates by 150% with a new website and digital strategy.' 
                      : 'How our comprehensive rebrand helped Fashion Forward increase market share by 35%.'}
                  </p>
                  <Button variant="outline">Read Case Study</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
