'use client';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-dark text-gray-300 mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h5 className="text-white text-xl font-bold mb-6">Address</h5>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary transition-colors">
                  <i className="fa fa-map-marker-alt text-primary"></i>
                </div>
                <p className="text-gray-400">Dubai, UAE</p>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary transition-colors">
                  <i className="fa fa-phone-alt text-primary"></i>
                </div>
                <a href="tel:+971508446760" className="text-gray-400 hover:text-primary transition-colors">
                  +971 50 844 6760
                </a>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary transition-colors">
                  <i className="fa fa-envelope text-primary"></i>
                </div>
                <a href="mailto:info@ifcuae.com" className="text-gray-400 hover:text-primary transition-colors">
                  info@ifcuae.com
                </a>
              </div>
            </div>
            <div className="flex space-x-3 mt-8">
              <a href="" className="w-12 h-12 border border-gray-600 rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="w-12 h-12 border border-gray-600 rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="w-12 h-12 border border-gray-600 rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="w-12 h-12 border border-gray-600 rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white text-xl font-bold mb-6">Quick Links</h5>
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group"
              >
                <i className="fa fa-chevron-right text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                About Us
              </a>
              <a
                href="#overview"
                onClick={(e) => handleNavClick(e, '#overview')}
                className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group"
              >
                <i className="fa fa-chevron-right text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                Services
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group"
              >
                <i className="fa fa-chevron-right text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                Contact
              </a>
              <a href="" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                <i className="fa fa-chevron-right text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                Privacy Policy
              </a>
              <a href="" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                <i className="fa fa-chevron-right text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} IFC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-400 hover:text-primary transition-colors">Home</a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
