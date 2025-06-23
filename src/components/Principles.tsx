import React from 'react';
import { Heart, Scale, Leaf, CircleDot } from 'lucide-react';

const Principles = () => {
  const principles = [
    {
      icon: Scale,
      title: 'Dharma',
      sanskrit: 'धर्म',
      description: 'Righteousness and moral duty - the foundation of ethical living that guides us toward justice and truth in all our actions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Heart,
      title: 'Ahimsa',
      sanskrit: 'अहिंसा',
      description: 'Non-violence and compassion toward all living beings, fostering love, kindness, and respect for every form of life.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Leaf,
      title: 'Satya',
      sanskrit: 'सत्य',
      description: 'Truth in thought, word, and deed - the cornerstone of authentic living and honest relationships with ourselves and others.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: CircleDot,
      title: 'Karma',
      sanskrit: 'कर्म',
      description: 'The law of cause and effect - understanding that our actions create consequences that shape our present and future experiences.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="principles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Core Vedic Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The eternal values that form the foundation of spiritual wisdom and righteous living
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${principle.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <principle.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{principle.title}</h3>
                <p className="text-3xl text-gray-500 font-light">{principle.sanskrit}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;