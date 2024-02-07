import { useEffect, useState } from "react";

const useBounceAnimation = (initialRadius = "50%", animateRadius = "0%", duration = 0.01) => {
    const [animationProps, setAnimationProps] = useState({
        initial: { opacity: 0.5, scale: 0.9, borderRadius: initialRadius },
        animate: { opacity: 1, scale: 1, borderRadius: animateRadius },
        transition: {
            duration: duration,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
            },
        },
    });

    useEffect(() => {
        setAnimationProps({
            initial: { opacity: 0, scale: 0.5, borderRadius: initialRadius },
            animate: { opacity: 1, scale: 1, borderRadius: animateRadius },
            transition: {
                duration: duration,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            },
        });
    }, [initialRadius, animateRadius, duration]);

    return animationProps;
};

export default useBounceAnimation;
