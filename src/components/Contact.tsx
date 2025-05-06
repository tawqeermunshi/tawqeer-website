
import React from 'react';
import { Mail, Linkedin, ExternalLink, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div>
          <p className="text-lg mb-8">
            I'm always open to discussing product management opportunities, innovative 
            ideas, or potential collaborations. Feel free to reach out!
          </p>
          
          <div className="space-y-6 max-w-lg">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:tawqeermunshi@gmail.com" className="text-primary hover:underline">
                  tawqeermunshi@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/tawqeer-munshi/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                  linkedin.com/in/tawqeer-munshi
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Resume</h3>
                <a 
                  href="https://drive.google.com/file/d/1RmNeMvVSNzAC84gFggz0Vr9TgEObDly_/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  View Resume
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
