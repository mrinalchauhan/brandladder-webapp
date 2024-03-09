import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useFirestore } from '../../context/FirestoreContext';
import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll'

import { FaPlayCircle } from "react-icons/fa";

import BlogImg1 from '../../assests/images/temprary/blog1.jpg'
import BlogImg2 from '../../assests/images/temprary/blog2.jpg'
import TestimonialImg from '../../assests/images/temprary/testimonials.png'

import ImageCard from '../../components/cards/imageoverlap';
import BlogCard2 from '../../components/cards/blog/blog2';
import BlogCard from '../../components/cards/blog';
import HoverCard from '../../components/cards/blog/blog3'

const InsightContent = () => {
    useSmoothScroll();

    const bounceAnimationProps = useBounceAnimation();

    return (
        <motion.section {...bounceAnimationProps} className='bg-orange-3 py-10'>
            <Tabs>
                <TabList className="flex justify-center">
                    <Tab className="cursor-pointer text-black font-medium rounded-l-3xl py-2 px-6 border-b-2 border-transparent border-none active:shadow-2xl active:text-orange-8 focus:shadow-md focus:text-orange-8 hover:text-orange-4 transition-all duration-300  bg-white">
                        Blogs
                    </Tab>
                    <Tab className="cursor-pointer text-black font-medium rounded-r-3xl py-2 px-6 border-b-2 border-transparent border-none active:shadow-2xl active:text-orange-8 focus:shadow-md focus:text-orange-8 hover:text-orange-4 transition-all duration-300  bg-white">
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
        </motion.section>
    )
}

const Blogs = () => {

    const [blogData, setBlogData] = useState()
    const { getTeamData: getBlogData } = useFirestore()

    const handleFetchAllBlogsData = async () => {
        try {
            const res = await getBlogData('blogs')
            setBlogData(res)
            // console.log(res)
        } catch (error) {
            console.error('error while fetching blog data: ', error);
        }
    }

    const firstNonArchivedBlog = blogData?.find(blog => !blog.archive);

    useEffect(() => {
        handleFetchAllBlogsData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className='bg-inherit p-4'>
            <h1 className='text-3xl font-medium pb-5 mb-4' >Best Blog Of The Week</h1>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <aside className='col-span-2 my-auto'>
                    <div className="my-auto max-w-full">

                        {firstNonArchivedBlog ? (
                            <ImageCard
                                imageSrc={BlogImg1}
                                date={firstNonArchivedBlog.date}
                                domain={firstNonArchivedBlog.domain}
                                title={firstNonArchivedBlog.blogTitle}
                                largecard={true}
                                // link={`/insight/${firstNonArchivedBlog.id}`}
                                link={
                                    firstNonArchivedBlog.aditionalURL ? (
                                        `/insiight/${firstNonArchivedBlog.aditionalURL}`
                                    ) : (
                                        `/insight/${firstNonArchivedBlog.id}`
                                    )
                                }
                            />
                        ) : (
                            <div className="skeleton-pulse h-96 rounded-3xl"></div>
                        )}
                    </div>
                </aside>

                <aside className='space-y-4 col-span-1'>
                    <div className="h-full grid grid-row-2 gap-4">
                        <div className="overflow-hidden row-span-1">
                            {blogData && blogData.length > 0 ? (
                                <>
                                    {blogData.slice().reverse().map((blog, index) => {
                                        if (!blog.archive && index === 1) {
                                            return (
                                                <ImageCard
                                                    key={blog.id}
                                                    imageSrc={BlogImg1}
                                                    date={blog.date}
                                                    domain={blog.domain}
                                                    title={blog.blogTitle}
                                                    // link={`/insight/${blog.id}`}
                                                    link={
                                                        blog.aditionalURL ? (
                                                            `/insight/${blog.aditionalURL}`
                                                        ) : (
                                                            `/insight/${blog.id}`
                                                        )
                                                    }
                                                />
                                            );
                                        }
                                        return null;
                                    })}
                                </>
                            ) : (
                                <div className="skeleton-pulse h-60 rounded-2xl"></div>
                            )}

                        </div>
                        {blogData && blogData.length > 0 ? (
                            <HoverCard image={BlogImg2} title='More Blogs' />
                        ) : (
                            <div className="skeleton-pulse h-60 rounded-2xl"></div>
                        )}
                    </div>


                </aside>
            </section>

            <h1 className='py-3 px-1 rounded-md text-2xl' >Recommended</h1>
            <section className='bg-inherit md:bg-orange-2 lg:px-10 px-4 py-10'>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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

            <section className='my-8'>
                <h2 className='text-black text-xl font-normal my-4'>More Blogs ... </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {
                        blogData && blogData
                            .filter(data => !data.archive)
                            .map((data) => (
                                <BlogCard
                                    key={data.id}
                                    image={data.titleImage}
                                    domain={data.domain}
                                    topic={data.blogTitle}
                                    desc={data.blogDesc}
                                    link={
                                        data.aditionalURL ? (
                                            `/insight/${data.aditionalURL}`
                                        ) : (
                                            `/insight/${data.id}`
                                        )
                                    }
                                />
                            ))
                    }

                </div>
            </section>
        </section>
    )
}

const Testimonials = () => {
    return (
        <section className='bg-inherit'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <img src={TestimonialImg} alt="" />
                <aside className='text-black flex flex-col gap-10 my-auto md:text-left text-center px-2 '>
                    <div>
                        <h1 className='text-black text-4xl font-semibold' >Uday Kiran</h1>
                        <small>Founder of BRANDLADDER</small>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className='flex text-left mx-auto md:mx-0'>
                        <FaPlayCircle className='my-auto mr-2 text-6xl md:text-4xl' />
                        <div className='flex flex-col'>
                            <small>Watch video</small>
                            <small className='text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting</small>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default InsightContent;