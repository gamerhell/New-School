import React from 'react';
import { Building, TreePine, Utensils, Bus, Wifi, Shield } from 'lucide-react';

const Campus = () => {
  const facilities = [
    {
      icon: Building,
      title: 'Modern Classrooms',
      description: 'Smart boards, air-conditioned rooms with natural lighting',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: TreePine,
      title: 'Green Campus',
      description: 'Eco-friendly environment with gardens and open spaces',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Utensils,
      title: 'Nutritious Meals',
      description: 'Hygienic cafeteria serving healthy, balanced meals',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Bus,
      title: 'Safe Transportation',
      description: 'GPS-enabled buses with trained drivers and attendants',
      image: 'https://images.pexels.com/photos/159213/kids-school-happy-children-159213.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const amenities = [
    { icon: Building, title: 'Science Laboratories', description: 'Well-equipped labs for Physics, Chemistry, and Biology' },
    { icon: TreePine, title: 'Sports Complex', description: 'Indoor and outdoor sports facilities with professional equipment' },
    { icon: Utensils, title: 'Library & Reading Room', description: 'Extensive collection of books and digital resources' },
    { icon: Bus, title: 'Medical Room', description: '24/7 medical assistance with qualified nursing staff' },
    { icon: Wifi, title: 'Digital Infrastructure', description: 'High-speed internet and modern IT facilities' },
    { icon: Shield, title: 'Security System', description: 'CCTV surveillance and trained security personnel' }
  ];

  return (
    <section id="campus" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A nurturing environment designed for holistic learning and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="relative p-8 h-80 flex flex-col justify-end">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                    <facility.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Campus Amenities</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <amenity.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{amenity.title}</h4>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Campus Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">15-acre sprawling campus with lush green surroundings</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">State-of-the-art infrastructure with modern amenities</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Dedicated spaces for yoga, meditation, and spiritual practices</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Organic garden maintained by students for practical learning</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Amphitheater for cultural programs and assemblies</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Separate hostels for boys and girls with homely atmosphere</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Campus overview"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-r from-orange-200 to-red-200 rounded-2xl -z-10"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
            <p className="text-lg mb-6">
              Experience our learning environment firsthand. Schedule a campus tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-colors">
                Book Campus Tour
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-colors">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;