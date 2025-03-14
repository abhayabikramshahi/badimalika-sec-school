import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="relative z-[-2] bg-cover bg-center h-screen" style={{ backgroundImage: "url('uploads/hero-backend.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">विद्यालयमा स्वागत छ</h1>
            <p className="text-lg md:text-2xl mb-8">नेपालको अग्रणी शैक्षिक संस्था</p>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-800">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Badimalika Secondary School </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Shaping young minds with quality education and holistic development since 2032 B.S.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Qualified Teachers</h3>
                <p className="text-gray-600">
                  Learn from experienced educators dedicated to nurturing student potential.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Modern Facilities</h3>
                <p className="text-gray-600">
                  Enjoy a conducive learning environment with state-of-the-art classrooms and labs.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Extra-Curricular Activities</h3>
                <p className="text-gray-600">
                  Participate in sports, arts, and cultural programs to develop all-around skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Notice Board</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-100 rounded-lg shadow-md flex items-center">
                <span className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mr-4">1</span>
                <div>
                  <h3 className="font-semibold">Results of second terminal exmanation launching soon</h3>
                  <p className="text-sm text-gray-600">Updated on: December 30, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Programs Offered</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Primary Education</h3>
                <p className="text-gray-600">Building a strong foundation for young learners from Class 1 to Class 5.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Secondary Education</h3>
                <p className="text-gray-600">Focused and structured learning from Class 6 to Class 10.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Higher Secondary Education</h3>
                <p className="text-gray-600">Advanced studies for Class 11 and 12 with a variety of streams to choose from.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Students Say</h2>
          <div className="flex space-x-8 overflow-x-auto">
            <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold mb-4">"A life-changing experience!"</p>
              <p className="text-gray-600">The school has helped me become more confident and achieve my dreams.</p>
              <p className="text-sm text-gray-500 mt-4">- Anjali, Class 12</p>
            </div>
            <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold mb-4">"A second home!"</p>
              <p className="text-gray-600">The teachers are supportive, and the environment is nurturing.</p>
              <p className="text-sm text-gray-500 mt-4">- Raj, Class 10</p>
            </div>
            <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold mb-4">"A place of knowledge and growth!"</p>
              <p className="text-gray-600">I gained not only academic knowledge but also life skills here.</p>
              <p className="text-sm text-gray-500 mt-4">- Maya, Alumni</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="font-semibold text-xl">Best School Community</h3>
            </div>
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl text-blue-500 mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="font-semibold text-xl">Highest Academic Growth Rate</h3>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Modernize School of Kalikot</h3>
              <p className="text-gray-400 mb-4">
                Providing quality education and a nurturing environment for students to grow academically and socially.
              </p>
              <p className="text-gray-400">Address: Kalikot, Nepal</p>
              <p className="text-gray-400">Phone: +977-9758900824</p>
              <p className="text-gray-400">Email: info@schoolkalikot.edu.np</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about-us/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/admission/admission" className="text-gray-400 hover:text-white">Admissions</Link></li>
                <li><Link to="/contact/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
