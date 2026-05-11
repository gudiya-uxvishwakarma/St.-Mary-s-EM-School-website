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

export default function PrimarySchool() {
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
                                    Primary School
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="mt-8">
                        <h1 className="text-4xl font-bold text-[#0D1B46] mb-8">Primary School (Grades 1-5)</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-2xl font-semibold text-[#050676] mb-4">Academic Program</h2>
                                <ul className="space-y-2">
                                    <li>• Foundation in Language and Mathematics</li>
                                    <li>• Environmental Studies</li>
                                    <li>• Introduction to Science Concepts</li>
                                    <li>• Basic Computer Skills</li>
                                    <li>• Art and Craft</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-2xl font-semibold text-[#050676] mb-4">Learning Approach</h2>
                                <ul className="space-y-2">
                                    <li>• Activity-Based Learning</li>
                                    <li>• Play-Way Method</li>
                                    <li>• Story-Telling Sessions</li>
                                    <li>• Hands-on Experiments</li>
                                    <li>• Group Activities</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold text-[#050676] mb-4">Special Features</h2>
                            <div className="space-y-4">
                                <ul className="space-y-2">
                                    <li>• Regular Parent-Teacher Meetings</li>
                                    <li>• Specialized Art and Music Classes</li>
                                    <li>• Physical Education and Sports</li>
                                    <li>• Library Sessions</li>
                                    <li>• Cultural Activities</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold text-[#050676] mb-4">Assessment</h2>
                            <div className="space-y-4">
                                <p>Our primary school follows a continuous evaluation system:</p>
                                <ul className="space-y-2">
                                    <li>• Regular Class Assignments</li>
                                    <li>• Project Work</li>
                                    <li>• Term Examinations</li>
                                    <li>• Personality Development Assessment</li>
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