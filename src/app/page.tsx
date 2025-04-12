"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
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
      <section className="hero-section bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid-container items-center">
            <div className="col-span-12 md:col-span-6 hero-content">
              <h1 className="mb-2">
                <span className="text-gray-800">Bjørn Molstad</span>
              </h1>
              <h2 className="headline-gradient-animated text-5xl md:text-6xl lg:text-7xl mb-6">
                Business<br />Advisor &<br />Storyteller
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Helping businesses navigate the intersection of design, brand, technology, and business development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="btn btn-primary">
                  Explore Services
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="portrait-container">
                <Image 
                  src="/images/bjorn-portrait.jpg" 
                  alt="Bjørn Molstad - Business Advisor and Storyteller" 
                  width={600}
                  height={800}
                  priority
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container gap-8">
            <div className="col-span-12 md:col-span-4 reveal">
              <div className="expertise-card">
                <div className="expertise-icon bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="headline-gradient-blue text-2xl font-bold mb-4">Digital Strategy</h3>
                <p className="text-gray-700 mb-6">
                  Developing comprehensive digital strategies that align with business goals and market opportunities, leveraging the latest technologies and trends.
                </p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.2s"}}>
              <div className="expertise-card">
                <div className="expertise-icon bg-purple-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="headline-gradient-purple text-2xl font-bold mb-4">Storytelling</h3>
                <p className="text-gray-700 mb-6">
                  Crafting compelling narratives that connect with audiences, build brand identity, and effectively communicate complex ideas in engaging ways.
                </p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.4s"}}>
              <div className="expertise-card">
                <div className="expertise-icon bg-pink-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="headline-gradient-pink text-2xl font-bold mb-4">Innovation & Development</h3>
                <p className="text-gray-700 mb-6">
                  Guiding organizations through innovation processes, from concept development to implementation, with a focus on sustainable growth and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-6 reveal">
              <h2 className="headline-gradient text-4xl font-bold mb-6">Extensive Experience in Business & Media</h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 15 years of experience spanning strategic advisory, innovation leadership, media production, and digital development, I bring a unique perspective to every project.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Currently serving as Director of Innovation at EGGS (Sopra Steria), I help organizations navigate complex challenges at the intersection of design, technology, and business strategy.
              </p>
              <Link href="/about" className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors">
                Learn more about my background →
              </Link>
            </div>
            <div className="col-span-12 md:col-span-6 reveal" style={{animationDelay: "0.2s"}}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">EGGS (Sopra Steria)</h3>
                  <p className="text-gray-600">Director of Innovation</p>
                  <p className="text-gray-600 text-sm">2019 - Present</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">NRK</h3>
                  <p className="text-gray-600">Head of Digital Strategy</p>
                  <p className="text-gray-600 text-sm">2015 - 2019</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Making Waves</h3>
                  <p className="text-gray-600">Senior Consultant</p>
                  <p className="text-gray-600 text-sm">2012 - 2015</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Westerdals Oslo ACT</h3>
                  <p className="text-gray-600">Program Director</p>
                  <p className="text-gray-600 text-sm">2009 - 2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container gap-12">
            <div className="col-span-12 md:col-span-6 reveal">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 h-full">
                <h3 className="headline-gradient-blue text-3xl font-bold mb-6">Business Advisory</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Strategic guidance for businesses navigating digital transformation, innovation challenges, and market positioning. Leveraging expertise in platform economy, service design, and business development.
                </p>
                <Link href="/services" className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 reveal" style={{animationDelay: "0.2s"}}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 h-full">
                <h3 className="headline-gradient-purple text-3xl font-bold mb-6">Storytelling & Content</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Developing compelling narratives and content strategies that connect with audiences. Experience from documentary production, brand storytelling, and educational content development.
                </p>
                <Link href="/services" className="text-purple-600 font-semibold flex items-center hover:text-purple-800 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="col-span-12 text-center reveal" style={{animationDelay: "0.4s"}}>
              <Link href="/services" className="btn btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's collaborate to develop strategies and stories that drive innovation and growth for your organization.
          </p>
          <Link href="/contact" className="btn bg-white text-blue-900 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
