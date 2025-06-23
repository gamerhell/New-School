import React from 'react';
import { ChevronDown, Award, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="relative container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 leading-tight">
                <span className="text-orange-600">Vedic Wisdom</span><br />
                School
              </h1>
              <div className="text-2xl text-gray-600 mb-4">
                विद्या ददाति विनयम्
              </div>
              <p className="text-lg text-gray-700 font-medium">
                Knowledge bestows humility
              </p>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nurturing young minds with ancient wisdom and modern education. 
              Where traditional values meet contemporary learning for holistic development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#admissions"
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Apply for Admission
              </a>
              <a 
                href="#about"
                className="px-8 py-4 bg-transparent border-2 border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600 font-semibold rounded-full transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">25+</div>
                <div className="text-sm text-gray-600">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">2000+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-r from-orange-200 to-red-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-orange-600 h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;