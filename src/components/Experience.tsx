
import React from 'react';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Senior Product Manager",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Led the development and launch of the company's flagship product, resulting in a 30% increase in user engagement. Collaborated with engineering, design, and marketing teams to define product vision and roadmap. Conducted competitive analysis and user research to inform product decisions."
  },
  {
    role: "Product Manager",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Managed the product lifecycle from conception to launch for multiple B2B SaaS products. Implemented Agile methodologies to improve team productivity by 25%. Gathered and prioritized product requirements based on market research and stakeholder feedback."
  },
  {
    role: "Associate Product Manager",
    company: "Future Technologies",
    period: "2016 - 2018",
    description: "Assisted in the development of product roadmaps and feature prioritization. Conducted user testing and gathered feedback to improve product usability. Collaborated with engineering teams to ensure timely delivery of features."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-1">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
              </div>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{exp.period}</span>
              </div>
              
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
