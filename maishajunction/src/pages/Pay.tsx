import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Smartphone, 
  CheckCircle, 
  Lock,
  Menu,
  X 
} from 'lucide-react';

const Pay: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logomaisha.jpg" 
                alt="Maisha Junction Logo" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-bold text-gray-800">Maisha Junction</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`
            ${isMenuOpen ? 'block' : 'hidden'} 
            md:block absolute md:relative top-full left-0 w-full md:w-auto 
            bg-white md:bg-transparent shadow-md md:shadow-none
          `}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/pay" 
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Pay
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition flex items-center"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Pay Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Maisha Junction Pay</h1>
            <p className="text-lg text-gray-600">
              Complete your payment for training sessions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* M-Pesa Payment Option */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Smartphone className="w-10 h-10 text-green-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-800">M-Pesa Payment</h3>
              </div>

              <div className="text-gray-700">
                <p className="mb-4">To pay via M-Pesa, follow these steps:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Go to M-Pesa on your phone</li>
                  <li>Select "Send Money"</li>
                  <li>Enter the number: <strong className="text-green-600">0715843035</strong></li>
                  <li>Enter the amount for your training session</li>
                  <li>Enter your M-Pesa PIN and confirm the transaction</li>
                  <li>You will receive a confirmation SMS for your payment</li>
                </ol>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-gray-500">After making the payment, book your ticket:</p>
                <a 
                  href="https://www.tickettailor.com/events/maishajunctionorg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  <CheckCircle className="mr-2 w-5 h-5" />
                  Book Ticket
                </a>
              </div>
            </div>

            {/* Card Payment Option */}
            <div className="bg-white shadow-lg rounded-lg p-6 opacity-50 cursor-not-allowed relative">
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="bg-white/80 p-4 rounded-lg shadow-xl text-center">
                  <Lock className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">Card Payments Temporarily Disabled</p>
                </div>
              </div>
              <div className="flex items-center mb-4 pointer-events-none">
                <CreditCard className="w-10 h-10 text-blue-300 mr-4" />
                <h3 className="text-xl font-bold text-gray-400">Card Payment</h3>
              </div>

              <form className="space-y-4" aria-disabled="true">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Cardholder Name
                  </label>
                  <input 
                    type="text" 
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
                    placeholder="Enter cardholder name"
                  />
                </div>

                {/* Rest of the card payment form remains the same */}
              </form>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact us at <a href="tel:+0715843035" className="text-blue-600 hover:underline">0715843035</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;