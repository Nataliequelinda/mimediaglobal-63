
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
    <div className={`relative py-20 md:py-32 ${backgroundImage ? 'bg-cover bg-center' : 'bg-gradient-to-br from-primary/10 to-secondary/5'}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay if there's a background image */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col max-w-3xl mx-auto ${alignmentClasses[alignment]} ${backgroundImage ? 'text-white' : ''}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-opacity-90">{subtitle}</p>
          {ctaText && (
            <Button size="lg" asChild className="group">
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
