import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import name from './Images/Admissions.jpg';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

export default function Admissions() {
    const [selectedClass, setSelectedClass] = useState('');
    const [formData, setFormData] = useState({
        studentName: '',
        dob: '',
        gender: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        previousSchool: '',
        documents: []
    });

   // Handles text and dropdown changes
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

// Handles file uploads
const handleFileChange = (e) => {
    setFormData(prev => ({
        ...prev,
        documents: Array.from(e.target.files)
    }));
};

// Handles class dropdown separately
const handleClassChange = (e) => {
    const value = e.target.value;
    setSelectedClass(value);
    setFormData(prev => ({
        ...prev,
        class: value
    }));
};

// Handles submit
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
};


    return (
        <div>
            <Nav />
            <div style={{ backgroundImage: `url(${name})`, height: "350px", backgroundSize: 'cover' }}></div>

            <div className='my-10 mx-4 md:mx-20'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link to="/" className='text-xl font-semibold'>Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className='text-xl font-semibold mt-1' />
                        <BreadcrumbItem>
                            <BreadcrumbLink className='text-xl font-semibold text-black'>
                                Admissions
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="mt-10">
                    {/* Admission Process Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-10">
                        <h2 className="text-3xl font-bold text-[#0D1B46] mb-6">Admission Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3">Step 1: Application</h3>
                                <p>Fill out the online application form with all required details and documents</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3">Step 2: Assessment</h3>
                                <p>Student assessment and parent interaction</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3">Step 3: Admission</h3>
                                <p>Fee payment and document verification</p>
                            </div>
                        </div>
                    </div>

                    {/* Required Documents */}
                    <div className="bg-white p-6 rounded-lg shadow-md mb-10">
                        <h2 className="text-3xl font-bold text-[#0D1B46] mb-6">Required Documents</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg">
                            <li>Birth Certificate</li>
                            <li>Previous School Transfer Certificate</li>
                            <li>Report Cards of Last 2 Years</li>
                            <li>Passport Size Photographs</li>
                            <li>Aadhar Card Copy</li>
                            <li>Residential Proof</li>
                        </ul>
                    </div>

                    {/* Application Form */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#0D1B46] mb-6">Admission Application Form</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg font-medium mb-2">Class Applying For</label>
                                <select 
    name="class"
    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
    value={selectedClass}
    onChange={handleClassChange}
>
    <option value="">Select Class</option>
    <option value="LKG">LKG</option>
    <option value="UKG">UKG</option>
    {[...Array(12)].map((_, i) => (
        <option key={i} value={`Class ${i + 1}`}>Class {i + 1}</option>
    ))}
</select>

                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-2">Student Name</label>
                                <input 
                                    type="text"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-2">Date of Birth</label>
                                <input 
                                    type="date"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-2">Gender</label>
                                <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
>
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
</select>

                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-lg font-medium mb-2">Parent/Guardian Name</label>
                                <input 
                                    type="text"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
                                    placeholder="Parent/Guardian Full Name"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-2">Email</label>
                                <input 
                                    type="email"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium mb-2">Phone Number</label>
                                <input 
                                    type="tel"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-lg font-medium mb-2">Address</label>
                                <textarea 
    name="address"
    value={formData.address}
    onChange={handleChange}
    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
    rows="3"
    placeholder="Full Address"
></textarea>

                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-lg font-medium mb-2">Previous School (if any)</label>
                                <input 
                                    type="text"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
                                    placeholder="Previous School Name"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-lg font-medium mb-2">Upload Documents</label>
                                <input 
    type="file"
    name="documents"
    onChange={handleFileChange}
    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#050676]"
    multiple
    accept=".pdf,.jpg,.jpeg,.png"
/>

                                <p className="text-sm text-gray-500 mt-1">Upload all required documents in PDF or image format</p>
                            </div>

                            <div className="md:col-span-2 flex justify-center">
                            <button 
    type="submit"
    className="px-8 py-3 bg-[#050676] hover:bg-[#adefee] text-white font-semibold text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-[#050676] transition duration-300"
>
    Submit Application
</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}