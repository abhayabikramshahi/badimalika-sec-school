import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum = () => {

  // Mobile Menu Toggle
  const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  };

  // Mobile Dropdown Toggles
  const toggleAcademicsDropdown = () => {
    const dropdown = document.getElementById('mobile-academics');
    dropdown.classList.toggle('hidden');
  };

  const toggleActivitiesDropdown = () => {
    const dropdown = document.getElementById('mobile-activities');
    dropdown.classList.toggle('hidden');
  };

  return (
    <div>
     

      {/* Main Content Section */}
      <main className="max-w-6xl mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Curriculum Information
          </h2>
          <p className="text-gray-700 leading-7">
            At Badimalika Secondary School, we are committed to delivering a comprehensive education that aligns with Nepal's <strong>National Curriculum Framework (2076)</strong>. Our goal is to foster holistic development, ensuring students excel academically, socially, and morally while preparing for modern challenges.
          </p>
        </section>

        {/* Programs Offered */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Programs Offered
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded">
              <h4 className="font-bold text-gray-800">Ten Plus Two (10+2) Programs</h4>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Education</li>
                <li>Management</li>
                <li>Humanities</li>
                <li>Animal Science</li>
              </ul>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded">
              <h4 className="font-bold text-gray-800">Vocational Programs</h4>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Junior Technical Assistant (JTA) in Plant Science</li>
                <li>Practical training in agriculture and farming techniques</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Educational Approach */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Educational Approach
          </h3>
          <p className="text-gray-700 leading-7">
            We provide a well-sequenced and cumulative curriculum that builds strong foundational knowledge and skills. Our emphasis on <strong>practical learning</strong>, <strong>community engagement</strong>, and <strong>critical thinking</strong> ensures students are well-prepared for real-world opportunities.
          </p>
        </section>

        {/* Subjects */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Subjects Offered
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded shadow-sm">
              <h4 className="font-bold text-gray-800">Core Subjects</h4>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Computing</li>
                <li>Religious Education (R.E.)</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow-sm">
              <h4 className="font-bold text-gray-800">Creative Curriculum</h4>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Art</li>
                <li>Design & Technology (D.T.)</li>
                <li>History</li>
                <li>Geography</li>
                <li>Music</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Additional Information
          </h3>
          <p className="text-gray-700 leading-7">
            For detailed syllabi and curriculum guidelines, please contact the school office or refer to the official resources provided by the <strong>Curriculum Development Centre (CDC) of Nepal</strong>. We also provide paper copies of all curriculum documents upon request.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Curriculum;
