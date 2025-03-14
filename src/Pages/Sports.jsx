import React from "react";
import { Link } from "react-router-dom";
const Sports = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
     
      {/* Main Content */}
      <main className="max-w-5xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Sports at Badimalika Secondary School</h2>

        {/* Games Played */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Games Played in Our School</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Game 1: Football */}
            <div className="flex items-center bg-gray-50 p-4 border rounded-md shadow-sm">
              <div className="h-12 w-12 mr-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="white" />
                  <path d="M12 2l2 6h-4l2-6zm8.66 4.34l-5.66 4.66-2-6 7.66 1.34zm0 11.32l-5.66-4.66 2 6 3.66-1.34zm-17.32 0l5.66-4.66-2 6-3.66-1.34zm0-11.32l5.66 4.66-2-6-3.66 1.34zm10.66 11.32l-2-6h4l-2 6z" fill="black"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Football</h4>
                <p className="text-sm text-gray-600">Teamwork and agility on the field.</p>
              </div>
            </div>

            {/* Game 2: Basketball */}
            <div className="flex items-center bg-gray-50 p-4 border rounded-md shadow-sm">
              <div className="h-12 w-12 mr-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="white" />
                  <path d="M5.1 5.1a9.5 9.5 0 0 1 13.8 13.8M5.1 18.9a9.5 9.5 0 0 1 13.8-13.8" stroke="black" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Basketball</h4>
                <p className="text-sm text-gray-600">Building strategy and precision.</p>
              </div>
            </div>

            {/* Game 3: Volleyball */}
            <div className="flex items-center bg-gray-50 p-4 border rounded-md shadow-sm">
              <div className="h-12 w-12 mr-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="white" />
                  <path d="M12 2v20M2 12h20M4.22 4.22l15.56 15.56M4.22 19.78L19.78 4.22" stroke="black" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Volleyball</h4>
                <p className="text-sm text-gray-600">Coordination and teamwork.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <p>Coming soon..</p>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Sports;
