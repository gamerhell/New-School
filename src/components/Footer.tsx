import React from 'react';
import { GraduationCap, Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Vedic Wisdom School</span>
                <p className="text-xs text-gray-400">विद्या ददाति विनयम्</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Nurturing young minds with ancient wisdom and modern education for holistic development and character building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-orange-300">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-orange-300 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-300 transition-colors">About Us</a></li>
              <li><a href="#academics" className="text-gray-400 hover:text-orange-300 transition-colors">Academics</a></li>
              <li><a href="#admissions" className="text-gray-400 hover:text-orange-300 transition-colors">Admissions</a></li>
              <li><a href="#faculty" className="text-gray-400 hover:text-orange-300 transition-colors">Faculty</a></li>
              <li><a href="#campus" className="text-gray-400 hover:text-orange-300 transition-colors">Campus</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-orange-300">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">Pre-Primary</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">Primary School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">Middle School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">High School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">Curriculum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">Results</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-orange-300">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 123 Vedic Wisdom Lane<br />Knowledge Park, New Delhi</p>
              <p>📞 +91 98765 43210</p>
              <p>📧 info@vedicschool.edu</p>
              <p>🕒 Mon-Fri: 8:00 AM - 5:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Vedic Wisdom School. All rights reserved. | Nurturing minds, building character.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for future leaders</span>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-orange-300 font-medium text-lg">
              सा विद्या या विमुक्तये
            </p>
            <p className="text-gray-400 text-sm mt-1">
              True education is that which liberates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;