
import React from 'react';
import Header from '@/components/Header';
import ProjectsList from '@/components/Projects';
import Footer from '@/components/Footer';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="py-20">
          <ProjectsList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
