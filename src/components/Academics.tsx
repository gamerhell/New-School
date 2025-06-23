import React from 'react';
import { BookOpen, Calculator, Globe, Palette, Music, Dumbbell } from 'lucide-react';

const Academics = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Sanskrit & Literature',
      description: 'Deep study of ancient texts, poetry, and classical literature',
      subjects: ['Sanskrit Grammar', 'Vedic Literature', 'Classical Poetry', 'Philosophy']
    },
    {
      icon: Calculator,
      title: 'Mathematics & Sciences',
      description: 'Modern STEM education with logical reasoning emphasis',
      subjects: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Biology']
    },
    {
      icon: Globe,
      title: 'Social Sciences',
      description: 'Understanding society through historical and cultural lens',
      subjects: ['Indian History', 'Geography', 'Civics', 'Economics']
    },
    {
      icon: Palette,
      title: 'Arts & Crafts',
      description: 'Creative expression through traditional and modern arts',
      subjects: ['Classical Dance', 'Painting', 'Sculpture', 'Handicrafts']
    },
    {
      icon: Music,
      title: 'Music & Performance',
      description: 'Classical and contemporary music education',
      subjects: ['Vocal Music', 'Instrumental', 'Drama', 'Public Speaking']
    },
    {
      icon: Dumbbell,
      title: 'Physical Education',
      description: 'Holistic physical development and sports',
      subjects: ['Yoga', 'Traditional Games', 'Modern Sports', 'Martial Arts']
    }
  ];

  const grades = [
    { level: 'Pre-Primary', age: '3-5 years', focus: 'Play-based learning with moral stories' },
    { level: 'Primary', age: '6-10 years', focus: 'Foundation building with value education' },
    { level: 'Middle School', age: '11-13 years', focus: 'Conceptual learning with practical application' },
    { level: 'High School', age: '14-18 years', focus: 'Specialized streams with career guidance' }
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum blending traditional wisdom with modern education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <program.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              
              <div className="space-y-2">
                {program.subjects.map((subject, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    {subject}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Grade Structure</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grades.map((grade, index) => (
              <div
                key={grade.level}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-2">{grade.level}</h4>
                <p className="text-orange-600 font-medium mb-3">{grade.age}</p>
                <p className="text-gray-600 text-sm">{grade.focus}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Special Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Gurukul System</h4>
                <p className="text-orange-100 text-sm">Personalized mentorship and guidance</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Value Education</h4>
                <p className="text-orange-100 text-sm">Character building through daily practices</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Practical Learning</h4>
                <p className="text-orange-100 text-sm">Hands-on experience and real-world application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;