import React from 'react';
import { Calendar, FileText, Users, CheckCircle } from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: 'Application Form',
      description: 'Submit online application with required documents',
      icon: FileText
    },
    {
      step: 2,
      title: 'Interaction Session',
      description: 'Parent-child interaction with our admission team',
      icon: Users
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Age-appropriate evaluation for academic readiness',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Admission Confirmation',
      description: 'Fee payment and seat confirmation',
      icon: Calendar
    }
  ];

  const requirements = [
    'Birth Certificate',
    'Previous School Records (if applicable)',
    'Medical Certificate',
    'Passport Size Photographs',
    'Address Proof',
    'Parent ID Proof'
  ];

  const feeStructure = [
    { grade: 'Pre-Primary (Nursery-UKG)', admission: '₹25,000', annual: '₹1,20,000' },
    { grade: 'Primary (Class I-V)', admission: '₹30,000', annual: '₹1,50,000' },
    { grade: 'Middle School (Class VI-VIII)', admission: '₹35,000', annual: '₹1,80,000' },
    { grade: 'High School (Class IX-XII)', admission: '₹40,000', annual: '₹2,20,000' }
  ];

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Admissions 2025-26
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our family of learners and embark on a journey of holistic education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Admission Process</h3>
            
            <div className="space-y-6">
              {admissionSteps.map((step, index) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-semibold text-gray-800 mb-3">Important Dates</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Application Opens:</span>
                  <span className="font-medium">December 1, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Date to Apply:</span>
                  <span className="font-medium">February 28, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Admission Results:</span>
                  <span className="font-medium">March 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Session Begins:</span>
                  <span className="font-medium">April 1, 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Required Documents</h3>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download Application Form
              </button>
              <p className="text-sm text-gray-600 mt-3">
                Or apply online through our admission portal
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fee Structure</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-orange-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-800">Grade Level</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-800">Admission Fee</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-800">Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-white transition-colors">
                    <td className="py-4 px-6 text-gray-700">{fee.grade}</td>
                    <td className="py-4 px-6 text-center font-medium text-orange-600">{fee.admission}</td>
                    <td className="py-4 px-6 text-center font-medium text-orange-600">{fee.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>* Fees include tuition, books, uniforms, and extracurricular activities</p>
            <p>* Transportation and meals are available at additional cost</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help with Admissions?</h3>
            <p className="text-lg mb-6">Our admission counselors are here to guide you through the process</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-colors">
                Schedule a Visit
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-colors">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;