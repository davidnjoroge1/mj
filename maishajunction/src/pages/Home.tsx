import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "David Njoroge",
    role: "Software Engineer",
    quote: "At maishajunction it was a pleasure meeting Dr Edward Mutinda and having the teachings he shared to us on health and wellness.",
    image: "/images/davy.jpeg"
  },
  {
    name: "Lomnyak Nabaala",
    role: "Electrical Engineer", 
    quote: "I have gained valuable information from both the maishajunction workshops and seminars and trully they are gamechangers.",
    image: "/images/lomy.jpeg"
  },
  {
    name: "Bellah Moraa",
    role: "Medical Engineer",
    quote: "My experience with the team at maishajunction was extremely rewarding: from the understanding of how the body works to the food we eat. Truly amazing",
    image: "/images/bellah.jpeg"
  },
  {
    name: "Maina",
    role: "Businessman",
    quote: "Maishajunction teachings are trully a gem to everyone. Am trully concerned about my health.",
    image: "/images/maish.jpg"
  },
  {
    name: "Jackline Mutheu",
    role: "Nutritionist",
    quote: "I have been following closely the teachings from Maishajunction from online sessions and physical sessions and what i can say is that they are trully amazing.",
    image: "/images/melisa.jpg"
  }
];

const Home: React.FC = () => {
  const playVideo = () => {
    const video = document.getElementById('youtubeVideo') as HTMLIFrameElement;
    const playButton = document.getElementById('playButton');
    if (video && playButton) {
      video.src += "&autoplay=1";
      playButton.style.display = 'none';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section id="hero" className="pt-24 bg-gray-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Elevate your Health with Comprehensive Learning
            </h1>
            <p className="text-gray-600 leading-relaxed">
              At Maisha Junction Institute, we are committed to fostering a holistic approach to 
              health education, providing students with tools and knowledge to thrive in mental, 
              physical, and social well-being.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.tickettailor.com/events/maishajunctionorg" 
                className="bg-brand-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Explore Classes
              </a>
              <a 
                href="https://youtu.be/h4mFt8O_k8s" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-orange text-brand-orange px-6 py-3 rounded-lg hover:bg-orange-50 transition"
              >
                Watch Video
              </a>
            </div>
          </div>
          
          {/* Optional hero image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="/images/h.jpeg" 
              alt="Health and Wellness" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Anatomy, Physiology, and Nutrition: A Holistic Approach to Health</h2>
              <p className="text-gray-600 mb-6">
                Our programs are thoughtfully designed to offer a deep understanding of the human
                body, emphasizing the crucial connection between anatomy, physiology, and nutrition.
              </p>
              <a 
                href="https://www.youtube.com/@researchcorner." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-orange hover:underline"
              >
                <span>Discover More</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  id="youtubeVideo"
                  src="https://www.youtube.com/embed/h4mFt8O_k8s" 
                  frameBorder="0" 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
              <button 
                id="playButton"
                onClick={playVideo}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg"
              >
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Phases</h2>
            <p className="text-xl text-gray-600">Three Phases of Medical Missionary Training</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Medical Missionary Training",
                description: "This introductory course consists of 15 sessions at $40. Here, students learn the foundational principles of anatomy and physiology, gaining insights into how the human body functions and the importance of nutrition in maintaining health. The course also explores natural remedies, emphasizing their role in supporting wellness through diet and lifestyle.",
              },
              {
                title: "Advanced Medical Missionary Training",
                description: "Moving beyond the basics, this phase offers another 15 sessions at $40, diving deeper into the complexities of the body's systems and the science of nutrition. Students learn advanced techniques for utilizing natural remedies and gain a comprehensive understanding of how diet and lifestyle choices impact overall health and well-being. This phase prepares learners for a more in-depth approach to natural health promotion.",
              },
              {
                title: "Therapeutic Medical Missionary Training",
                description: "In the final phase, students engage in 15 sessions at $40, that focus on therapeutic applications of natural remedies and nutrition. This course is designed for those who wish to specialize in natural therapies, learning to treat specific health conditions with holistic methods. Students explore the therapeutic properties of herbs, master the preparation of natural remedies, and understand how to apply these treatments in a practical, real-world setting.",
              },
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <p className="text-gray-600 mb-6">{phase.description}</p>
                <a 
                  href="pay" 
                  className="inline-block bg-brand-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-shopping-cart mr-2"></i> Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Join Us</h2>
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Join Us in Promoting Holistic Health</h3>
            <p className="text-gray-600 mb-6">
              At Maisha Junction Institute, education goes beyond the classroom. We empower our
              students with the skills and confidence to make informed health choices for themselves
              and their communities. Join us on this transformative journey and discover the power of holistic health education
              today!
            </p>
            <a
              href="https://www.tickettailor.com/events/maishajunctionorg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Book Ticket
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">F.A.Q</h2>
          <p className="text-xl text-center text-gray-600 mb-8">Frequently Asked Questions</p>
          <div className="grid md:grid-cols-2 gap-8">
            <FaqColumn questions={[
              {
                question: "How can I sign up for your wellness workshops?",
                answer: "You can sign up for our wellness workshops by visiting the \"Workshops\" section on our website. Choose the workshop you're interested in and follow the registration instructions. For personalized assistance, you can also contact us through our contact form."
              },
              {
                question: "How can I make a donation to support your programs?",
                answer: "To make a donation, visit the \"Donate\" section on our website. We accept various forms of contributions, including one-time and recurring donations. For more information or if you prefer to donate by other means, please contact us via email or phone."
              },
              {
                question: "What types of workshops do you offer?",
                answer: "We offer a variety of workshops focused on different aspects of wellness, including brain health, natural healing, diet and nutrition, and psychological medicine. For details on each workshop, please visit our \"Workshops\" page to view descriptions and schedules."
              }
            ]} />
            <FaqColumn questions={[
              {
                question: "How can I learn more about natural remedies?",
                answer: "To learn more about natural remedies, check out our \"Natural Healing\" workshops where we explore various natural treatments and lifestyle adjustments. You can also visit our website for additional resources and information on natural health practices."
              },
              {
                question: "How do I contact you for further inquiries?",
                answer: "For further inquiries, you can reach us through our contact form on the website. Alternatively, you can email or call us using the contact information provided in the \"Contact Us\" section. Our team is here to assist you with any questions or concerns."
              },
              {
                question: "Can I attend multiple workshops at the same time?",
                answer: "Yes, you are welcome to attend multiple workshops. Simply register for each workshop you're interested in. If you have specific scheduling needs or require assistance, please contact us, and we will help you coordinate your participation."
              }
            ]} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Hear from those who have experienced our training</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounde
d-lg p-6 shadow-md">
                <div className="flex text-brand-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Maisha Junction</h3>
              <p className="text-gray-400">
                Empowering individuals with holistic health education and natural wellness strategies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-brand-orange transition">Home</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition">About</a></li>
                <li><a href="#services" className="hover:text-brand-orange transition">Services</a></li>
                <li><a href="#team" className="hover:text-brand-orange transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Email: info@maishajunction.org</li>
                <li>Phone: +254 712 345 678</li>
                <li>Location: Nairobi, Kenya</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-brand-orange transition">Facebook</a>
                <a href="#" className="hover:text-brand-orange transition">Instagram</a>
                <a href="#" className="hover:text-brand-orange transition">YouTube</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p>&copy; 2024 Maisha Junction. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <ChevronRight className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FaqColumnProps {
  questions: FaqItemProps[];
}

const FaqColumn: React.FC<FaqColumnProps> = ({ questions }) => {
  return (
    <div>
      {questions.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Home;

