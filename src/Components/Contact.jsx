import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Nav />

            {/* Hero Section */}
            {/* <div className="relative h-[350px] bg-[#0D1B46]">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">Contact Us</h1>
                </div>
            </div> */}
            <div className="relative">
                <div style={{ backgroundImage: `url('/banner 2.png')`, height: "550px", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        {/* <h1 className="text-5xl font-bold text-white">Our Gallery</h1> */}
                    </div>
                </div>
            </div>
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link to="/" className="text-xl font-semibold">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-xl font-semibold mt-1" />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-xl font-semibold text-black">
                                Contact
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#0D1B46]">Get in Touch</h2>
                        <p className="text-lg text-gray-600">
                            We welcome your questions, comments, and feedback. Please feel free to contact us using any of the following methods:
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <FaPhone className="text-2xl text-[#050676]" />
                                <div>
                                    <h3 className="text-xl font-semibold">Phone</h3>
                                    <p className="text-gray-600">+9550345393 (Main Campus)</p>
                                    <p className="text-gray-600">+9845110707 (Admissions)</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-2xl text-[#050676]" />
                                <div>
                                    <h3 className="text-xl font-semibold">Email</h3>
                                  
                                    <p className="text-gray-600">stmarysglobal25@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-2xl text-[#050676]" />
                                <div>
                                    <h3 className="text-xl font-semibold">Address</h3>
                                    <p className="text-gray-600">
                                        ST. MARY'S ENGLISH MEDIUM SCHOOL<br />
                                        Motukupalli, Kadiri - 515 591<br />
                                        Sri Sathya Sai District,<br />
                                        Andhra Pradesh, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold text-[#0D1B46] mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050676]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050676]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050676]"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050676]"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                                <select
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050676]"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="admission">Admission Enquiry</option>
                                    <option value="general">General Enquiry</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="complaint">Complaint</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                                <textarea
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#050676]"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#0D1B46] text-white py-3 px-6 rounded-lg hover:bg-[#adefee] transition-colors font-semibold text-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-[#0D1B46] mb-6">Our Location</h2>
                    <div className="h-[400px] rounded-xl overflow-hidden">
                        <iframe
                            src="https://maps.google.com/maps?q=ST.+MARY'S+ENGLISH+MEDIUM+SCHOOL+MOTUKUPALLI+KADIRI+515591+SRI+SATHYA+SAI+DISTRICT+ANDHRA+PRADESH&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
