"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function About() {
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
              <h1 className="headline-gradient-animated mb-6">About Me</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-700">
                Business advisor and storyteller with over 15 years of experience helping organizations navigate complex challenges at the intersection of design, technology, and business strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container items-center">
            <div className="col-span-12 md:col-span-6 reveal">
              <h2 className="headline-gradient mb-6">Professional Biography</h2>
              <p className="text-lg text-gray-700 mb-6">
                I'm Bjørn Molstad, a business advisor and storyteller with a passion for helping organizations navigate complex challenges and seize new opportunities. With over 15 years of experience spanning strategic advisory, innovation leadership, media production, and digital development, I bring a unique perspective to every project.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Currently serving as Director of Innovation at EGGS (Sopra Steria), I help organizations navigate complex challenges at the intersection of design, technology, and business strategy. My approach combines strategic thinking, creative problem-solving, and practical implementation to deliver tangible results.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Throughout my career, I've worked with a diverse range of clients across multiple industries, including media, technology, finance, healthcare, and the public sector. This breadth of experience allows me to bring cross-industry insights and best practices to every engagement.
              </p>
              <p className="text-lg text-gray-700">
                My unique combination of business acumen, storytelling expertise, and innovation experience enables me to help organizations develop compelling strategies and narratives that drive growth, engagement, and impact.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 reveal" style={{animationDelay: "0.2s"}}>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative">
                  <Image 
                    src="/images/bjorn-portrait.jpg" 
                    alt="Bjørn Molstad - Business Advisor and Storyteller" 
                    width={600}
                    height={800}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-16">
              <h2 className="headline-gradient mb-6">Professional Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-700">
                A diverse career spanning strategic advisory, innovation leadership, media production, and digital development.
              </p>
            </div>
          </div>
          
          <div className="grid-container gap-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 reveal">
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">EGGS (Sopra Steria)</h3>
                    <p className="text-gray-600">Director of Innovation</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Leading innovation initiatives and strategic advisory services for enterprise clients across multiple industries. Developing innovation frameworks, facilitating workshops, and creating strategic roadmaps.
                </p>
                <p className="text-gray-600 italic">2019 - Present</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 lg:col-span-4 reveal" style={{animationDelay: "0.2s"}}>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">NRK</h3>
                    <p className="text-gray-600">Head of Digital Strategy</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Led the development and implementation of digital strategies focused on audience engagement, content distribution, and platform development for Norway's public broadcaster.
                </p>
                <p className="text-gray-600 italic">2015 - 2019</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 lg:col-span-4 reveal" style={{animationDelay: "0.4s"}}>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Making Waves</h3>
                    <p className="text-gray-600">Senior Consultant</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Advised clients on digital transformation, brand strategy, and user experience design across multiple industries. Led cross-functional teams in delivering complex digital projects.
                </p>
                <p className="text-gray-600 italic">2012 - 2015</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 lg:col-span-4 reveal" style={{animationDelay: "0.6s"}}>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Westerdals Oslo ACT</h3>
                    <p className="text-gray-600">Program Director</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Directed educational programs focused on digital media, storytelling, and innovation. Developed curriculum, taught courses, and mentored students in creative and strategic disciplines.
                </p>
                <p className="text-gray-600 italic">2009 - 2012</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 lg:col-span-4 reveal" style={{animationDelay: "0.8s"}}>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Freelance</h3>
                    <p className="text-gray-600">Documentary Producer</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Produced documentary films and multimedia content for various clients, including broadcasters, educational institutions, and non-profit organizations. Specialized in storytelling for impact.
                </p>
                <p className="text-gray-600 italic">2005 - 2009</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 lg:col-span-4 reveal" style={{animationDelay: "1s"}}>
              <div className="bg-white rounded-lg p-8 shadow-lg h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Early Career</h3>
                    <p className="text-gray-600">Various Roles</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Began career in media production and digital development, working on a variety of projects that laid the foundation for my multidisciplinary approach to business advisory and storytelling.
                </p>
                <p className="text-gray-600 italic">2000 - 2005</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-16">
              <h2 className="headline-gradient mb-6">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-gray-700">
                A unique combination of business acumen, storytelling expertise, and innovation experience.
              </p>
            </div>
          </div>
          
          <div className="grid-container gap-8">
            <div className="col-span-12 md:col-span-4 reveal">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Strategic Thinking</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Business Strategy Development</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Digital Transformation</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Market Analysis</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Business Model Innovation</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Strategic Planning</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.2s"}}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Storytelling & Communication</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Brand Storytelling</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Content Strategy</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Presentation Design & Delivery</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Narrative Development</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Workshop Facilitation</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.4s"}}>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Innovation & Leadership</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Innovation Management</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Design Thinking</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Team Leadership</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Change Management</p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Project Management</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid-container">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center mb-16">
              <h2 className="text-white mb-6">Education & Training</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 mx-auto mt-4 mb-8"></div>
              <p className="text-xl text-white/80">
                Continuous learning and development across business, design, and storytelling disciplines.
              </p>
            </div>
          </div>
          
          <div className="grid-container gap-8">
            <div className="col-span-12 md:col-span-6 reveal">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Master of Business Administration (MBA)</h3>
                <p className="text-white/80 mb-2">Norwegian Business School (BI)</p>
                <p className="text-white/80 mb-6">Focus on Strategic Management and Innovation</p>
                <p className="text-white/60 italic">2010 - 2012</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 reveal" style={{animationDelay: "0.2s"}}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Bachelor of Arts in Media Production</h3>
                <p className="text-white/80 mb-2">Oslo Metropolitan University</p>
                <p className="text-white/80 mb-6">Focus on Digital Storytelling and Production</p>
                <p className="text-white/60 italic">2000 - 2003</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.4s"}}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Design Thinking Certification</h3>
                <p className="text-white/80 mb-2">IDEO</p>
                <p className="text-white/60 italic">2018</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.6s"}}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Strategic Leadership Program</h3>
                <p className="text-white/80 mb-2">IMD Business School</p>
                <p className="text-white/60 italic">2016</p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 reveal" style={{animationDelay: "0.8s"}}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Digital Transformation Certification</h3>
                <p className="text-white/80 mb-2">MIT Sloan School of Management</p>
                <p className="text-white/60 italic">2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid-container items-center">
            <div className="col-span-12 md:col-span-6 reveal">
              <h2 className="headline-gradient mb-6">My Approach & Philosophy</h2>
              <p className="text-lg text-gray-700 mb-6">
                I believe that the most effective strategies and stories emerge at the intersection of analytical thinking and creative exploration. My approach combines rigorous analysis with creative problem-solving to develop solutions that are both strategically sound and emotionally resonant.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I'm passionate about helping organizations navigate complexity and uncertainty by developing clear strategies and compelling narratives that align teams, engage stakeholders, and drive meaningful results.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My work is guided by several core principles:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700"><span className="font-semibold">Human-centered:</span> Putting people at the center of every strategy and story</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700"><span className="font-semibold">Collaborative:</span> Working closely with clients as partners in the process</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700"><span className="font-semibold">Iterative:</span> Embracing experimentation, learning, and continuous improvement</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700"><span className="font-semibold">Holistic:</span> Considering the full ecosystem and context of every challenge</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700"><span className="font-semibold">Impact-driven:</span> Focusing on creating tangible, measurable value</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 reveal" style={{animationDelay: "0.2s"}}>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">What Clients Say</h3>
                  <div className="space-y-8">
                    <div>
                      <p className="text-gray-700 italic mb-4">
                        "Bjørn has a unique ability to combine strategic thinking with creative storytelling. His approach helped us navigate a complex digital transformation with clarity and purpose."
                      </p>
                      <p className="font-semibold">— CEO, Technology Company</p>
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-4">
                        "Working with Bjørn transformed how we communicate our brand story. His strategic guidance and storytelling expertise helped us connect with our audience in a much more meaningful way."
                      </p>
                      <p className="font-semibold">— Marketing Director, Financial Services</p>
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-4">
                        "Bjørn's innovation workshops were transformative for our team. He created a space where strategic thinking and creative exploration could flourish, leading to breakthrough ideas."
                      </p>
                      <p className="font-semibold">— Innovation Manager, Healthcare Organization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="headline-gradient mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Interested in learning more about how I can help your organization navigate complex challenges, develop compelling strategies, and tell powerful stories?
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
