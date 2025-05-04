
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div className="space-y-8 max-w-xl">
          <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            Tawqeer <span className="text-primary">Munshi</span>
          </h1>
          
          <p className="fade-in animate-delay-200 text-lg md:text-xl text-muted-foreground">
            Senior Product Manager experienced in AI-driven solutions, driving user experience improvements
            and business growth through strategic product development.
          </p>
          
          <div className="fade-in animate-delay-400 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="#experience">
                View Experience
              </a>
            </Button>
          </div>
        </div>
        
        <div className="relative fade-in animate-delay-600 hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full"></div>
          <img 
            src="/lovable-uploads/a641d1c3-893b-4e8a-9797-edb9487136d4.png"
            alt="Tawqeer Munshi"
            className="relative z-10 rounded-lg shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
