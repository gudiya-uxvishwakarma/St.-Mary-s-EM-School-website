import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

export default function SecondarySchool() {
    return (
        <div>
            <Nav />
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
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
                                    Secondary School
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="mt-8">
                        <h1 className="text-4xl font-bold text-[#0D1B46] mb-8">Secondary School (Grades 9-10)</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-2xl font-semibold text-[#050676] mb-4">Board Examination Preparation</h2>
                                <ul className="space-y-2">
                                    <li>• Comprehensive Study Material</li>
                                    <li>• Regular Mock Tests</li>
                                    <li>• Previous Years' Question Practice</li>
                                    <li>• Extra Classes for Weak Students</li>
                                    <li>• Individual Attention</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-2xl font-semibold text-[#050676] mb-4">Academic Subjects</h2>
                                <ul className="space-y-2">
                                    <li>• Science (Physics, Chemistry, Biology)</li>
                                    <li>• Mathematics</li>
                                    <li>• Social Science</li>
                                    <li>• Languages</li>
                                    <li>• Information Technology</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold text-[#050676] mb-4">Career Guidance</h2>
                            <div className="space-y-4">
                                <ul className="space-y-2">
                                    <li>• Stream Selection Counseling</li>
                                    <li>• Career Orientation Workshops</li>
                                    <li>• Expert Sessions</li>
                                    <li>• Aptitude Testing</li>
                                    <li>• Parent Counseling Sessions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold text-[#050676] mb-4">Additional Features</h2>
                            <div className="space-y-4">
                                <ul className="space-y-2">
                                    <li>• Educational Field Trips</li>
                                    <li>• Science Exhibitions</li>
                                    <li>• Sports Activities</li>
                                    <li>• Cultural Programs</li>
                                    <li>• Leadership Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}