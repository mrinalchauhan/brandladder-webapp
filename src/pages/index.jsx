import React, { useEffect } from 'react';
import { motion } from "framer-motion";

import useBounceAnimation from '../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../hooks/general/useSmoothScroll';
import { useFirestore } from '../context/FirestoreContext';
import { useAuth } from '../context/AuthContext'

// import PageHeader from '../components/headers/page-header'
// import TestemonialCarousel from '../components/carousel/testimonial-carousel'
// import BlogCard from '../components/cards/blog'
import HomeHeroSection from '../components/sections/hero/home';
import Pricing from '../components/sections/pricing';
import HomeAboutSection from '../components/sections/about/home';

import { digitalEssential, growthAcceleratr, dominanceSuit } from '../.data/plan-features'

const Home = () => {
    useSmoothScroll();

    const { currentUser } = useAuth()
    const { uploadUserData } = useFirestore()
    const bounceAnimationProps = useBounceAnimation();

    // const testemonialList = [
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in t'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Loreorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in m ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in itationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    //     {
    //         image: Img,
    //         name: 'BrandLadder',
    //         designation: 'CEO and Founder',
    //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in orem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in um exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
    //     },
    // ]

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));

        const handleUplaodUserData = async () => {
            if (userData && currentUser !== null) {
                try {
                    await uploadUserData('users', currentUser.uid, userData);
                    localStorage.removeItem('userData');
                } catch (error) {
                    console.error("error while uploading user data: ", error)
                }
            }
        }

        handleUplaodUserData();

    }, [currentUser, uploadUserData])

    return (
        <motion.div {...bounceAnimationProps} >
            <section className="bg-orange-2 p-10">
                <HomeHeroSection currentUser={currentUser} />
            </section>

            <section className='px-14 pt-10 bg-orange-1 z-20'>
                <HomeAboutSection />
            </section>

            <section className=''>
                <div className="w-full h-20 md:h-32 bg-orange-2 rounded-tl-full rounded-tr-lg"></div>
                <Pricing
                    featureList1={digitalEssential}
                    featureList2={growthAcceleratr}
                    featureList3={dominanceSuit}
                />
            </section>

            {/* <section className='my-5'>
                <PageHeader
                    title='Trusted by all'
                    subtitle='Trusted by 21 million customer around the world'
                    section={true}
                />
                <div className="my-5">
                    <TestemonialCarousel testemonialList={testemonialList} />
                </div>
            </section>

            <section className='my-10 px-10'>
                <PageHeader
                    title='Blogs'
                    section={true}
                />
                <div className="my-5">
                    <div className="grid lg:grid-cols-4 gap-4">
                        <div>
                            <BlogCard
                                image={Img}
                                domain='Test Blog'
                                topic='Text Blog'
                                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor.'
                                link='/insight'
                            />
                        </div>
                        <div>
                            <BlogCard
                                image={Img}
                                domain='Test Blog'
                                topic='Text Blog'
                                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor.'
                                link='/insight'
                            />
                        </div>
                    </div>
                </div>
            </section> */}
        </motion.div >
    )
}

export default Home


