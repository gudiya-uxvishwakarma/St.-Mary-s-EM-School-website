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

export default function SeniorSecondary() {
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
                                    Senior Secondary
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="mt-8">
                        <h1 className="text-4xl font-bold text-[#0D1B46] mb-8">Senior Secondary (Grades 11-12)</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-2xl font-semibold text-[#050676] mb-4">Science Stream</h2>
                                <ul className="space-y-2">
                                    <li>• Physics</li>
                                    <li>• Chemistry</li>
                                    <li>• Mathematics/Biology</li>
                                    <li>• English</li>
                                    <li>• Computer Science/Physical Education</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-2xl font-semibold text-[#050676] mb-4">Commerce Stream</h2>
                                <ul className="space-y-2">
                                    <li>• Accountancy</li>
                                    <li>• Business Studies</li>
                                    <li>• Economics</li>
                                    <li>• Mathematics/Informatics Practices</li>
                                    <li>• English</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold text-[#050676] mb-4">College Preparation</h2>
                            <div className="space-y-4">
                                <ul className="space-y-2">
                                    <li>• Entrance Exam Preparation</li>
                                    <li>• Career Counseling</li>
                                    <li>• College Application Guidance</li>
                                    <li>• Personality Development</li>
                                    <li>• Interview Preparation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold text-[#050676] mb-4">Additional Features</h2>
                            <div className="space-y-4">
                                <ul className="space-y-2">
                                    <li>• Regular Parent-Teacher Meetings</li>
                                    <li>• Industrial Visits</li>
                                    <li>• Expert Lectures</li>
                                    <li>• Leadership Programs</li>
                                    <li>• Research Projects</li>
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