
import TestimonialCard from '../TestimonialCard';

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
