"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Services() {
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
              <h1 className="headline-gradient-animated mb-6">Services</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-700">
                Comprehensive business advisory and storytelling services designed to help organizations navigate complex challenges, develop compelling narratives, and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Advisory Services */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-16">
              <div className="text-sm font-semibold text-blue-600 mb-2">BUSINESS ADVISORY</div>
              <h2 className="headline-gradient mb-6">Strategic Services for Business Growth</h2>
              <p className="text-xl text-gray-700">
                Helping organizations develop effective strategies, navigate complex challenges, and seize new opportunities.
              </p>
            </div>
          </div>
          
          <div className="grid-container gap-12 mb-24">
            <div className="col-span-12 md:col-span-6 reveal">
              <h3 className="headline-gradient-blue text-3xl font-bold mb-6">Strategic Innovation</h3>
              <p className="text-lg text-gray-700 mb-6">
                I help organizations develop and implement innovation strategies that drive growth, improve competitiveness, and create sustainable value. My approach combines design thinking, business strategy, and practical implementation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Innovation strategy development</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Innovation capability building</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Innovation portfolio management</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Strategic innovation workshops</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative reveal" style={{animationDelay: "0.2s"}}>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <Image 
                  src="/images/strategic-innovation.jpg" 
                  alt="Strategic Innovation" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="grid-container gap-12 mb-24">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1 relative reveal">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <Image 
                  src="/images/digital-strategy.jpg" 
                  alt="Digital Strategy" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2 reveal" style={{animationDelay: "0.2s"}}>
              <div className="text-sm font-semibold text-blue-600 mb-2">BUSINESS ADVISORY</div>
              <h3 className="headline-gradient-blue text-3xl font-bold mb-6">Digital Strategy</h3>
              <p className="text-lg text-gray-700 mb-6">
                I help organizations develop comprehensive digital strategies that align with business goals, leverage emerging technologies, and create competitive advantage in an increasingly digital world.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Digital transformation roadmaps</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Digital capability development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid-container gap-12">
            <div className="col-span-12 md:col-span-6 reveal">
              <div className="text-sm font-semibold text-blue-600 mb-2">BUSINESS ADVISORY</div>
              <h3 className="headline-gradient-blue text-3xl font-bold mb-6">Business Development</h3>
              <p className="text-lg text-gray-700 mb-6">
                I help organizations identify and capitalize on growth opportunities, develop new business models, and create sustainable competitive advantage through strategic business development.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Market opportunity assessment</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Business model innovation</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Growth strategy development</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Strategic partnerships and alliances</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative reveal" style={{animationDelay: "0.2s"}}>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <Image 
                  src="/images/business-development.jpg" 
                  alt="Business Development" 
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Services */}
      <section className="section bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-16">
              <h2 className="headline-gradient mb-6">Storytelling Services</h2>
              <p className="text-xl text-gray-700">
                Crafting compelling narratives that connect with audiences, build brand identity, and effectively communicate complex ideas in engaging ways.
              </p>
            </div>
          </div>
          
          <div className="grid-container gap-8">
            <div className="col-span-12 md:col-span-4 reveal">
              <div className="bg-white rounded-lg p-8 shadow-xl h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="headline-gradient-purple text-2xl font-bold mb-4">Brand Storytelling</h3>
                <p className="text-gray-700 mb-6">
                  Developing authentic brand narratives that resonate with target audiences, differentiate from competitors, and build emotional connections with customers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Brand narrative development</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Brand messaging frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Brand story workshops</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.2s"}}>
              <div className="bg-white rounded-lg p-8 shadow-xl h-full">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="headline-gradient-purple text-2xl font-bold mb-4">Content Strategy</h3>
                <p className="text-gray-700 mb-6">
                  Creating comprehensive content strategies that align with business objectives, engage target audiences, and drive measurable results across multiple channels.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Content strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Editorial planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Content performance optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.4s"}}>
              <div className="bg-white rounded-lg p-8 shadow-xl h-full">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="headline-gradient-purple text-2xl font-bold mb-4">Presentation Coaching</h3>
                <p className="text-gray-700 mb-6">
                  Helping executives and teams develop and deliver compelling presentations that engage audiences, communicate key messages effectively, and drive desired outcomes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Presentation structure and flow</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Storytelling techniques</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Delivery and presence coaching</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-16">
              <h2 className="headline-gradient mb-6">My Approach</h2>
              <p className="text-xl text-gray-700">
                A collaborative, human-centered approach that combines strategic thinking, creative problem-solving, and practical implementation.
              </p>
            </div>
          </div>
          
          <div className="grid-container gap-8">
            <div className="col-span-12 md:col-span-3 reveal">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 pt-12">
                  <h3 className="headline-gradient-blue text-2xl font-bold mb-4">Discover</h3>
                  <p className="text-gray-700">
                    Understanding your business, challenges, goals, and opportunities through in-depth research and stakeholder interviews.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-3 reveal" style={{animationDelay: "0.2s"}}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 pt-12">
                  <h3 className="headline-gradient-purple text-2xl font-bold mb-4">Define</h3>
                  <p className="text-gray-700">
                    Defining the core challenges, opportunities, and strategic objectives based on insights gathered during the discovery phase.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-3 reveal" style={{animationDelay: "0.4s"}}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 pt-12">
                  <h3 className="headline-gradient-pink text-2xl font-bold mb-4">Develop</h3>
                  <p className="text-gray-700">
                    Collaboratively developing strategies, solutions, and narratives that address the defined challenges and opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-3 reveal" style={{animationDelay: "0.6s"}}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg p-8 pt-12">
                  <h3 className="headline-gradient-pink text-2xl font-bold mb-4">Deliver</h3>
                  <p className="text-gray-700">
                    Implementing solutions, measuring results, and iterating based on feedback and performance data to ensure sustainable impact.
                  </p>
                </div>
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
