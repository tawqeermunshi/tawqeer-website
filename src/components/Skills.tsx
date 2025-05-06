
import React from 'react';

const skillCategories = [
  {
    title: "Product Management",
    skills: ["Product Strategy", "Roadmap Planning", "User Research", "Requirement Specification (PRDs)", "Feature Prioritization", "Usability Testing", "Stakeholder Management", "Go-to-Market Strategy", "Cross-functional Leadership"]
  },
  {
    title: "Technical Skills",
    skills: ["SQL", "Figma", "Amplitude", "Postman", "Retool", "Excel", "Jira/Asana", "WebEngage"]
  },
  {
    title: "Business",
    skills: ["Business Strategy", "Market/Competitor Analysis", "Data Analysis", "A/B Testing", "User Retention", "AI Implementation", "Revenue Growth"]
  },
  {
    title: "Achievements",
    skills: ["Vice President, Entrepreneurship Cell", "Lead Host, Public Speaking", "Gold Medalist, Cricket", "Event Operations Management"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Core Competencies</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
