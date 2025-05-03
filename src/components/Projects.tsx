
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: "AI Tax Assistant",
    description: "Built an AI-powered tax assistant to help users get quick answers to their tax queries, reducing CPA queries by 50% and increasing subscriptions by 10%.",
    categories: ["AI/ML", "Product Strategy", "User Experience"]
  },
  {
    title: "Expense Classification System",
    description: "Developed an AI system that auto-classifies user expenses with 96% accuracy, automating 40% of user work and increasing subscriptions by 12%.",
    categories: ["AI/ML", "Automation", "UX Design"]
  },
  {
    title: "Reimbursement Automation",
    description: "Automated bill reimbursements and redesigned the verification process, reducing turnaround time from 10 days to just 2 days.",
    categories: ["Process Optimization", "Automation", "User Experience"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Notable Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.categories.map((category, catIndex) => (
                    <span key={catIndex} className="bg-secondary px-2 py-1 rounded text-xs font-medium">
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group">
                  View Project Details 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
