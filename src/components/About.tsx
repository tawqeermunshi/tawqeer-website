
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500"
              alt="Professional Headshot"
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
            />
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg">
              I'm a Senior Product Manager at FlyFin AI with a strong background in building 
              AI-powered products that solve real user problems and drive business growth.
            </p>
            
            <p className="text-lg">
              My experience spans across leading tech startups where I've successfully led cross-functional 
              teams to develop innovative solutions in fintech, healthcare, and real estate sectors.
            </p>
            
            <p className="text-lg">
              With a foundation in Computer Science Engineering from R.V. College of Engineering, 
              I combine technical knowledge with product strategy to create meaningful user experiences 
              that deliver tangible business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
