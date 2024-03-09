import React, { useState, useEffect } from 'react';

import { useFirestore } from '../../../context/FirestoreContext';
import useSmoothScroll from '../../../hooks/general/useSmoothScroll';

import HelmetComponent from '../../../helmet';
import Loader from '../../../components/loader'
import BlogCard from '../../../components/cards/blog';

const Blogs = () => {
    useSmoothScroll();
    const [selectedTab, setSelectedTab] = useState('all');

    // const [loading, setLoading] = useState(true);
    const [blogData, setBlogData] = useState()

    const { getTeamData } = useFirestore();

    const handleFetchBlogData = async () => {
        try {
            const res = await getTeamData('blogs');
            setBlogData(res.reverse())
        } catch (error) {
            console.error('Error while fe3tch blog data: ', error)
        } finally {
            // setLoading(false)
        }
    }

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const techBlogs = blogData?.filter(data => data.domain === 'Technology');
    const digitalBlogs = blogData?.filter(data => data.domain === 'Digital');
    const startupBlogs = blogData?.filter(data => data.domain === 'Startup And Innovation');
    const innovationBlogs = blogData?.filter(data => data.domain === 'Innovation');
    const investmentBlogs = blogData?.filter(data => data.domain === 'Investment');

    useEffect(() => {
        handleFetchBlogData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className='lg:py-10'>

            <HelmetComponent
                title='Brandladder Articles'
                // desc={blogData?.}
                // author={blogData?.writerName}
                page='articles'
                blogKeywords=''
            // focusKeywords={blogData?.focusKeywords && blogData.focusKeywords}
            />

            <p className='text-orange-4 hidden md:block'>Our Article Gallery .... </p>
            <div className='text-center overflow-x-scroll' >
                <div className="inline-flex rounded-lg border border-gray-100 bg-orange-4 p-2 shadow-xl">
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'all' ? 'text-orange-10 border bg-orange-1 font-semibold' : 'text-gray-600 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('all')}
                    >
                        All
                    </button>
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'tech' ? 'text-orange-10 border bg-orange-1 font-semibold' : 'text-gray-600 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('tech')}
                    >
                        Technical
                    </button>
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'digital' ? 'text-orange-10 border bg-orange-1 font-semibold' : 'text-gray-600 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('digital')}
                    >
                        Digital
                    </button>
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'startup' ? 'text-orange-10 border bg-orange-1 font-semibold' : 'text-gray-600 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('startup')}
                    >
                        Startup
                    </button>
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'innovation' ? 'text-orange-10 border bg-orange-1 font-semibold' : 'text-gray-600 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('innovation')}
                    >
                        Innovation
                    </button>
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'investment' ? 'text-orange-10 border bg-orange-1 font-semibold' : 'text-gray-600 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('investment')}
                    >
                        Investment
                    </button>
                </div>
            </div>

            <div className='p-5 md:px-20'>
                <aside>
                    <HelmetComponent
                        title='Brandladder Articles'
                        // desc={blogData?.}
                        // author={blogData?.writerName}
                        page='articles'
                        blogKeywords=''
                    // focusKeywords={blogData?.focusKeywords && blogData.focusKeywords}
                    />
                    {
                        selectedTab === 'all' && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    blogData ? (
                                        blogData
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
                                    ) : (
                                        <Loader />
                                    )
                                }


                            </div>
                        )
                    }
                </aside>

                <aside>
                    <HelmetComponent
                        title='Brandladder Technical Articles'
                        // desc={blogData?.}
                        // author={blogData?.writerName}
                        page='articles'
                        blogKeywords=''
                    // focusKeywords={blogData?.focusKeywords && blogData.focusKeywords}
                    />
                    {
                        selectedTab === 'tech' && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    techBlogs ? (
                                        techBlogs
                                            .filter(data => !data.archive)
                                            .map((data) => {
                                                return (
                                                    <BlogCard
                                                        key={data.id}
                                                        image={data.titleImage}
                                                        topic={data.blogTitle}
                                                        desc={data.blogDesc}
                                                        link={`/insight/${data.id}`}
                                                        domain={data.domain}
                                                    />
                                                )
                                            })
                                    ) : (
                                        <Loader />
                                    )
                                }

                            </div>
                        )
                    }
                </aside>

                <aside>
                    {
                        selectedTab === 'digital' && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    digitalBlogs ? (
                                        digitalBlogs
                                            .filter(data => !data.archive)
                                            .map((data) => {
                                                return (
                                                    <BlogCard
                                                        key={data.id}
                                                        image={data.titleImage}
                                                        topic={data.blogTitle}
                                                        desc={data.blogDesc}
                                                        link={`/insight/${data.id}`}
                                                        domain={data.domain}
                                                    />
                                                )
                                            })
                                    ) : (
                                        <Loader />
                                    )
                                }

                            </div>
                        )
                    }
                </aside>

                <aside>
                    {
                        selectedTab === 'startup' && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    startupBlogs ? (
                                        startupBlogs
                                            .filter(data => !data.archive)
                                            .map((data) => {
                                                return (
                                                    <BlogCard
                                                        key={data.id}
                                                        image={data.titleImage}
                                                        topic={data.blogTitle}
                                                        desc={data.blogDesc}
                                                        link={`/insight/${data.id}`}
                                                        domain={data.domain}
                                                    />
                                                )
                                            })
                                    ) : (
                                        <Loader />
                                    )
                                }

                            </div>
                        )
                    }
                </aside>

                <aside>
                    {
                        selectedTab === 'innovation' && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    innovationBlogs ? (
                                        innovationBlogs
                                            .filter(data => !data.archive)
                                            .map((data) => {
                                                return (
                                                    <BlogCard
                                                        key={data.id}
                                                        image={data.titleImage}
                                                        topic={data.blogTitle}
                                                        desc={data.blogDesc}
                                                        link={`/insight/${data.id}`}
                                                        domain={data.domain}
                                                    />
                                                )
                                            })
                                    ) : (
                                        <Loader />
                                    )
                                }

                            </div>
                        )
                    }
                </aside>

                <aside>
                    {
                        selectedTab === 'investment' && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {
                                    investmentBlogs ? (
                                        investmentBlogs
                                            .filter(data => !data.archive)
                                            .map((data) => {
                                                return (
                                                    <BlogCard
                                                        key={data.id}
                                                        image={data.titleImage}
                                                        topic={data.blogTitle}
                                                        desc={data.blogDesc}
                                                        link={`/insight/${data.id}`}
                                                        domain={data.domain}
                                                    />
                                                )
                                            })
                                    ) : (
                                        <Loader />
                                    )
                                }

                            </div>
                        )
                    }
                </aside>
            </div>
        </section>
    )
}

export default Blogs
