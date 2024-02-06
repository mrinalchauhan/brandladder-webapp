import React from 'react';

import useSmoothScroll from '../hooks/general/useSmoothScroll';

import PageHeader from '../components/headers/page-header'
import TestemonialCarousel from '../components/carousel/testimonial-carousel'
import BlogCard from '../components/cards/blog'
import HomeHeroSection from '../components/sections/hero/home';
import Pricing from '../components/sections/pricing';
import HomeAboutSection from '../components/sections/about/home';

import Img from '../assests/images/logo1.png';
// import Circlee from '../assests/images/feature-img/circel.png'
// import GalaryImg1 from '../assests/images/feature-img/gallery-bg.png'
// import GalaryImg2 from '../assests/images/feature-img/gallery-small.png'

const Home = () => {
    useSmoothScroll();


    const testemonialList = [
        {
            image: Img,
            name: 'BrandLadder',
            designation: 'CEO and Founder',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
        },
        {
            image: Img,
            name: 'BrandLadder',
            designation: 'CEO and Founder',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
        },
        {
            image: Img,
            name: 'BrandLadder',
            designation: 'CEO and Founder',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
        },
        {
            image: Img,
            name: 'BrandLadder',
            designation: 'CEO and Founder',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
        },
        {
            image: Img,
            name: 'BrandLadder',
            designation: 'CEO and Founder',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
        },
        {
            image: Img,
            name: 'BrandLadder',
            designation: 'CEO and Founder',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor. Debitis, nesciunt'
        },
    ]

    const featureList = [
        "billed annually 17 billed monthly",
        "billed annually 17 billed monthly",
        "billed annually 17 billed monthly",
        "billed annually 17 billed monthly",
        "billed annually 17 billed monthly",
        "billed annually 17 billed monthly",
        "billed annually 17 billed monthly",
    ]

    return (
        <div>
            <section className="bg-orange-2 p-10">
                <HomeHeroSection />
            </section>

            <section className='px-14 pt-10 bg-orange-1 z-20'>
                <HomeAboutSection />
            </section>

            <section className=''>
                {/* <div className="relative left-10 bg-black h-40 top-28 w-40 rounded-full z-10"></div>
                <div className="absolute bg-orange-3 h-36 w-36 rounded-full z-20"></div>
                <div className="absolute bg-orange-4 h-24 w-24 rounded-full z-30"></div> */}

                <div className="w-full h-20 md:h-32 bg-orange-2 rounded-tl-full rounded-tr-lg"></div>
                <Pricing featureList1={featureList} featureList2={featureList} featureList3={featureList} />
            </section>

            <section className='my-5'>
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
                                name='Test Blog'
                                designation='Text Blog'
                                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor.'
                            />
                        </div>
                        <div>
                            <BlogCard
                                image={Img}
                                name='Test Blog'
                                designation='Text Blog'
                                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem ipsa in tempora. Tenetur corrupti autem modi labore dolor.'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Home


