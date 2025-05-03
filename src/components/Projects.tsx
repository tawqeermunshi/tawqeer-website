
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: "E-commerce Platform Redesign",
    description: "Led a complete redesign of the company's e-commerce platform, resulting in a 40% increase in conversion rate and 25% reduction in cart abandonment.",
    categories: ["UX Research", "Product Strategy", "Agile"]
  },
  {
    title: "Mobile App Development",
    description: "Managed the development of a mobile application that streamlined customer service processes, reducing response times by 50% and increasing customer satisfaction scores by 35%.",
    categories: ["Mobile", "Customer Experience", "Analytics"]
  },
  {
    title: "Enterprise Dashboard Solution",
    description: "Created a comprehensive dashboard solution for enterprise clients, providing real-time insights into business metrics and improving decision-making processes.",
    categories: ["B2B", "Data Visualization", "Enterprise"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
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
