import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-lg">
              We are a trusted real estate platform offering a variety of property listings in Amravati, including Rahatgaon. Find the best deals on your dream home with us!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-lg hover:underline">Home</a></li>
              <li><a href="/properties" className="text-lg hover:underline">Properties</a></li>
              <li><a href="/about" className="text-lg hover:underline">About Us</a></li>
              <li><a href="/contact" className="text-lg hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="text-lg">Phone: <a href="tel:+919359002018" className="hover:underline">+91 9359002018</a></li>
              <li className="text-lg">Email: <a href="mailto:ayushkhakare2018@gmail.com" className="hover:underline">ayushkhakare2018@gmail.com</a></li>
              <li className="text-lg">Address: Amravati, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-2xl hover:text-blue-500"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl hover:text-blue-400"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl hover:text-pink-500"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-2xl hover:text-blue-700"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-lg">
          <p>&copy; 2025 All Rights Reserved | Shree Shakti Builder & Developers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
