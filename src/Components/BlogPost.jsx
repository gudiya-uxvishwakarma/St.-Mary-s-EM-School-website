import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { motion } from 'framer-motion';

import campusImage from '../Components/Images/sciexb.jpg';
import tips from '../Components/Images/excursion.jpg';
import sports from '../Components/Images/spiritual classes.jpg';
import cultural from '../Components/Images/compititions.jpg';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BlogPost() {
    const { id } = useParams();

    const blogPosts = [
        {
            id: 1,
            title: "Science Laboratory",
            content: `Our school is equipped with a state-of-the-art science laboratory designed to foster curiosity, experimentation, and hands-on learning among students.

Students from grades 6 to 12 actively participate in laboratory sessions as part of their science curriculum. They perform experiments in physics, chemistry, and biology, gaining practical experience that complements classroom theory. Activities range from chemical reactions and physics demonstrations to microscopic analysis in biology.`,
            image: campusImage,
        },
        {
            id: 2,
            title: "Excursion",
            content: `Children are taken to educational trip to different places to acquire knowledge. There will be one day and two days trip for the students. They are taken to historical places, temples, industries and picture places in order to give them real life experience.`,
            image: tips,
        },
        {
            id: 3,
            title: "Spiritual Classes",
            content: `We conduct regular spiritual classes for our students to help them find inner peace and develop mindfulness. These sessions include meditation, moral stories, and discussions led by experienced mentors.`,
            image: sports,
        },
        {
            id: 4,
            title: "Competitions",
            content: `Students participate in a variety of competitions at inter-school and district levels including debates, quiz contests, drawing, music, and dance. These help nurture creativity and competitive spirit.`,
            image: cultural,
        },
    ];

    const post = blogPosts.find(post => post.id === parseInt(id));

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col">
                <Nav />
                <div className="container mx-auto px-4 py-12 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Blog post not found</h1>
                    <Link to="/blog" className="mt-4 inline-block text-[#050676] hover:text-[#050676]">
                        ← Back to Blog
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const galleryImages = [
        post.image,
        '/default1.jpg',
        '/default2.jpg',
        '/default3.jpg'
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Nav />

            {/* Animated Hero Section */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover absolute top-0 left-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold text-white text-center px-4"
                    >
                        {post.title}
                    </motion.h1>
                </div>
            </div>

            {/* Breadcrumb */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="container mx-auto px-4 py-6"
            >
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link to="/" className="text-lg font-medium hover:underline">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-lg mt-1" />
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-lg font-semibold text-black">
                                {post.title}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="container mx-auto px-4 py-10"
            >
                <article className="max-w-4xl mx-auto">
                    <div className="prose prose-lg md:prose-xl prose-slate">
                        {post.content.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {/* Gallery */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className="overflow-hidden rounded-2xl shadow-lg"
                            >
                                <img
                                    src={img}
                                    alt={`gallery-${idx}`}
                                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                                />
                            </motion.div>
                        ))}
                    </div>
                </article>
            </motion.div>

            <Footer />
        </div>
    );
}
