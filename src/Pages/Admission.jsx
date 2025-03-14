import React from 'react';

const Admission = () => {
  return (
    <main className="max-w-4xl mx-auto mt-10 bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Admission Policy</h2>
      <p className="text-gray-700 mb-6">
        Welcome to Badimalika Secondary School! We are committed to providing a fair and transparent admission
        process that allows every student the opportunity to join our institution and excel academically, socially,
        and personally.
      </p>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Eligibility Criteria</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Students applying for Grade 1 must be at least 5 years old.</li>
          <li>Admission to higher grades depends on seat availability and past academic performance.</li>
          <li>Specific programs like vocational training or +2 require additional qualifications.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">How to Apply</h3>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Collect the admission form from the school office.</li>
          <li>Submit required documents (birth certificate, school records, photos).</li>
          <li>Attend an entrance exam or interview (if applicable).</li>
          <li>Pay the admission fee to confirm your spot.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Important Dates</h3>
        <p className="text-gray-700">
          Admission forms will be available from <strong>March 1</strong>. The academic session starts in <strong>mid-April</strong>. 
          Contact the school office for specific details.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h3>
        <p className="text-gray-700">For any inquiries regarding admissions, feel free to reach out to us:</p>
        <p className="text-gray-700 mt-2">
          <strong>Phone:</strong> +977-1234567890 <br />
          <strong>Email:</strong> info@badimalikaschool.edu.np
        </p>
      </section>
    </main>
  );
};

export default Admission;
