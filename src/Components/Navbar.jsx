import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("transform"); // For smoother transition
    };

    const toggleDropdown = (dropdownId) => {
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.toggle("hidden");
        dropdown.classList.toggle("transform"); // For smoother dropdown
    };

    return (
        <nav className="bg-white shadow-md z-10">
            <div className="flex justify-between items-center py-4 px-6">
                <div className="flex-shrink-0">
                    <a href="#" className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition-colors duration-300">
                        Badimalika School
                    </a>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 10.882l7.997-4.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 5-8-5V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>info@badimalikasecschool.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm12 4H6v2h8V9z" clipRule="evenodd" />
                        </svg>
                        <span>+977-9758900824</span>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="hidden md:flex space-x-8">
                        <Link className="hover:text-blue-600 font-medium transition-colors duration-300" to="/">
                            Home
                        </Link>
                        <Link className="hover:text-blue-600 font-medium transition-colors duration-300" to="/about-us">
                            About Us
                        </Link>
                        <div className="relative group">
                            <button className="flex items-center space-x-1 hover:text-blue-600 font-medium">
                                <span>Academics</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link className="block px-4 py-2 hover:bg-gray-100" to="/academics/curriculum">
                                    Curriculum
                                </Link>
                                <Link className="block px-4 py-2 hover:bg-gray-100" to="/academics/faculty">
                                    Faculty
                                </Link>
                                <Link className="block px-4 py-2 hover:bg-gray-100" to="/academics/admission">
                                    Admission
                                </Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <button className="flex items-center space-x-1 hover:text-blue-600 font-medium">
                                <span>Activities</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link className="block px-4 py-2 hover:bg-gray-100" to="/activities/sports">
                                    Sports
                                </Link>
                                <Link className="block px-4 py-2 hover:bg-gray-100" to="/activities/clubs">
                                    Clubs
                                </Link>
                                <Link className="block px-4 py-2 hover:bg-gray-100" to="/activities/events">
                                    Events
                                </Link>
                            </div>
                        </div>
                        <Link className="hover:text-blue-600 font-medium transition-colors duration-300" to="/contact">
                            Contact
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            id="mobile-menu-btn"
                            className="text-gray-800 focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" className="hidden md:hidden bg-white shadow-lg transition-transform transform origin-top">
                <Link className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300" to="/" onClick={toggleMobileMenu}>
                    Home
                </Link>
                <Link className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300" to="/about-us" onClick={toggleMobileMenu}>
                    About Us
                </Link>
                <div className="relative">
                    <button id="mobile-academics-btn" className="w-full flex justify-between px-4 py-2 hover:bg-gray-100 transition-colors duration-300" onClick={() => toggleDropdown("mobile-academics")}>
                        <span>Academics</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div id="mobile-academics" className="hidden bg-gray-100 transition-transform transform origin-top">
                        <Link className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300" to="/academics/curriculum" onClick={toggleMobileMenu}>
                            Curriculum
                        </Link>
                        <Link className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300" to="/academics/faculty" onClick={toggleMobileMenu}>
                            Faculty
                        </Link>
                        <Link className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300" to="/academics/admission" onClick={toggleMobileMenu}>
                            Admission
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <button id="mobile-activities-btn" className="w-full flex justify-between px-4 py-2 hover:bg-gray-100 transition-colors duration-300" onClick={() => toggleDropdown("mobile-activities")}>
                        <span>Activities</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div id="mobile-activities" className="hidden bg-gray-100 transition-transform transform origin-top">
                        <Link className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300" to="/activities/sports" onClick={toggleMobileMenu}>
                            Sports
                        </Link>
                        <Link className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300" to="/activities/clubs" onClick={toggleMobileMenu}>
                            Clubs
                        </Link>
                        <Link className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300" to="/activities/events" onClick={toggleMobileMenu}>
                            Events
                        </Link>
                    </div>
                </div>
                <Link className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300" to="/contact/contact" onClick={toggleMobileMenu}>
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
