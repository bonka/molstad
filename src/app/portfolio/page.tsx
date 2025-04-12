"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Portfolio() {
  // Add scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <h1 className="headline-gradient-animated mb-6">Portfolio</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-700">
                Selected projects and case studies showcasing my work in business advisory, innovation, and storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EGGS (Sopra Steria) Case Study */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container items-center">
            <div className="col-span-12 md:col-span-6 reveal">
              <div className="text-sm font-semibold text-blue-600 mb-2">CASE STUDY</div>
              <h2 className="headline-gradient mb-6">Digital Innovation Strategy</h2>
              <p className="text-lg text-gray-700 mb-6">
                As Director of Innovation at EGGS (Sopra Steria), I led the development of a comprehensive digital innovation strategy for a major financial services client. The project involved:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Conducting in-depth market analysis and competitive benchmarking</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Facilitating innovation workshops with cross-functional teams</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Developing a three-year innovation roadmap with prioritized initiatives</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Creating an innovation governance model and implementation plan</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                The strategy resulted in the successful launch of three new digital products within 18 months and a 30% increase in digital customer engagement.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 relative reveal" style={{animationDelay: "0.2s"}}>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <Image 
                  src="/images/digital-innovation.jpg" 
                  alt="Digital Innovation Strategy" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NRK Case Study */}
      <section className="section bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid-container items-center">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1 relative reveal">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <Image 
                  src="/images/digital-transformation.jpg" 
                  alt="Digital Content Strategy" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2 reveal" style={{animationDelay: "0.2s"}}>
              <div className="text-sm font-semibold text-blue-600 mb-2">CASE STUDY</div>
              <h2 className="headline-gradient mb-6">Digital Content Strategy</h2>
              <p className="text-lg text-gray-700 mb-6">
                As Head of Digital Strategy at NRK (Norway's public broadcaster), I led the development and implementation of a comprehensive digital content strategy focused on reaching younger audiences across multiple platforms.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Conducting audience research and developing user personas</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Creating a multi-platform content distribution framework</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Developing a digital-first production workflow</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Implementing data-driven content optimization processes</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                The strategy resulted in a 45% increase in engagement among viewers aged 18-34 and established NRK as a digital leader in the Nordic public broadcasting sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Making Waves Case Study */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container items-center">
            <div className="col-span-12 md:col-span-6 reveal">
              <div className="text-sm font-semibold text-blue-600 mb-2">CASE STUDY</div>
              <h2 className="headline-gradient mb-6">Brand Storytelling Framework</h2>
              <p className="text-lg text-gray-700 mb-6">
                As a Senior Consultant at Making Waves, I developed a comprehensive brand storytelling framework for a global technology company undergoing a major repositioning in the market.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Conducting stakeholder interviews and brand perception research</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Developing a core brand narrative and messaging architecture</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Creating channel-specific storytelling guidelines</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Training internal teams on storytelling techniques and implementation</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                The framework was successfully implemented across all marketing channels, resulting in a 25% increase in brand awareness and a 40% improvement in message consistency across global markets.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 relative reveal" style={{animationDelay: "0.2s"}}>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <Image 
                  src="/images/brand-storytelling.jpg" 
                  alt="Brand Storytelling Framework" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Westerdals Case Study */}
      <section className="section bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid-container items-center">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1 relative reveal">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <Image 
                  src="/images/educational-program.jpg" 
                  alt="Educational Program Development" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2 reveal" style={{animationDelay: "0.2s"}}>
              <div className="text-sm font-semibold text-blue-600 mb-2">CASE STUDY</div>
              <h2 className="headline-gradient mb-6">Educational Program Development</h2>
              <p className="text-lg text-gray-700 mb-6">
                As Program Director at Westerdals Oslo ACT, I led the development and implementation of a new educational program focused on digital storytelling and innovation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Conducting industry research to identify key skills and competencies</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Developing a project-based curriculum with industry partnerships</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Creating innovative teaching methodologies and assessment frameworks</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Recruiting industry professionals as guest lecturers and mentors</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                The program became one of the most sought-after educational offerings at the institution, with a 90% employment rate for graduates within six months of completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-16">
              <h2 className="headline-gradient mb-6">Additional Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-700">
                A selection of other notable projects across various industries and disciplines.
              </p>
            </div>
          </div>
          
          <div className="grid-container gap-8">
            <div className="col-span-12 md:col-span-4 reveal">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Healthcare Innovation Workshop Series</h3>
                <p className="text-gray-700 mb-6">
                  Designed and facilitated a series of innovation workshops for a major healthcare provider, resulting in the development of three new patient-centered service concepts.
                </p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.2s"}}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sustainability Storytelling Campaign</h3>
                <p className="text-gray-700 mb-6">
                  Developed a multi-channel storytelling campaign for a renewable energy company, highlighting their sustainability initiatives and impact through compelling narratives.
                </p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.4s"}}>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 h-full">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Digital Transformation Roadmap</h3>
                <p className="text-gray-700 mb-6">
                  Created a comprehensive digital transformation roadmap for a traditional manufacturing company, enabling them to successfully navigate their digital journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how my expertise in business strategy, innovation, and storytelling can help your organization achieve its goals.
          </p>
          <Link href="/contact" className="btn bg-white text-blue-900 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
