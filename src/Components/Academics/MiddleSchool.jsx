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

export default function MiddleSchool() {
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
                                    Middle School
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="mt-8">
                        <h1 className="text-4xl font-bold text-[#0D1B46] mb-8">Middle School (Grades 6-8)</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-2xl font-semibold text-[#050676] mb-4">Academic Program</h2>
                                <ul className="space-y-2">
                                    <li>• Advanced Mathematics</li>
                                    <li>• Science (Physics, Chemistry, Biology)</li>
                                    <li>• Social Sciences</li>
                                    <li>• Languages (English, Hindi, Third Language)</li>
                                    <li>• Computer Science</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-2xl font-semibold text-[#050676] mb-4">Co-Curricular Activities</h2>
                                <ul className="space-y-2">
                                    <li>• Sports and Athletics</li>
                                    <li>• Music and Performing Arts</li>
                                    <li>• Science Club</li>
                                    <li>• Literary Club</li>
                                    <li>• Environmental Club</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold text-[#050676] mb-4">Learning Approach</h2>
                            <div className="space-y-4">
                                <ul className="space-y-2">
                                    <li>• Interactive Learning Methods</li>
                                    <li>• Laboratory Experiments</li>
                                    <li>• Project-Based Learning</li>
                                    <li>• Field Trips and Excursions</li>
                                    <li>• Digital Learning Integration</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold text-[#050676] mb-4">Student Development</h2>
                            <div className="space-y-4">
                                <ul className="space-y-2">
                                    <li>• Leadership Programs</li>
                                    <li>• Career Guidance Sessions</li>
                                    <li>• Life Skills Development</li>
                                    <li>• Personality Development</li>
                                    <li>• Regular Parent-Teacher Meetings</li>
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