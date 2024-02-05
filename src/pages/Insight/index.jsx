import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { FaArrowRightLong } from 'react-icons/fa6'
import { FaPlayCircle } from "react-icons/fa";

import BlogImg1 from '../../assests/images/temprary/blog1.jpg'
import BlogImg2 from '../../assests/images/temprary/blog2.jpg'
import BlogImg3 from '../../assests/images/temprary/blog3.jpg'
import TitleBg from '../../assests/images/feature-img/title-bg.png'
import TestimonialImg from '../../assests/images/temprary/testimonials.png'

import ImageCard from '../../components/cards/imageoverlap';
import BlogCard2 from '../../components/cards/blog/blog2';

const Insight = () => {

    return (
        <section className='bg-orange-3 py-10'>
            <Tabs>
                <TabList className="flex justify-center">
                    <Tab className="cursor-pointer text-black font-medium rounded-l-3xl py-2 px-6 border-b-2 border-transparent active:shadow-2xl active:text-orange-8 focus:shadow-md focus:text-orange-8 hover:text-orange-4 transition-all duration-300  bg-white">
                        Blogs
                    </Tab>
                    <Tab className="cursor-pointer text-black font-medium rounded-r-3xl py-2 px-6 border-b-2 border-transparent active:shadow-2xl active:text-orange-8 focus:shadow-md focus:text-orange-8 hover:text-orange-4 transition-all duration-300  bg-white">
                        Testimonials
                    </Tab>
                </TabList>

                <TabPanel>
                    <Blogs />
                </TabPanel>
                <TabPanel>
                    <Testimonials />
                </TabPanel>
            </Tabs>
        </section>
    )
}

const Blogs = () => {
    return (
        <section className='bg-inherit'>
            <h1 className='text-3xl font-medium  pb-4 mb-4' >Best Blog Of The Weeek</h1>
            {/* <img src={TitleBg} alt="" className='max-w-60 absolute bottom-52 right-0' /> */}
            <section className="grid grid-cols-2 gap-4 bg-orange-2 py-5 px-2">
                <aside className="">
                    <ImageCard
                        imageSrc={BlogImg1}
                        date='July 17,2023'
                        domain='UI/UX'
                        title='Top 12 Figma plugins for UI/UX designers in 2023'
                    />
                </aside>
                <aside className="grid grid-row-2 gap-4 max-w-full">
                    <ImageCard
                        imageSrc={BlogImg2}
                        date='July 17,2023'
                        domain='UI/UX'
                        title='Top 12 Figma plugins for UI/UX designers'
                    />
                    <div className="relative overflow-hidden shadow-lg rounded-3xl">
                        <img src={BlogImg2} alt="" className="h-auto" />

                        <div className="absolute bottom-10 p-4 ">
                            <Link to='/insight' >
                                <p
                                    className='bg-white text-orange-9 flex font-semibold rounded-3xl px-5 py-3 mx-auto shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-orange-5 hover:text-orange-1'>
                                    See All Post <FaArrowRightLong className='my-auto mx-2' />
                                </p>
                            </Link>
                        </div>
                    </div>
                </aside>
            </section>

            <h1 className='py-3 px-1 rounded-md text-2xl' >Recommended</h1>
            <section className='bg-orange-2 lg:px-10 px-4 py-10'>
                <div className="grid grid-cols-5 gap-4">
                    <div className="grid col-span-3 grid-row-2 sm:grid-col-1 gap-4">
                        <BlogCard2
                            order='cols'
                            image='https://source.unsplash.com/random/300x200'
                            editor='Uday kiran'
                            designation='Founder and CEO'
                            topic='Top 12 Figma plugins for UI/UX designers in 2023'
                            date='23 Dec 2023'
                            readTime='6 min read'
                            desc='There are many variations of passages of Lorem Ipsum available, but the majority have s If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden'
                            navLink='/insight'
                        />
                        <BlogCard2
                            order='cols'
                            image='https://source.unsplash.com/random/300x200'
                            editor='Uday kiran'
                            designation='Founder and CEO'
                            topic='Top 12 Figma plugins for UI/UX designers in 2023'
                            date='23 Dec 2023'
                            readTime='6 min read'
                            desc='There are many variations of passages of Lorem Ipsum available, but the majority have s If you are going to use a passage of Lorem Ipsum, you need to be sure there isn t anything embarrassing hidden'
                            navLink='/insight'
                        />
                    </div>
                    <div className='col-span-2'>
                        <BlogCard2
                            order='row'
                            image='https://source.unsplash.com/random/300x200'
                            editor='Uday kiran'
                            designation='Founder and CEO'
                            topic='Top 12 Figma plugins for UI/UX designers in 2023'
                            date='23 Dec 2023'
                            readTime='6 min read'
                            desc='There are many variations of passages of Lorem Ipsum available, but the majority have s If you are going to use a passage of Lorem Ipsum, you need to em Ipsum, you need to em Ipsum, you need to be sure there isn t anything embarrassing hidden '
                            navLink='/insight'
                        />
                    </div>
                </div>
            </section>
        </section>
    )
}

const Testimonials = () => {
    return (
        <section className='bg-inherit'>
            <div className="grid grid-cols-2">
                <img src={TestimonialImg} alt="" />
                <aside className='text-black flex flex-col gap-10 my-auto'>
                    <div>
                        <h1 className='text-black text-4xl font-semibold' >Uday Kiran</h1>
                        <small>Founder of BRANDLADDER</small>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className='flex'>
                        <FaPlayCircle className='my-auto mr-2 text-3xl' />
                        <div className='flex flex-col'>
                            <small>Watch video</small>
                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                        </div>
                    </div>
                </aside>
                {/* <img src={TitleBg} alt="" className='max-w-36 mx-auto mt-5' />
                <img src={TitleBg} alt="" className='max-w-28 relative bottom-20 left-1/2' /> */}
            </div>
        </section>
    )
}

export default Insight
