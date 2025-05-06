
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="space-y-6">
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
    </section>
  );
};

export default About;
