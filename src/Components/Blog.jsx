import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('Events');

    const blogPosts = [
        {
            id: 1,
            title: "Science Laboratory",
            excerpt: "Students experience the practical way of learning. They are given opportunity to experiment on different topics...",
            category: "Events",
            image: "/blog 1.png",
        },
        {
            id: 2,
            title: "Excursion",
            excerpt: "Children are taken to educational trip to different places to acquire knowledge...",
            category: "Events",
            image: "/blog 2.png",
        },
        {
            id: 3,
            title: "Spiritual classes",
            excerpt: "Spiritual classes are held in order to help the child to balance emotions and to ignite their minds with peace and knowledge...",
            category: "Events",
            image: "/blog 3.png",
        },
        {
            id: 4,
            title: "Competitions",
            excerpt: "Our children have won prizes in interschool competitions...",
            category: "Events",
            image: "/blog 4.png",
        }
    ];

    const filteredPosts = activeCategory === 'Events'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="min-h-screen flex flex-col">
            <Nav />

            {/* Hero Section */}
            <div
                className="relative h-[350px] bg-cover bg-center"
                style={{ backgroundImage: `url('/banner 3.png')` }}
            >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    {/* <h1 className="text-5xl font-bold text-white">School Blog</h1> */}
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
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-[#0D1B46] mb-3 hover:text-[#050676]">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
