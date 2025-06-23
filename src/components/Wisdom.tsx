import React from 'react';
import { Quote } from 'lucide-react';

const Wisdom = () => {
  const teachings = [
    {
      sanskrit: "वसुधैव कुटुम्बकम्",
      translation: "The world is one family",
      meaning: "This profound teaching reminds us that all beings are interconnected and part of one universal family. It encourages us to transcend boundaries of race, religion, and nationality."
    },
    {
      sanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः",
      translation: "May all beings be happy and free from disease",
      meaning: "A universal prayer for the wellbeing of all creation, expressing the Vedic ideal of compassion and care for every living being."
    },
    {
      sanskrit: "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः",
      translation: "Where women are honored, divinity blossoms there",
      meaning: "This teaching emphasizes the sacred role of feminine energy and the importance of respecting and honoring women in society."
    }
  ];

  return (
    <section id="wisdom" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ancient Wisdom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Timeless teachings from the Vedas that illuminate the path to spiritual understanding
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {teachings.map((teaching, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    {teaching.sanskrit}
                  </h3>
                  
                  <p className="text-lg text-orange-600 font-medium mb-4 italic">
                    "{teaching.translation}"
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {teaching.meaning}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">The Four Vedas</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-lg mb-2">Rigveda</h4>
                <p className="text-orange-100 text-sm">Hymns and Praises</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Samaveda</h4>
                <p className="text-orange-100 text-sm">Melodies and Chants</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Yajurveda</h4>
                <p className="text-orange-100 text-sm">Rituals and Ceremonies</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Atharvaveda</h4>
                <p className="text-orange-100 text-sm">Everyday Wisdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wisdom;