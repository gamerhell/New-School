import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Annual Cultural Festival - Sanskruti',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Auditorium',
      description: 'Three-day celebration of Indian culture with dance, music, and drama performances',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Cultural'
    },
    {
      title: 'Science Exhibition & Innovation Fair',
      date: 'April 5, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Science Block',
      description: 'Students showcase their scientific projects and innovative solutions',
      image: 'https://images.pexels.com/photos/8471691/pexels-photo-8471691.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Academic'
    },
    {
      title: 'Yoga & Wellness Workshop',
      date: 'April 20, 2025',
      time: '6:00 AM - 8:00 AM',
      location: 'Yoga Hall',
      description: 'Special session on traditional yoga practices and meditation techniques',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Wellness'
    },
    {
      title: 'Inter-School Sports Championship',
      date: 'May 10-12, 2025',
      time: '8:00 AM - 5:00 PM',
      location: 'Sports Complex',
      description: 'Annual sports meet with various indoor and outdoor competitions',
      image: 'https://images.pexels.com/photos/159740/football-capture-ball-sport-159740.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sports'
    }
  ];

  const pastEvents = [
    {
      title: 'Diwali Celebration 2024',
      description: 'Traditional festival celebration with rangoli, diyas, and cultural programs',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Annual Day 2024',
      description: 'Grand celebration showcasing student talents and achievements',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Teacher\'s Day Special',
      description: 'Honoring our dedicated faculty with special performances and gratitude',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            School Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating learning, culture, and community through engaging activities and programs
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h4>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Highlights</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Annual Calendar</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-2xl font-bold text-orange-600 mb-2">April</div>
              <div className="text-sm text-gray-600">New Academic Session, Admission Process</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">July</div>
              <div className="text-sm text-gray-600">Monsoon Festival, Environmental Week</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">October</div>
              <div className="text-sm text-gray-600">Diwali Celebration, Cultural Programs</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-2">February</div>
              <div className="text-sm text-gray-600">Annual Day, Sports Meet, Graduation</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6">
              Never miss an event! Subscribe to our newsletter for the latest updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;