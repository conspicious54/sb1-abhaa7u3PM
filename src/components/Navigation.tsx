import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStrategyClick = () => {
    navigate('/free-audit');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`px-6 py-4 md:px-12 flex items-center justify-between bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'border-b border-gray-100'
    }`}>
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="https://i.imgur.com/agbo6tv.png" 
          alt="Primemate Logo" 
          className="h-12 w-auto"
        />
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-black transition-colors">Services</button>
        <button onClick={() => scrollToSection('team')} className="text-gray-600 hover:text-black transition-colors">Team</button>
        <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-black transition-colors">Results</button>
        <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <button 
        onClick={handleStrategyClick}
        className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform hover:shadow-lg group"
      >
        Get A Free Strategy Session
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden py-4 px-6 border-t border-gray-100">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-black transition-colors py-2">Services</button>
            <button onClick={() => scrollToSection('team')} className="text-left text-gray-600 hover:text-black transition-colors py-2">Team</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-600 hover:text-black transition-colors py-2">Results</button>
            <Link to="/contact" className="text-gray-600 hover:text-black transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <button 
              onClick={handleStrategyClick}
              className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors w-full flex items-center justify-center gap-2"
            >
              Get A Free Strategy Session
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}