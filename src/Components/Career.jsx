import React from 'react'
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



export default function Career() {
    const navigate = useNavigate();
    return (
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
                                    <Link href="/" className='text-xl font-semibold text-black'>Components</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className='mt-6 text-xl text-[#0D1B46] font-normal'>
                    <p className='mb-6'>
                        We know that by investing in our staff, we are investing in our students and their future. If you are a learner and teacher par excellence, aspiring to be part of our dynamic team by implementing state-of-the art teaching tools and delivering quality education, then we want to hear from you. We also understand that delivering a high-quality experience for our students involves support staff as key players.

                    </p>
                    <p className='mb-6'>
                        Here at TIPS, we offer exciting careers for both teaching and non-teaching staff. We pride ourselves on a work culture where individuals can flourish with the support of strong team-based structures. TIPS is a meritocracy, so your progress, both in terms of responsibility and remuneration depends on your abilities.
                    </p>
                    <p className='mb-6'>To apply for a position with us, please email a copy of your current CV to apply@tipse.info</p>
                </div>

            </div>

<div className='flex justify-center my-16'>
    <button className='text-center px-7 rounded-[7px] py-3 bg-[#0D1B46] text-gray-200 text-lg'>Apply for job</button>
</div>

 <Footer/>
        </div>
    )
}
