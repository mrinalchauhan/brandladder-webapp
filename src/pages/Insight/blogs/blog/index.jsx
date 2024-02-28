import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import useSmoothScroll from '../../../../hooks/general/useSmoothScroll';
import { useFirestore } from '../../../../context/FirestoreContext';

// import { CiPause1 } from "react-icons/ci";
// import { IoPlayBackOutline, IoPlayForwardOutline } from "react-icons/io5";

import Loader from '../../../../components/loader'
import BlogCard from '../../../../components/cards/blog';

const Blog = () => {
    useSmoothScroll();

    const [blogData, setBlogData] = useState()
    const [loading, setLoading] = useState(false);
    const [readingTime, setReadingTime] = useState(0);
    const [allBlogs, setAllBlogs] = useState()

    const { blog: blogId } = useParams();
    const { getDocumentData, getTeamData: getAllBlogs } = useFirestore();

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const calculateReadingTime = (htmlContent) => {
        const plainText = htmlContent.replace(/<[^>]+>/g, '');

        const wordsPerMinute = 200;

        const words = plainText.trim().split(/\s+/);

        const wordCount = words.length;

        const timeInMinutes = wordCount / wordsPerMinute;

        const roundedTime = Math.ceil(timeInMinutes);

        setReadingTime(roundedTime);
    };

    // const handleToggleSound = () => {
    //     setToggleSound(!toggleSound)
    // }

    useEffect(() => {
        const fetchBlogData = async () => {
            setLoading(true)
            try {
                const res = await getDocumentData('blogs', blogId);
                setBlogData(res)
                calculateReadingTime(res?.blogContent)
            } catch (error) {
                console.error('Error while fetching blog data: ', error)
            } finally {
                setLoading(false)
            }
        }

        const fetchAllBlogsData = async () => {
            setLoading('true');
            try {
                const res = await getAllBlogs('blogs')
                setAllBlogs(res.reverse())
            } catch (error) {
                console.error('Error while fetching all blogs data: ', error);
            } finally {
                setLoading(false);
            }
        }


        fetchBlogData();
        fetchAllBlogsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const writersBlog = allBlogs.filter(data => data.writerName === blogData.writerName)
    return (
        <section className='py-6 space-y-10'>



            {
                blogData && (
                    <>
                        <Helmet>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <title>BrandLadder | {blogData.blogTitle}</title>
                            <meta name="description" content={blogData.blogDesc} />
                            <meta name="author" content={`brandladder, Anurag Kumar, ${blogData.writerName}`} />
                            <meta name="author" content={`${blogData.writerName}`} />
                            <meta name="author" content="Anurag Kumar" />
                            <meta name="keywords" content="HTML, CSS, JavaScript" />
                        </Helmet>
                        <div className="breadcrumbs hidden md:block text-sm">
                            <ul>
                                <li>
                                    <Link className='text-orange-3' to='/'>
                                        BrandLadder
                                    </Link>
                                </li>
                                <li>
                                    <Link className='text-orange-3' to='/insight'>
                                        Articles
                                    </Link>
                                </li>
                                <li>{blogData.blogTitle}</li>
                            </ul>
                        </div>
                    </>
                )
            }

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {
                    loading ? (
                        <div className="col-span-2 mx-auto">
                            {/* <loader /> */}
                            <div className="skeleton-pulse h-full w-full"></div>
                        </div>
                    ) : (
                        blogData && (
                            <aside className="space-y-6 col-span-2">
                                <div className="my-4">
                                    <h1 className='text-black font-bold text-2xl md:text-5xl'>{blogData.blogTitle}</h1>
                                </div>
                                <div className="card flex flex-row space-x-4 shadow-none w-full bg-inherit">
                                    <div className='rounded-full col-span-1 max-h-16 max-w-16'>
                                        <img src={blogData.titleImage} alt="" className='rounded-full mx-auto my-auto' />
                                    </div>
                                    <div className='col-span-2'>
                                        <div className="">{blogData.writerName}</div>
                                        <p className='text-xs'>
                                            {formatDate(blogData.date)} <br />
                                            {readingTime} min{readingTime !== 1 ? 's' : ''} read
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className='col-span-1 mx-auto max-w-full'>
                                        <img src={blogData.titleImage} alt={blogData.blogTitle} className='w-screen h-full' />
                                    </div>
                                    <div className="col-span-2 my-auto">
                                        {blogData.blogDesc}
                                    </div>
                                </div>
                                <div>
                                    <p dangerouslySetInnerHTML={{ __html: blogData.blogContent }} />
                                </div>
                                {blogData.domain}
                                {blogData.metaTags}
                            </aside>
                        )
                    )
                }

                <aside className="col-span-1 mx-auto">
                    {/* <div className="card border-none max-w-full bg-orange-5">
                                    <div className="card-body grid grid-cols-3 gap-2 border border-black">
                                        <button className='col-span-1 mx-auto'>
                                            <IoPlayBackOutline />
                                        </button>
                                        <button onClick={handleToggleSound} className='mx-auto' >
                                            <CiPause1 />
                                        </button>
                                        <button className='mx-auto'>
                                            <IoPlayForwardOutline />
                                        </button>
                                    </div>
                                    <progress
                                        className="progress progress-flat-error w-full "
                                        value="50"
                                        max="100">
                                    </progress>
                                </div> */}

                    <p className="text-orange-6">Latest Blogs ... </p>

                    <div className="bg-orange-2 md:p-6 rounded-xl">
                        {
                            loading ? (
                                <div className='space-y-6'>
                                    <div className="skeleton-pulse w-72 h-96"></div>
                                    <div className="skeleton-pulse w-72 h-96"></div>
                                </div>
                            ) : (
                                allBlogs && allBlogs.slice(0, 6).map((data) => {
                                    return (
                                        <BlogCard
                                            image={data.titleImage}
                                            topic={data.blogTitle}
                                            desc={data.blogDesc}
                                            link={`/insight/${data.id}`}
                                            domain={data.domain} />
                                    )
                                })
                            )
                        }
                    </div>

                </aside>
            </section>
            <section className='md:px-8'>
                {
                    loading ? (
                        <Loader />
                    ) : (
                        <>
                            <p className="text-orange-6">
                                More From {blogData?.writerName} ...
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {
                                    allBlogs && blogData &&
                                    allBlogs
                                        .filter(data => data?.writerName === blogData?.writerName)
                                        .map(data => (
                                            <BlogCard
                                                key={data.id}
                                                image={data.titleImage}
                                                topic={data.blogTitle}
                                                desc={data.blogDesc}
                                                link={`/insight/${data.id}`}
                                                domain={data.domain} />
                                        ))
                                }
                            </div>
                        </>
                    )
                }

            </section>
        </section>
    )
}

export default Blog
