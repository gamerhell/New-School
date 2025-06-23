import React from 'react';
import { Heart, Target, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      sanskrit: 'करुणा',
      description: 'Fostering empathy and kindness in every interaction'
    },
    {
      icon: Target,
      title: 'Discipline',
      sanskrit: 'अनुशासन',
      description: 'Building character through structured learning'
    },
    {
      icon: Eye,
      title: 'Wisdom',
      sanskrit: 'ज्ञान',
      description: 'Seeking knowledge beyond textbooks'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      sanskrit: 'नवाचार',
      description: 'Blending tradition with modern thinking'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rooted in ancient wisdom, reaching for modern excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Philosophy</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Vedic Wisdom School, we believe that true education encompasses not just academic excellence 
              but the holistic development of mind, body, and spirit. Our curriculum seamlessly integrates 
              time-tested Vedic principles with contemporary educational methodologies.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We nurture students to become compassionate leaders, critical thinkers, and responsible 
              global citizens who honor their cultural heritage while embracing innovation and progress.
            </p>
            
            <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
              <blockquote className="text-lg text-gray-700 italic mb-2">
                "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः"
              </blockquote>
              <p className="text-sm text-gray-600">
                The teacher is Brahma, Vishnu, and Shiva - the creator, sustainer, and transformer of knowledge
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Traditional learning"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
              <p className="text-2xl text-orange-600 mb-3">{value.sanskrit}</p>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To create an educational environment where ancient wisdom illuminates modern learning, 
            where every student discovers their unique potential, and where character development 
            goes hand in hand with academic achievement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;