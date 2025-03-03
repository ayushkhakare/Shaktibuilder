import React from 'react';

const Aboutinfo = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-900 text-white p-12 text-center">
        <h1 className="text-5xl font-extrabold">About Shree Shakti Builder & Developers</h1>
        <p className="text-xl mt-4">Leading Experts in Government Contracts, Construction, Development, and More</p>
      </header>

      {/* Company Overview Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Company Overview</h2>
          <p className="text-lg text-gray-600 mb-6">
            Shree Shakti Builder & Developers is a premier consulting and contracting firm providing innovative solutions in government contracts, turnkey construction, and a wide range of other services. With years of experience, we have established a reputation for delivering high-quality services and ensuring customer satisfaction.
          </p>
          <p className="text-lg text-gray-600">
            We specialize in managing complex projects, offering end-to-end services from consultation to completion. Our team of experts is dedicated to helping clients navigate the challenges of the construction and development industries with ease and efficiency.
          </p>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Service Cards */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Government Contract Consulting</h3>
              <p className="text-gray-600">
                Our experts assist in securing and managing government contracts, ensuring compliance and optimizing your chances for success.
              </p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Turnkey Contractor</h3>
              <p className="text-gray-600">
                We provide end-to-end solutions for your projects, from initial planning to final execution. We manage everything so you don't have to.
              </p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Third-Party Inspection</h3>
              <p className="text-gray-600">
                We offer third-party inspection services to ensure that your projects meet the highest quality standards and comply with regulations.
              </p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Interior Corporation</h3>
              <p className="text-gray-600">
                Our interior design team provides custom design solutions for residential and commercial spaces that are functional and aesthetically pleasing.
              </p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Sanction Town Planning</h3>
              <p className="text-gray-600">
                We guide and assist in obtaining the necessary town planning sanctions, approvals, and permissions for your construction projects.
              </p>
            </div>

            {/* Additional Service Cards */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Project Management</h3>
              <p className="text-gray-600">
                Our experienced project managers ensure that your projects are delivered on time, within budget, and to the highest standards.
              </p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Building Architecture</h3>
              <p className="text-gray-600">
                We provide architectural design services that prioritize functionality, aesthetics, and sustainability for both residential and commercial projects.
              </p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Civil Engineering</h3>
              <p className="text-gray-600">
                Our civil engineering services cover everything from structural design to site development, ensuring that your projects meet all technical and safety standards.
              </p>
            </div>

            <div className="bg-gray-100 shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Legal & Compliance Services</h3>
              <p className="text-gray-600">
                We assist with navigating legal requirements, obtaining permits, and ensuring full compliance with local regulations for construction and development projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            At Shree Shakti Builder & Developers, we are committed to providing exceptional service, maintaining integrity, and prioritizing customer satisfaction. Our core values include:
          </p>
          <ul className=" text-lg text-gray-600">
            <li>Quality Assurance: Delivering the highest quality in everything we do.</li>
            <li>Customer-Centric Approach: Focused on meeting and exceeding client expectations.</li>
            <li>Innovation: Embracing new technologies and solutions for better outcomes.</li>
            <li>Reliability: Always on time, on budget, and fully accountable.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Aboutinfo;
