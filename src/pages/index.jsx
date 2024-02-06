import React from 'react';

import useSmoothScroll from '../hooks/general/useSmoothScroll';

import PageHeader from '../components/headers/page-header'
import TestemonialCarousel from '../components/carousel/testimonial-carousel'
import BlogCard from '../components/cards/blog'

import HomeHeroSection from '../components/sections/hero/home';
import Pricing from '../components/sections/pricing';
import HomeAboutSection from '../components/sections/about/home';

import Img from '../assests/images/logo1.png';
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

            <section className='px-14 py-10'>
                <HomeAboutSection />
            </section>

            <section>
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

            {/* <section className='py-6'>
                <img src={GalaryImg1} alt="" className='w-8/12 mx-auto z-10 mt-40' />
                <img src={GalaryImg2} alt="" className='w-4/12 z-20 relative bottom-3/4' />
                <img src={GalaryImg2} alt="" className='w-4/12 z-10' />
            </section> */}

            {/* testimonial end  */}

            {/* blog section start */}
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
            {/* blog section end */}
        </div >
    )
}

export default Home


