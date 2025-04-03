
import { useState } from 'react';
import Hero from '../components/Hero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Web Design Trends to Watch in 2025",
    excerpt: "Discover the latest web design trends that are shaping the digital landscape this year.",
    author: "Emily Johnson",
    date: "April 1, 2025",
    category: "Design",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Social Media Marketing",
    excerpt: "Learn how to create a successful social media strategy that drives engagement and conversions.",
    author: "Michael Lee",
    date: "March 28, 2025",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
  },
  {
    id: 3,
    title: "How to Build a Strong Brand Identity",
    excerpt: "Tips and strategies for creating a memorable brand that resonates with your audience.",
    author: "Sarah Davis",
    date: "March 20, 2025",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91"
  },
  {
    id: 4,
    title: "The Importance of SEO in Your Digital Strategy",
    excerpt: "Why search engine optimization should be a key component of your overall marketing plan.",
    author: "David Wilson",
    date: "March 15, 2025",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1546768292-fb12f6c92568"
  },
  {
    id: 5,
    title: "Mobile App Development: Native vs. Cross-Platform",
    excerpt: "Comparing the pros and cons of different mobile app development approaches.",
    author: "Lisa Brown",
    date: "March 10, 2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
  },
  {
    id: 6,
    title: "Creating User-Friendly Website Navigation",
    excerpt: "Best practices for designing intuitive navigation systems that enhance user experience.",
    author: "John Smith",
    date: "March 5, 2025",
    category: "UX",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166"
  },
  {
    id: 7,
    title: "The Future of E-Commerce: Trends and Predictions",
    excerpt: "Exploring upcoming e-commerce technologies and strategies for staying ahead of the curve.",
    author: "Jennifer White",
    date: "February 28, 2025",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
  },
  {
    id: 8,
    title: "Effective Content Marketing Strategies",
    excerpt: "How to create valuable content that attracts and engages your target audience.",
    author: "Robert Taylor",
    date: "February 20, 2025",
    category: "Content",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
  },
  {
    id: 9,
    title: "The Role of AI in Modern Web Development",
    excerpt: "Exploring how artificial intelligence is changing the way we build and interact with websites.",
    author: "Emily Johnson",
    date: "February 15, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === '' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div>
      <Hero
        title="Our Blog"
        subtitle="Insights, tips, and updates from the world of digital media and marketing."
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />

      {/* Search and Filter */}
      <section className="py-10 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="w-full md:w-1/3 relative">
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button 
                variant={categoryFilter === '' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setCategoryFilter('')}
              >
                All
              </Button>
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant={categoryFilter === category ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setCategoryFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="group">
                  <Link to={`/blog/${post.id}`}>
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <div className="mb-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{post.author}</span>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button onClick={() => {setSearchTerm(''); setCategoryFilter('')}}>
                Reset Filters
              </Button>
            </div>
          )}
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8 opacity-90">
              Stay updated with our latest insights, trends, and news delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
