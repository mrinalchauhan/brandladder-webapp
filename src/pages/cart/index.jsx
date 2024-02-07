import React from 'react'
import { motion } from "framer-motion";

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll'

const Cart = () => {
    useSmoothScroll();

    const bounceAnimationProps = useBounceAnimation();

    return (
        <motion.section {...bounceAnimationProps} >
            cart
        </motion.section>
    )
}

export default Cart
