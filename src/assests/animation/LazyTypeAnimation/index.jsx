import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation'

const LazyTypeAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView && !isVisible) {
            setIsVisible(true);
        }
    }, [inView, isVisible]);

    return (
        <div ref={ref}>
            {isVisible && (
                <TypeAnimation
                    splitter={(str) => str.split(/(?= )/)}
                    sequence={[
                        'Meet Dr.Uday Kiran, the backbone and visionary of Brand ladder.Aceing both the fields as a doctor and as an entrepreneur, he began his journey at the age of 17. Over the past 7 years he has worked relentlessly on his skills, studying the market and gracing multiple successful ventures.With his keen observation skills he recognized the struggles of budding entrepreneurs.This lead to Brand Ladder, with the aim to drive businesses for growth and sustainability. At Brand Ladder each member is a bullet of the industry turned into working machines by him. The mission is clear and that is to empower business in every domain to achieve greater heights. With the devotion and dedication he possesses, Brand ladder is ready to make a profound impact.',
                        1000,
                        '',
                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 60 }}
                    // omitDeletionAnimation={true}
                    style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
                // repeat={true}
                />
            )}
        </div>
    );
};

export default LazyTypeAnimation;
