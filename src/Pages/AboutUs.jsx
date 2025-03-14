import React from 'react';
import '../index.css'




const AboutUs = () => {
  return (
    <>
      <section className="bg-white py-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Badimalika Secondary School of Kalikot</h1>
          <p className="text-lg text-gray-600">
            Empowering young minds through excellence in education, innovation, and cultural values.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To foster academic excellence and personal growth by providing a dynamic learning environment
              where students are nurtured to realize their full potential and contribute to society meaningfully.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be a leading institution in Nepal that develops confident, innovative, and globally-aware
              citizens ready to meet future challenges.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/uploads/school.jpg"
                alt="School Image"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed">
                Badimalika Secondary School, Kalikot is a public academic institute located in Syuna, Raskot, Kalikot district, Karnali Province of Nepal. It is affiliated to National Examinations Board (NEB) & Council for Technical Education and Vocation Training (CTEVT) and approved by Ministry of Education (MoE), Nepal. This secondary school offers Ten Plus Two programs under Management, Humanities, Education and Agriculture Streams.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Badimalika Secondary School, Kalikot also offers vocational programs such as JTA in Plant Science for 40 seats each year. This secondary school has been offering agriculture programs such as Ten Plus Two in Animal Science from 2015 AD. It has been imparting education with various facilities including scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-trophy text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold">10+ Awards</h3>
              <p className="text-gray-600 text-sm">In academic and extracurricular excellence.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-user-graduate text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold">95% Success</h3>
              <p className="text-gray-600 text-sm">In higher education placements.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-heart text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold">Community Projects</h3>
              <p className="text-gray-600 text-sm">Involved in local development initiatives.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-star text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-bold">Top Rankings</h3>
              <p className="text-gray-600 text-sm">Recognized as one of the best schools in Nepal.</p>
            </div>
          </div>
        </div>
      </section>
  
  
    </>
  );
};

export default AboutUs;
