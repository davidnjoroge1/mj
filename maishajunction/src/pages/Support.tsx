import React from 'react';
import { Microscope, BookOpen, Beaker, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const researchCategories = [
    {
      title: "Natural Healing Technologies",
      icon: <Beaker className="w-8 h-8 text-green-600" />,
      description: "Explore and develop innovative technologies that support the body's innate healing processes using natural and holistic approaches.",
      items: [
        "Herbal Medicine Research",
        "Bioenergetic Healing Systems",
        "Naturopathic Diagnostic Tools",
        "Holistic Wellness Instruments"
      ]
    },
    {
      title: "Mind-Body Wellness Library",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      description: "Expand our comprehensive collection of resources exploring the intricate connections between mental, emotional, and physical healing.",
      items: [
        "Psychosomatic Medicine Journals",
        "Holistic Healing Publications",
        "Mind-Body Wellness Texts",
        "Traditional Healing Manuscripts"
      ]
    },
    {
      title: "Integrated Healing Initiatives",
      icon: <Microscope className="w-8 h-8 text-purple-600" />,
      description: "Develop groundbreaking research programs that integrate natural healing techniques, mental wellness, and holistic human anatomy understanding.",
      items: [
        "Trauma Healing Studies",
        "Natural Regenerative Therapies",
        "Emotional Wellness Research",
        "Holistic Healing Methodology Development"
      ]
    }
  ];

  const paymentMethods = [
    {
      title: "M-PESA",
      icon: "/images/mpesa.png",
      details: "+0715843035",
      instructions: "Send directly to the number"
    }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logomaisha.jpg"
              alt="Maisha Junction Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-2xl font-bold text-brand-orange">
              Maisha Junction
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <a href="#hero" className="text-gray-800 hover:text-brand-orange transition">Home</a>
            <a href="#about" className="text-gray-800 hover:text-brand-orange transition">About</a>
            <a href="#services" className="text-gray-800 hover:text-brand-orange transition">Services</a>
            <a href="#team" className="text-gray-800 hover:text-brand-orange transition">Team</a>
            <a href="#contact" className="text-gray-800 hover:text-brand-orange transition">Contact</a>
          </nav>
          <a
            href="https://www.tickettailor.com/events/maishajunctionorg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Events
          </a>
        </div>
      </header>

      <div className="min-h-screen bg-gray-50 mt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <Microscope className="w-16 h-16 mx-auto mb-6 text-green-300" />
              <h1 className="text-4xl font-bold mb-4">Maisha Junction Healing Research Center</h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Exploring the profound connections between natural healing, mental wellness, and human holistic health.
              </p>
            </div>
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Impact Message */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Support Drives Medical Innovation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every contribution enables our researchers to pursue critical studies in human anatomy, health, and wellness. 
            Your generosity supports cutting-edge medical research that can transform understanding of human health.
          </p>
        </div>

        {/* Research Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {researchCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Donation Methods */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Ways to Support Our Research</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Financial Support */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Financial Support</h3>
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-start space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full p-2">
                      <img src={method.icon} alt={method.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-medium">{method.title}</h4>
                      <pre className="text-gray-600 mt-1 font-mono">{method.details}</pre>
                      <p className="text-sm text-gray-500 mt-1">{method.instructions}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Donations */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Research Equipment & Literature Donations</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  We welcome donations of scientific equipment, medical literature, and research resources. 
                  Your contributions directly support our mission of advancing medical knowledge.
                </p>
                <div className="space-y-3">
                  <h4 className="font-medium">What we accept:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Medical research equipment</li>
                    <li>Scientific journals and publications</li>
                    <li>Anatomical models and reference materials</li>
                    <li>Laboratory supplies and instruments</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    Please contact us beforehand to discuss potential research equipment donations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-gray-600 mb-4">
            If you have questions about supporting our research or would like to discuss 
            collaboration opportunities, we'd love to hear from you.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Contact Research Center
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Support;