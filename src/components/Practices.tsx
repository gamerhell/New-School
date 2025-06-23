import React from 'react';
import { Sun, Moon, Flower, Waves } from 'lucide-react';

const Practices = () => {
  const practices = [
    {
      icon: Sun,
      title: 'Yoga & Meditation',
      description: 'Unite body, mind, and spirit through ancient practices that promote inner peace and physical wellbeing.',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Flower,
      title: 'Pranayama',
      description: 'Master the breath to control life energy and achieve mental clarity and emotional balance.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Moon,
      title: 'Mantra Chanting',
      description: 'Use sacred sounds and vibrations to purify consciousness and connect with divine energy.',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Waves,
      title: 'Ayurveda',
      description: 'Embrace holistic healing through natural remedies and lifestyle practices for optimal health.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="practices" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Spiritual Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Time-tested methods for cultivating inner peace, health, and spiritual growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {practices.map((practice, index) => (
            <div
              key={practice.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img
                  src={practice.image}
                  alt={practice.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="relative p-8 h-80 flex flex-col justify-end">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                    <practice.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Daily Vedic Routine</h3>
            <p className="text-gray-600">A structured approach to incorporating Vedic wisdom into everyday life</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🌅</div>
              <h4 className="font-semibold text-lg mb-2">Morning</h4>
              <p className="text-gray-600 text-sm">Meditation, prayer, and setting positive intentions for the day</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">☀️</div>
              <h4 className="font-semibold text-lg mb-2">Midday</h4>
              <p className="text-gray-600 text-sm">Mindful eating, work with dharma, and grateful living</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🌙</div>
              <h4 className="font-semibold text-lg mb-2">Evening</h4>
              <p className="text-gray-600 text-sm">Reflection, gratitude practice, and peaceful rest</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practices;