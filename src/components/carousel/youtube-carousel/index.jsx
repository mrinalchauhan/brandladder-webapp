import React, { useEffect, useRef, useState } from 'react';
import ScrollCarousel from 'scroll-carousel-react';

function About() {
    const aboutRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsInView(true);
            }
        }, options);


        const currentRef = aboutRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [aboutRef]);

    return (
        <div>
            <ScrollCarousel
                autoplay
                autoplaySpeed={18}
                speed={9}
                margin={25}
                smartSpeed={true}
            >
                {/* {FeatureData.map((data, index) => (
                    <FeatureCard
                        key={index}
                        icon={data.icon}
                        cardTitle={data.cardTitle}
                        cardText={data.cardText}
                    />
                ))} */}
            </ScrollCarousel>
        </div>
    );
}

export default About;
