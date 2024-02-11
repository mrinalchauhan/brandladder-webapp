import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';

import useFadeInRightAnimation from '../../../../hooks/animations/useFadeInRightAnimation'
import useFadeInLeftAnimation from '../../../../hooks/animations/useFadeInLeftAnimation'

import OutlineButton from '../../../buttons/outline'

const HomeAboutSection = () => {

    const [fadeInRightRef1, fadeInRight1] = useFadeInRightAnimation();
    const [fadeInLeftRef1, fadeInLeft1] = useFadeInLeftAnimation();

    const [fadeInRightRef2, fadeInRight2] = useFadeInRightAnimation();
    const [fadeInLeftRef2, fadeInLeft2] = useFadeInLeftAnimation();

    const [fadeInRightRef3, fadeInRight3] = useFadeInRightAnimation();
    const [fadeInLeftRef3, fadeInLeft3] = useFadeInLeftAnimation();

    return (
        <section className='my-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-0">
                <h1 className='font-semibold md:font-bold text-black text-4xl md:text-5xl my-auto z-20'>
                    Prominent work of our Brandladder
                </h1>
                <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ftitle-bg.png?alt=media&token=ee5eb414-64f3-4471-8fdd-5004439b5cee" alt="Brandladder" className='max-h-52 relative right-56 z-10 hidden md:block' loading='lazy' />
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-evenly'>
                <animated.div className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInRightRef1}
                    style={{ ...fadeInRight1, flexBasis: 0 }}
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        Digital Services
                    </h2>
                    <p className='text-gray-500'>
                        We design services as per your needs. With the market flooding with digital services, we curate what your business needs, we know every business is unique in its own way and therefore needs its unique strategies. From expertly curated social strategies, and UI/UX to top-notch SEO. Brand Ladder is the one-stop solution for all your Digital marketing queries. Our approach is simple, writing your journey in a way that levels up your game in each segment. We have experts for each and every need of yours; upgrade your social media game, create content that resonates with your audience, lead generation, google ads, and meta ads; you name it and we have got it for you. With us, you are not just a client, but a part of our family. Experience growth like never before.
                    </p>
                    <Link to='/services'>
                        <OutlineButton text="Learn More" />
                    </Link>
                </animated.div>

                <animated.div
                    ref={fadeInLeftRef1}
                    style={{ ...fadeInLeft1, flexBasis: 0 }}
                    className='flex-grow'
                >
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fabout-1.png?alt=media&token=5a7065b8-16ca-4670-a47d-44ad2642a9ac"
                        alt="BandLadder"
                        className='max-h-80 mx-auto '
                    />
                </animated.div>
            </div>

            <div className='flex flex-col md:flex-row justify-evenly my-5'>
                <animated.div
                    ref={fadeInRightRef2}
                    style={{ ...fadeInRight2, flexBasis: 0 }} // Add flexBasis: 0
                    className='flex-grow'
                >
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fabout-2.png?alt=media&token=1eecac6b-3fcd-480f-a8e5-28f434be48bb"
                        alt="BandLadder"
                        className='max-h-80 mx-auto'
                    />
                </animated.div>

                <animated.div className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInLeftRef2}
                    style={{ ...fadeInLeft2, flexBasis: 0 }} // Add flexBasis: 0
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        Technical Services
                    </h2>
                    <p className='text-gray-500'>
                        We deliver solutions integrated with experience, we have professionals who deliver a set of comprehensive services tailored to meet your expectations, from engaging web development that reflects your brand’s identity to user-friendly web application development that enhances user experience. At Brand Ladder, we work to upgrade your digital landscape with our comprehensive technological services with AI/ML-driven innovations that boost your productivity, cloud solutions that aid your growth, and CI/CD pipeline solutions that optimize your development process. With our futuristic approach, we focus on page speed optimization and provide users with an engaging experience. Besides all this, we make sure you keep upgrading with our easily accessible maintenance services, so you are one step ahead all the time. Partner, with Brand Ladder and expand the technical horizon of your business with us.
                    </p>
                    <Link to='/services'>
                        <OutlineButton text="Learn More" />
                    </Link>
                </animated.div>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-evenly'>
                <animated.div className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInRightRef3}
                    style={{ ...fadeInRight3, flexBasis: 0 }}
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        CA And Finance Services
                    </h2>
                    <p className='text-gray-500'>
                        We have onboarded the best CA services with the help of top Chartered Accountants of India, providing you with a wide range of services. We understand how vital finances are and will make sure they are handled with accuracy and complete transparency. Our exceptional team of professionals will handle any part of the accounting, giving you precise information to make the best decision for your business. Further, we assist you with the seamless acquisition of labor licenses, FSSAI licenses, company and firm registration, and other necessary permits as well. We also specialize in providing net worth certificates, payroll management, digital signatures and so much more. You can rely on Brand Ladder to take care of your financial load while you focus on other activities of your business. Empower your financial growth with us today.
                    </p>
                    <Link to='/services'>
                        <OutlineButton text="Learn More" />
                    </Link>
                </animated.div>

                <animated.div
                    ref={fadeInLeftRef3}
                    style={{ ...fadeInLeft3, flexBasis: 0 }}
                    className='flex-grow' // Use flex-grow to evenly divide space
                >
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fabout-3.png?alt=media&token=4aa187a6-6ed1-4eaf-af2f-63e5085741fb"
                        alt="BandLadder"
                        className='max-h-80 mx-auto '
                    />
                </animated.div>
            </div>

        </section>
    )
}

export default HomeAboutSection
