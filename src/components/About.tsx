
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500"
              alt="Professional Headshot"
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
            />
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg">
              As a seasoned Product Manager with extensive experience in the tech industry, 
              I specialize in leading cross-functional teams to deliver innovative solutions 
              that drive business growth and enhance user experiences.
            </p>
            
            <p className="text-lg">
              My approach combines strong analytical skills with creative problem-solving, 
              allowing me to translate complex business requirements into clear product strategies. 
              I thrive in fast-paced environments where collaboration and adaptability are key.
            </p>
            
            <p className="text-lg">
              Throughout my career, I've successfully launched products that have positively 
              impacted millions of users while consistently meeting business objectives and 
              deadlines. I'm passionate about continuous learning and staying at the forefront 
              of product development methodologies and market trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
