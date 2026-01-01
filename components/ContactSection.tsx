export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-light to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-dark">Ready to Take Your Business to the Next Level?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you grow. Whether you need strategic advice, digital solutions, or marketing expertise, get in touch with our team today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 card-hover">
              <h3 className="text-2xl font-bold mb-8 text-dark">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1 text-sm font-medium uppercase tracking-wide">Call Us</p>
                    <a href="tel:+971508446760" className="text-xl font-semibold text-dark hover:text-primary transition-colors">
                      +971 50 844 6760
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1 text-sm font-medium uppercase tracking-wide">Mail Us</p>
                    <a href="mailto:info@ifcuae.com" className="text-xl font-semibold text-dark hover:text-primary transition-colors">
                      info@ifcuae.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform">
                    <i className="fa fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1 text-sm font-medium uppercase tracking-wide">Our Office</p>
                    <p className="text-xl font-semibold text-dark">Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Card */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-10 shadow-xl text-white card-hover">
              <h3 className="text-2xl font-bold mb-4">Schedule Your Discovery Call</h3>
              <p className="mb-8 text-white/90 leading-relaxed">
                Book a free consultation call with our team to discuss how we can help grow your business. Choose a time that works best for you.
              </p>
              <a
                href="https://calendly.com/og26/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-primary rounded-xl py-4 px-6 mb-4 hover:bg-white/95 transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl hover:scale-105"
              >
                <i className="fa fa-calendar-alt mr-2"></i>Book a Discovery Call
              </a>
              <div className="text-center">
                <p className="mb-4 text-white/80 text-sm">Or reach us directly:</p>
                <a
                  href="https://wa.me/+971543424272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-500 text-white rounded-xl py-3 px-6 hover:bg-green-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <i className="fab fa-whatsapp mr-2 text-xl"></i>Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
