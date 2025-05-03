
import React from 'react';
import { Calendar, Building } from 'lucide-react';

const experiences = [
  {
    role: "Senior Product Manager",
    company: "FlyFin AI (Backed by Accel)",
    period: "Jan 2023 - Present",
    description: "Led cross-functional teams to build AI-driven features for tax and expense management app. Built AI tax assistant reducing CPA queries by 50%, increasing subscriptions by 10%. Implemented AI automation for expense classification with 96% accuracy, increasing subscriptions by 12%. Launched referral program and improved user retention through strategic initiatives."
  },
  {
    role: "Associate Product Manager",
    company: "CLINIKK (Backed by Massmutual Ventures)",
    period: "Nov 2021 - Jan 2023",
    description: "Automated bill reimbursements reducing turnaround time from 10 days to 2 days. Designed WhatsApp onboarding module increasing adoption by 23% and retention by 10%. Built efficient ticketing module for customer experience team, reducing TAT per ticket by 40%. Conducted user interviews to identify pain points and shape product roadmap."
  },
  {
    role: "Founder",
    company: "MILKIYAT",
    period: "Feb 2020 - Oct 2021",
    description: "Led a team of 8 to build J&K's first tech-enabled real-estate platform, successfully onboarding 1500+ properties and 100+ agents. Generated $10k in revenue with over 10,000 active users and a 4.8 rating on Play Store. Responsible for product conceptualization, operational processes, and marketing campaigns."
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
