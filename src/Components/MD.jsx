import React from 'react'
import name from './Images/Admissions.jpg';
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
import Md from './Images/MD-website.jpg';


export default function MD() {
    return (
        <div>
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
                                            <Link href="/" className='text-xl font-semibold text-black'>MD-Desk</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>

                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>

                        <div className='flex mt-16 justify-around gap-20'>
                            <div>
                                <img src={Md} className='h-[30rem] w-[20rem] object-cover'/>
                                <div>
                                    <div>abcd</div>
                                    <div>Managing Director</div>
                                </div>
                                <div>
                                    <div>EXTRAORDINARY</div>
                                    <div>Education.Experience.Exposure</div>
                                </div>
                            </div>


                            <div className='text-[#0D1B46]'>
                                <h2 className='text-4xl text-[#0D1B46] font-semibold'>
                                    "HELPING YOU ACHIEVE CONSISTENTLY"
                                </h2>
                                <h4 className='text-xl mt-2'>Welcome To TIPS</h4>
                                <p className='mt-5 text-2xl'>
                                    The Indian Public School strives hard and smart to transform youngsters into proactive and compassionate human beings. We look beyond academic emphasis and groom our students into well-rounded, good human beings because we care about them.

                                    TIPSIANS are taught to make a positive difference to everyone they encounter in their lifetime. We do away with all barriers of race, colour, caste and creed by celebrating a multicultural mix in school, introducing global student and teacher exchange programmes, participation in global competitions and conferences.

                                    We aim at creating a happy environment and love to see happy faces around the entire campus. Our culture and best practices revolve around kindness, love, and care through which we foster confidence and positivity. Our students walk tall with their chests out and chins held high; however, their spirit of gratitude and humanity make them natural leaders and successful entrepreneurs in the global sphere.

                                    We strive to take our students to the next level, which is often the global level. Children who come to us for education are given opportunities to excel to the best of their natural abilities, whatever be their field of choice.

                                    We create innovative outdoor spaces, so that children can connect with nature and learn.

                                    We are focused on providing the best of services to all who look up to us in the field of education. Here at TIPS, we nurture and celebrate lifelong learners who can help create a better and more peaceful world.
                                </p>
                            </div>

                        </div>

                    </div>

                    <Footer />
                </div></div>
        </div>
    )
}
