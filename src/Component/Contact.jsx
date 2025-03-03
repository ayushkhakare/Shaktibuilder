import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 h-screen flex items-center justify-center px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact With Us</h1>
        <p className="text-xl text-gray-700 mb-8">
          Ready to Make a Move? Let’s Build Your Future Together
        </p>
      </div>
      
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold">Your Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold">Your Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea 
              rows="4" 
              placeholder="Enter your message" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
