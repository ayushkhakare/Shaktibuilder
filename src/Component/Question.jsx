import React from 'react';

const Question = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold">Explore Property for Sale in Rahatgaon, Amravati</h1>
        <p className="text-lg mt-4">Find the best real estate options, from newly launched projects to ready-to-move properties.</p>
      </header>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column (Property Details) */}
        <div>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Recently Launched Projects</h2>
            <ul className="space-y-4">
              <li className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">Sky Madhavam Heights in Rahatgaon</h3>
                <p className="text-gray-600">A luxury residential project with state-of-the-art amenities.</p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">Chetan Veera Enclave in Rahatgaon</h3>
                <p className="text-gray-600">A cozy enclave for comfortable living with great connectivity.</p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">Shree Govindjyot Residency in Akoli</h3>
                <p className="text-gray-600">A blend of modern living and tranquil surroundings.</p>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Budget Property Options</h2>
            <ul className="space-y-4">
              <li className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">Flats in Rahatgaon between 15 to 20 Lakhs</h3>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">Flats in Rahatgaon between 20 to 25 Lakhs</h3>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">House for sale in Rahatgaon between 40 to 50 Lakhs</h3>
              </li>
            </ul>
          </section>
        </div>

        {/* Right Column (Other Details and Information) */}
        <div>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">BHK-wise Property in Rahatgaon</h2>
            <ul className="space-y-4">
              <li className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">1 BHK Flats in Rahatgaon</h3>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">2 BHK House for Sale in Rahatgaon</h3>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">3 BHK House for Sale in Rahatgaon</h3>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">About Rahatgaon, Amravati</h2>
            <p className="text-lg text-gray-600 mb-6">
              Rahatgaon is a prime locality in Amravati known for its peaceful environment and accessibility. It offers a mix of residential, commercial, and developing properties with excellent infrastructure.
            </p>
            <ul className="text-lg text-gray-600 space-y-2">
              <li><strong>Hospitals:</strong> Anudarshan Child Care (1.4 km), Dr. Omprakash Deshmukh Hospital (3 km)</li>
              <li><strong>Nearby Localities:</strong> Arjun Nagar, Kathora Road, Kathora Naka</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-8 text-center">
        <p className="text-lg">Find your dream property in Rahatgaon, Amravati. Contact us for more details!</p>
      </footer>
    </div>
  );
};

export default Question;
