import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
export default function Curriculum() {
    return (
        <div>
            <Nav />
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-[#0D1B46] mb-8 text-center">Sports</h1>
                    
                    <div className="bg-white p-6 rounded-lg shadow text-lg leading-relaxed space-y-6">
                        <p>
                            Sports play a vital role in schooling. We encourage and give importance to building sportsmanship.
                            A sound mind in a healthy body, combined with skilled work, is essential for success. This philosophy is
                            embedded in the educational framework of Mookambika School.
                        </p>

                        <p>
                            Sports, including both indoor and outdoor games, are given equal importance at our school. This promotes fitness
                            and entertainment for students. Special attention is given to nurturing team spirit, sportsmanship, discipline,
                            leadership, confidence, and other positive traits among children.
                        </p>

                        <p>
                            Numerous sports events and competitions are organized throughout the year. Victorious students are honored with
                            prizes, medals, certificates, shields, and mementos. Students are also grouped into houses for the Annual Sports
                            Meet, adding fun and enthusiasm to the experience.
                        </p>

                        <p>
                            Indoor games include <strong>chess, carrom, and ludo</strong>, while outdoor games include <strong>athletics, volleyball, throw ball,
                            cricket, badminton, and leg cricket</strong>. Sports are conducted every year, and the Annual Sports Meet is held
                            once a year. To support physical fitness, students are taken to Donkala field weekly. Our students also compete
                            in state-level competitions in sports like cricket and athletics.
                        </p>

                        <p>
                            Sports education not only enhances physical stamina, but also builds discipline, obedience, determination, and
                            willpower. While academic education strengthens reasoning, mental development, and vocational skills, sports
                            contribute to the all-round development of students.
                        </p>

                        <p>
                            As the saying goes, “All work and no play makes Jack a dull boy.” Academic learning and sports education complement
                            each other—they are two sides of the same coin. When integrated with academics, sports enhance leadership, teamwork,
                            sharing, and tolerance, ultimately shaping a well-rounded personality.
                        </p>
                    </div>
                </div>
                {/* Image Grid */}
<div className="mt-12">
    <h2 className="text-2xl font-semibold text-[#050676] mb-6 text-center">Sports Highlights</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <img src={img1} alt="Sports 1" className="w-full h-64 object-cover rounded-lg shadow" />
    <img src={img2} alt="Sports 2" className="w-full h-64 object-cover rounded-lg shadow" />
    <img src={img3} alt="Sports 3" className="w-full h-64 object-cover rounded-lg shadow" />
    <img src={img4} alt="Sports 4" className="w-full h-64 object-cover rounded-lg shadow" />
    <img src={img5} alt="Sports 5" className="w-full h-64 object-cover rounded-lg shadow" />
    <img src={img6} alt="Sports 6" className="w-full h-64 object-cover rounded-lg shadow" />
    </div>
</div>

            </div>
            <Footer />
        </div>
    );
}
