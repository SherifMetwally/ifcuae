'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? '/img/logo.png' : '/img/logo-white.png'}
              alt="IFC Logo"
              width={120}
              height={100}
              className="transition-all duration-300"
              style={{ maxHeight: isScrolled ? '60px' : '100px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              About
            </a>
            <a
              href="#overview"
              onClick={(e) => handleNavClick(e, '#overview')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`transition-colors font-medium ${
                isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden focus:outline-none ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 space-y-3 ${
            isScrolled ? 'bg-white border-t border-gray-200' : ''
          }`}>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`block hover:text-primary transition-colors font-medium py-2 ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className={`block hover:text-primary transition-colors font-medium py-2 ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              About
            </a>
            <a
              href="#overview"
              onClick={(e) => handleNavClick(e, '#overview')}
              className={`block hover:text-primary transition-colors font-medium py-2 ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`block hover:text-primary transition-colors font-medium py-2 ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

