
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "py-6"
    )}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-display font-bold">Tawqeer Munshi</span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="font-medium text-sm hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="fixed inset-0 bg-background pt-20 px-4 z-40 md:hidden">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
