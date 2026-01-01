import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import ServiceCard from '@/components/ServiceCard';
import BrandCard from '@/components/BrandCard';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import BaseImage from '@/components/BaseImage';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Features Section - Card Based */}
      <section className="section-padding bg-gradient-to-b from-white to-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4 text-dark">Our Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to help your business thrive in today's competitive marketplace
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <FeatureCard
                icon={<i className="fa fa-edit"></i>}
                title="Business Development & Consulting"
                description="Grow your business with targeted consulting services focused on market analysis, customer engagement, and sustainable sales strategies. We're here to help you thrive."
                delay="0.1s"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <FeatureCard
                icon={<i className="fa fa-sync"></i>}
                title="Marketing & Advertising"
                description="Maximize your brand's reach with customized marketing strategies across digital, print, radio, and more. We create campaigns that resonate and deliver measurable results."
                delay="0.3s"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <FeatureCard
                icon={<i className="fa fa-draw-polygon"></i>}
                title="Software Development & Digital Solutions"
                description="From custom applications to seamless digital tools, we help you optimize your business with advanced technology solutions that streamline operations and enhance user experience."
                delay="0.5s"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Card Design */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-light to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in-up">
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    Our Vision
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-dark leading-tight">
                    Building Tomorrow's Industry Leaders Today
                  </h2>
                  <p className="mb-8 text-gray-600 leading-relaxed text-lg">
                    Our vision is to support a new generation of entrepreneurs by providing innovative
                    solutions, expert guidance, and a network of resources that empower them to lead in
                    their industries. Through our strategic partnerships, we aim to push the boundaries of what's
                    possible, helping businesses scale confidently and sustainably.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center bg-primary text-white rounded-full py-4 px-8 hover:bg-primary-dark transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Let's Innovate Together
                    <i className="fa fa-arrow-right ml-2"></i>
                  </a>
                </div>
                <div className="animate-scale-in">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <BaseImage
                      src="/img/future.png"
                      alt="Future Vision"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section - Enhanced Cards */}
      <section className="section-padding bg-gradient-to-b from-light to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4 text-dark">Our Brands</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              IFC is the parent company of two innovative brands, each contributing to their respective industries with a focus on growth, innovation, and quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <BrandCard
                title="Fitbird"
                description="Fitbird is a comprehensive fitness platform offering personalized training programs, expert coaching, and advanced fitness technology. It helps users achieve their health and wellness goals while fostering a supportive fitness community."
                image="/img/fitbird.png"
                imageAlt="Fitbird"
                link="https://fitbirdapp.com/"
                delay="0.1s"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <BrandCard
                title="Medwings"
                description="Medwings connects you with verified clinics across the UAE, specializing in dental, cosmetic, and wellness treatments. The platform makes it easy to find trusted healthcare providers, ensuring high-quality care and a seamless user experience."
                image="/img/medicalwings.png"
                imageAlt="Medwings"
                link="https://medicalwings.net/"
                delay="0.3s"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Card Design */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-up">
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    About IFC
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-dark leading-tight">
                    Innovative Founders Consultancy: Your Partner in Growth
                  </h2>
                  <p className="mb-8 text-gray-600 leading-relaxed text-lg">
                    At IFC FZE, we specialize in helping startups and established businesses unlock their full
                    potential. From cutting-edge marketing strategies to bespoke business development and
                    custom software solutions, we offer the expertise you need to grow and thrive in today's
                    competitive marketplace. We guide our clients through every phase of their journey, ensuring
                    impactful results that pave the way for sustainable growth.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        <i className="fa fa-check"></i>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold mb-2 text-dark">Cutting-Edge Marketing Strategies</h5>
                        <p className="text-gray-600">
                          We craft innovative marketing strategies to help businesses unlock their full potential and stand out in the competitive marketplace.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        <i className="fa fa-check"></i>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold mb-2 text-dark">Bespoke Business Development</h5>
                        <p className="text-gray-600">
                          Our tailored business development solutions ensure impactful results that pave the way for sustainable growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center bg-primary text-white rounded-full py-4 px-8 hover:bg-primary-dark transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Learn More About Our Approach
                    <i className="fa fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-scale-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <BaseImage
                    src="/img/partner.png"
                    alt="Partners"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Overview Section - Enhanced Cards */}
      <section id="overview" className="section-padding bg-gradient-to-b from-light to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4 text-dark">How We Help</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed insights into our comprehensive service offerings
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <ServiceCard
              number="01"
              title="Business Development & Consulting"
              description="Grow your business with targeted consulting services focused on market analysis, customer engagement, and sustainable sales strategies. We're here to help you thrive."
              features={[
                "Market analysis",
                "Customer engagement",
                "Sustainable sales strategies"
              ]}
              image="/img/Business Development & Consulting.png"
              imageAlt="Business Development & Consulting"
              reverse={false}
            />
            
            <ServiceCard
              number="02"
              title="Marketing & Advertising"
              description="Maximize your brand's reach with customized marketing strategies across digital, print, radio, and more. We create campaigns that resonate and deliver measurable results."
              features={[
                "Customized marketing strategies",
                "Campaigns that resonate",
                "Measurable results"
              ]}
              image="/img/Marketing.png"
              imageAlt="Marketing & Advertising"
              reverse={true}
            />
            
            <ServiceCard
              number="03"
              title="Software Development & Digital Solutions"
              description="From custom applications to seamless digital tools, we help you optimize your business with advanced technology solutions that streamline operations and enhance user experience."
              features={[
                "Custom applications",
                "Seamless digital tools",
                "Streamlined operations"
              ]}
              image="/img/Software.png"
              imageAlt="Software Development"
              reverse={false}
            />
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
