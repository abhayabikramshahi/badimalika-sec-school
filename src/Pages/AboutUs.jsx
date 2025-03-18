import React from 'react';
import '../index.css'

import KrishnaParsad from '../image-teacher/Krishna.jpg';
import ManojParsadShah from '../image-teacher/manoj.jpg';
import Mekindra from '../image-teacher/mekindra.jpg';
import DK from '../image-teacher/dk.jpg';
import KALPANA from '../image-teacher/kalpana.jpg';
import HEMRAJ from '../image-teacher/hemraj.jpg';
import Maha from '../image-teacher/mahachor.jpg';
import prem from '../image-teacher/prem.jpg';
import dharma from '../image-teacher/dharma.jpg';
import pushpa from '../image-teacher/pushpa.jpg';
import pramood from '../image-teacher/pramood.jpg';
import dipraj from '../image-teacher/dipraj.jpg';
import parbhu from '../image-teacher/parbhulal.jpg';
import lanka from '../image-teacher/lanka.jpg';
import preetam from '../image-teacher/preetam.jpg';
import upendra from '../image-teacher/upendra.jpg'
import Yamuna from '../image-teacher/yamuna.jpg'
import krishnasanjyal from '../image-teacher/k-s.jpg';
import dhanaparsad from '../image-teacher/dhanap.jpg';
import sportsteacher from '../image-teacher/jiban.jpg';
import dhurba from '../image-teacher/dhurbasanj.jpg';
import buddhiparsad from '../image-teacher/buddhiparsad.jpg';




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
      <section className="bg-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {dipraj}
            alt="Chairperson"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Dipraj Shahi</h3>
          <p className="text-gray-600">Chairperson</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {pushpa}
            alt="Principal"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">PushpaRaj Baral</h3>
          <p className="text-gray-600">Principal</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {pramood}
            alt="Vice Principal"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Pramood Kumar Shahi</h3>
          <p className="text-gray-600">Vice Principal</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {Maha}
            alt="Vice Principal"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Maha Parsad Baral</h3>
          <p className="text-gray-600">Vice Principal</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {parbhu}
            alt="Senior Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Parbhulal Neupane</h3>
          <p className="text-gray-600">Senior Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {ManojParsadShah}
            alt="Mathmatecian Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Manoj Parsad Shah</h3>
          <p className="text-gray-600">Mathmatecian Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {upendra}
            alt="Mathmatecian"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Upendra Parsad Neupane</h3>
          <p className="text-gray-600">Mathmatecian Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {KrishnaParsad}
            alt="English Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Krishna Prasad Baral</h3>
          <p className="text-gray-600">English Teacher</p>
        </div>


        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {KALPANA}
            alt="Accountancy Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Kalpana Shahi Bam</h3>
          <p className="text-gray-600">Accountancy Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {HEMRAJ}
            alt="English Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Hemraj Neupane</h3>
          <p className="text-gray-600">English Teacher</p>
        </div>
        
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {buddhiparsad}
            alt="Nepali Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Buddhi Parsad Adhikari</h3>
          <p className="text-gray-600">Nepali Teacher</p>
        </div>
        
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {dhurba}
            alt="Nepali Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Dhurba Raj Sanjyal</h3>
          <p className="text-gray-600">Nepali Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {lanka}
            alt="Business Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Lanka Bhadur Shahi</h3>
          <p className="text-gray-600">Business Teacher</p>
        </div>  <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {prem}
            alt="Internal Management team"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Prem Bhadur Shahi</h3>
          <p className="text-gray-600">Internal Management team</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {Mekindra}
            alt="All Rounder"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Mekindra Bhadur Shahi</h3>
          <p className="text-gray-600">All Rounder</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Nepali Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Sobha Shahi</h3>
          <p className="text-gray-600">Nepali Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {DK}
            alt="English Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Dil Kumar Chaudhary</h3>
          <p className="text-gray-600">English Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="English Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">TJ Janala</h3>
          <p className="text-gray-600">English Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Nepali Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Alina Kumari Shahi</h3>
          <p className="text-gray-600">Nepali Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Science Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Meera Shahi</h3>
          <p className="text-gray-600">Science Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Social Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Kirta Raj Bista</h3>
          <p className="text-gray-600">Social Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {dharma}
            alt="Math Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Dharma Raj Baral</h3>
          <p className="text-gray-600">Math Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Children based education teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Baali Kumari Shahi</h3>
          <p className="text-gray-600">Children based education teacher</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {dhanaparsad}
            alt="Science Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Dhana Parsad Upadhya</h3>
          <p className="text-gray-600">Science Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Science Teachers"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Dil Raj Phadera</h3>
          <p className="text-gray-600">Science Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {Yamuna}
            alt="ECD HEAD"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Yamuna Bhauju</h3>
          <p className="text-gray-600">ECD HEAD</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Mother/Teacher"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Resham Kala Shahi</h3>
          <p className="text-gray-600">Mother/Teacher</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Accountant"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Lokendra Shahi</h3>
          <p className="text-gray-600">Accountant</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {krishnasanjyal}
            alt="Office Management Team"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Kishna Badhur Sanjyal</h3>
          <p className="text-gray-600">Office Management Team</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Helper"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Dhurba Bahadur Shahi</h3>
          <p className="text-gray-600">Helper</p>
        </div>
       
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {preetam}
            alt="Hostel Incharge"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Preetam Bahadur Shahi</h3>
          <p className="text-gray-600">Hostel Incharge</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src= {sportsteacher}
            alt="Sport Teacher/DI"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Jiban Shahi</h3>
          <p className="text-gray-600">Sport Teacher/DI</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <img
            src="https://via.placeholder.com/150"
            alt="Guard"
            className="rounded-full mx-auto mb-4 w-24 h-24"
          />
          <h3 className="text-xl font-bold">Kamal Badhur Shahi</h3>
          <p className="text-gray-600">Guard</p>
        </div>
     
      </div>
    </div>
  </section>

  <section className="py-12" id="Gallery">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/1.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/2.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/3.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/4.jpeg"
          alt="Bridge and Water"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/5.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/6.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/7.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/8.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/9.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/10.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/11.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/12.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/13.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/14.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/15.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/16.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/17.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/18.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/19.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
        <img
          src="/uploads-school/20.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src="/uploads-school/21.jpeg"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

  
  
    </>
  );
};

export default AboutUs;
