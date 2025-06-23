import React from 'react';
import { Users, Book, Calendar, Mail } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with like-minded souls on the path of spiritual growth and Vedic wisdom
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Satsang Circles</h3>
            <p className="text-gray-400 text-sm">Weekly gatherings for spiritual discourse and community bonding</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Book className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scripture Study</h3>
            <p className="text-gray-400 text-sm">Deep dive into ancient texts with guided interpretations</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sacred Events</h3>
            <p className="text-gray-400 text-sm">Festivals, ceremonies, and special celebrations throughout the year</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-400 text-sm">Weekly wisdom teachings and community updates</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Stay Connected</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-orange-300">Contact Information</h4>
                <div className="space-y-3 text-gray-300">
                  <p>📧 wisdom@vedicvalues.org</p>
                  <p>📞 +1 (555) 123-VEDA</p>
                  <p>📍 Spiritual Center, Sacred Valley</p>
                  <p>🕉️ Open daily for meditation and study</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-orange-300">Newsletter Signup</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Receive weekly wisdom teachings and updates
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-xl italic text-gray-300 mb-4">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
            </blockquote>
            <p className="text-orange-300">May all beings be happy and free from suffering</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;