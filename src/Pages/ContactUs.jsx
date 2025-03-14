import React from 'react';

const ContactUs = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Have questions about admissions, events, or general inquiries? Fill out the form below, and we’ll get back to you shortly!
            </p>
            <form action="#" method="POST" className="bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-blue-500 text-2xl"></i>
                <div>
                  <h3 className="text-lg font-bold">School Address</h3>
                  <p className="text-gray-600">Modernize School of Kalikot, Kalikot, Nepal</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <i className="fas fa-phone text-blue-500 text-2xl"></i>
                <div>
                  <h3 className="text-lg font-bold">Contact Number</h3>
                  <p className="text-gray-600">+977-123-456789</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start space-x-4">
                <i className="fas fa-envelope text-blue-500 text-2xl"></i>
                <div>
                  <h3 className="text-lg font-bold">Email</h3>
                  <p className="text-gray-600">info@schoolkalikot.edu.np</p>
                </div>
              </div>
              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <i className="fas fa-clock text-blue-500 text-2xl"></i>
                <div>
                  <h3 className="text-lg font-bold">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Us</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.219589558712!2d85.32395971506127!3d27.70903108279119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1911c1d02b77%3A0xdf9128c4df74b11e!2sModernize%20School!5e0!3m2!1sen!2snp!4v1699887397464!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
