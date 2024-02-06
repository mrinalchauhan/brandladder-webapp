import { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const useFadeInAnimation = (duration = 1100) => {

    const [shouldAnimate, setShouldAnimate] = useState(false);

    const [fadeInRef, inView] = useInView({
        triggerOnce: true,
    });

    const fadeIn = useSpring({
        opacity: shouldAnimate ? 1 : 0,
        // from: { opacity: 0 },
        transform: shouldAnimate ? 'translateX(0)' : 'translateX(50px)',
        config: { duration },
    });

    useEffect(() => {
        if (inView) {
            setShouldAnimate(true);
        }
    }, [inView]);

    return [fadeInRef, fadeIn];
};

export default useFadeInAnimation;
