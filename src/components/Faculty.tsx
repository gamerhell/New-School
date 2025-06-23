import React from 'react';
import { Award, BookOpen, Users, Star } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Dr. Priya Sharma',
      position: 'Principal & Sanskrit Scholar',
      qualification: 'Ph.D. in Sanskrit Literature',
      experience: '25+ years',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Vedic Studies, Educational Leadership'
    },
    {
      name: 'Prof. Rajesh Kumar',
      position: 'Vice Principal & Mathematics Head',
      qualification: 'M.Sc. Mathematics, B.Ed.',
      experience: '20+ years',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Advanced Mathematics, Research'
    },
    {
      name: 'Mrs. Anita Devi',
      position: 'Primary Section Coordinator',
      qualification: 'M.A. Child Psychology',
      experience: '18+ years',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Early Childhood Education'
    },
    {
      name: 'Dr. Vikram Singh',
      position: 'Science Department Head',
      qualification: 'Ph.D. Physics, M.Ed.',
      experience: '22+ years',
      image: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Physics, Scientific Research'
    },
    {
      name: 'Ms. Kavita Joshi',
      position: 'Arts & Culture Coordinator',
      qualification: 'M.A. Fine Arts, Diploma in Dance',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Classical Dance, Visual Arts'
    },
    {
      name: 'Mr. Suresh Gupta',
      position: 'Sports & Yoga Instructor',
      qualification: 'M.P.Ed., Yoga Certification',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Physical Education, Yoga'
    }
  ];

  const stats = [
    { icon: Users, number: '85+', label: 'Expert Faculty' },
    { icon: Award, number: '15:1', label: 'Student-Teacher Ratio' },
    { icon: BookOpen, number: '95%', label: 'Advanced Degrees' },
    { icon: Star, number: '20+', label: 'Average Experience' }
  ];

  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Distinguished Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced educators dedicated to nurturing young minds with wisdom and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 mb-1">{member.qualification}</p>
                <p className="text-sm text-gray-500">{member.experience} Experience</p>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Specialization:</span> {member.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Faculty Development</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Continuous Learning</h4>
              <p className="text-gray-600 text-sm">
                Regular workshops and training programs to stay updated with latest educational methodologies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Collaborative Teaching</h4>
              <p className="text-gray-600 text-sm">
                Team-based approach to curriculum development and student mentorship
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Recognition Programs</h4>
              <p className="text-gray-600 text-sm">
                Excellence awards and career advancement opportunities for outstanding performance
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Teaching Community</h3>
            <p className="text-lg mb-6">
              We're always looking for passionate educators who share our vision of holistic education
            </p>
            <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-colors">
              View Career Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;