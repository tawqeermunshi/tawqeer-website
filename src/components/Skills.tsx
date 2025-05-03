
import React from 'react';

const skillCategories = [
  {
    title: "Product Management",
    skills: ["Product Strategy", "Roadmap Planning", "User Stories", "Market Research", "Competitive Analysis", "Product Lifecycle", "A/B Testing", "Feature Prioritization", "User Interviews"]
  },
  {
    title: "Technical",
    skills: ["Agile Methodologies", "Scrum", "JIRA", "Confluence", "Data Analysis", "SQL", "API Design", "Wireframing", "Prototyping"]
  },
  {
    title: "Business",
    skills: ["Stakeholder Management", "Business Case Development", "Revenue Modeling", "Go-to-Market Strategy", "KPI Definition", "OKRs", "Project Management"]
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Cross-functional Collaboration", "Communication", "Presentation", "Negotiation", "Problem Solving", "Customer Empathy"]
  }
];

const Skills = () => {
  return (
    <section id="skills">
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
