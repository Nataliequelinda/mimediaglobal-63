
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Reach out to us for any questions or inquiries. We'd love to hear from you!"
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
      />

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're here to help! Contact us through any of the channels below.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Main Street<br />
                      City, State 12345<br />
                      Country
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: +1 (234) 567-8900<br />
                      Support: +1 (234) 567-8901
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      General: info@mimediaglobal.com<br />
                      Support: support@mimediaglobal.com
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714940561537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1648482801994!5m2!1sen!2sca"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-xl mb-3">How quickly do you respond to inquiries?</h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24 business hours. For urgent matters, 
                please call our main office number.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Do you work with international clients?</h3>
              <p className="text-muted-foreground">
                Yes, we work with clients worldwide. We use various communication tools to ensure 
                smooth collaboration across different time zones.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">What information should I include in my inquiry?</h3>
              <p className="text-muted-foreground">
                It helps if you include details about your project, timeline, budget range, and 
                specific goals or requirements. This allows us to provide a more accurate response.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Can we meet in person before starting a project?</h3>
              <p className="text-muted-foreground">
                Absolutely! We're happy to schedule in-person meetings for local clients or video 
                calls for those outside our area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
