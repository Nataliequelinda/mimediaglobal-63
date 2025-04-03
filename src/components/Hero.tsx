
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  alignment?: 'left' | 'center' | 'right';
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaText = "Get Started", 
  ctaLink = "/contact", 
  backgroundImage,
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`relative py-28 md:py-40 ${backgroundImage ? 'bg-cover bg-center' : 'bg-white'}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay if there's a background image */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col max-w-4xl mx-auto ${alignmentClasses[alignment]}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">{title}</h1>
          <p className="text-xl md:text-2xl mb-10 font-light opacity-90 max-w-2xl">{subtitle}</p>
          {ctaText && (
            <Button size="lg" variant="outline" asChild className="group rounded-none border-2 hover:bg-transparent hover:text-primary">
              <Link to={ctaLink} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
