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
                        We specialize in digital services that enhance your internet visibility. From smart marketing campaigns to bespoke content development, our team is dedicated to providing impactful solutions that enable you to connect with your audience and achieve your objectives.                    </p>
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
                        Our techinical services include a wide range, including development, cloud solutions, and AI/ML. From developing custom software to establishing scalable cloud architectures and integrating advanced AI algorithms, our team provides unique solutions that are tailored to your digital success.

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
                        We specialize in comprehensive accounting and finance services, providing experienced advice and solutions to help you improve your financial operations. From tax planning and compliance to financial analysis and consulting, our dedicated team ensures that your financial plans are strong, compliant, and aligned with your business goals for long-term growth and success.

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
