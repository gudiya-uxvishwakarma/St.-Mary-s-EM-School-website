import React from 'react'
// import name from './Images/Admissions.jpg';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Team() {

    const leaders = [
        {
            name: "Dr. Shivkumar Chinnusamy",
            title: "Managing Director",
            //   image: shivkumarImg,
            description:
                "A medical practitioner turned educator and entrepreneur, Dr. Shivkumar Chinnusamy has a very profound knowledge and rich experience across educational programmes nationally and globally. He strives to inspire the team to deliver more and better year on year and to stay grounded. With 4 campuses now – Erode, Salem, Trichy and Tirunelveli, he has come a long way as an expert to bring about strategies and to ensure campuses remain organic and unique. His learning never stops and has been part of many IB, Cambridge workshops and leadership training. Visits to schools in Europe and USA over the years have broadened his views on different educational systems.",
        },
        {
            name: "Ms. Kirthika Shivkumar",
            title: "Executive Director, TIPS",
            //   image: kirthikaImg,
            description:
                "Ms. Kirthika Shivkumar, the Executive Director of TIPS and Managing Trustee of Arram Charity Trust is a visionary, results-driven and equipped professional with years of verifiable success in the areas of education, administration, management and social welfare. Curriculum and instructional design, teacher training, academic administration, team building and strategic management are her strengths. She’s been instrumental in organising various awareness programs in the fields of healthcare, childcare, women development, and charity works. She plays a pivotal role in transforming TIPS into an academically rigorous school, offering the best of Indian & International education.",
        },
        {
            name: "Ms. Parasakthi Ayenan",
            title: "Academic Director – Early & Primary Years",
            //   image: parasakthiImg,
            description:
                "Ms. Parasakthi Ayenan is the Early Years and Primary Years Academic Director at TIPS. She has specialised experience of over 15 years in Kindergarten and Primary curriculum planning in IB, Waldorf and Montessori. She has an ardent passion for education, firmly believes that no child shall be left behind, overall well-being is inevitable for academic success and that we must attend to the development of the whole child to achieve excellence in academic spheres.",
        },
        {
            name: "Ms. Tamilarasi Dhamodharan",
            title: "Cambridge Pathway Academic Director",
            //   image: tamilarasiImg,
            description:
                "Ms. Tamilarasi Dhamodharan is our Cambridge Pathway Academic Director. After her tenure in the USA with Infosys and Bank of America, she joined the TIPS family in the year 2012. She now has a decade-long experience across national curricula CBSE and NIOS as well as International Baccalaureate (IB) and Cambridge International. She is currently responsible for implementing Cambridge International programmes in all our campuses. Celebrates student voice and research-driven environment. It is her constant endeavour to ensure purposeful student life through and beyond curriculum!",
        },
        {
            name: "Ms. Latha Maheshwari",
            title: "Academic Director – TIPS Erode",
            //   image: lathaImg,
            description:
                "Ms. Latha Maheshwari, a vibrant individual and dedicated educator, is the Academic Director of The Indian Public School, Erode. She has 37 years of experience in the educational field, which showcases her expertise in curriculum development and her role as a resource person. She began her career at Sriharikota as an IIT JEE Maths faculty member and served as the Principal of a Junior college in Andhra. She is an excellent mathematician with a notable teaching career. Her journey from IIT JEE Maths faculty to Principal and Director roles speaks volumes about her capacity to lead and inspire. Her ability to embrace and innovatively apply educational advancements showcases her as a forward-thinking academic director.",
        },
    ];


    return (
        <div>
            <div>
                <Nav />
                <div style={{ backgroundImage: `url(${name})`, height: "350px", backgroundSize: 'cover' }}></div>

                <div className='my-10 mx-20'>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink>
                                        <Link to="/" className='text-xl font-semibold'>Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className='text-xl font-semibold mt-1' />
                                <BreadcrumbItem>
                                    <BreadcrumbLink>
                                        <Link href="/" className='text-xl font-semibold text-black'>Our Core Team</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>

                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="p-8 space-y-10">
                        {leaders.map((leader, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl shadow-md flex flex-col md:flex-row p-6 gap-16 border-l-4 border-[#0D1B46]"
                            >
                                <img
                                    src={MD}
                                    alt={leader.name}
                                    className="w-[30rem] h-80 object-cover rounded-xl"
                                />
                                <div>
                                    <h2 className="text-3xl font-bold text-[#0D1B46]">{leader.name}</h2>
                                    <h3 className="text-lg text-gray-400 mb-4">{leader.title}</h3>
                                    <p className="text-gray-700 text-xl leading-relaxed">{leader.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <Footer />
            </div></div>
    )
}
