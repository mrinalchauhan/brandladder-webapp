import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
// import useSound from 'use-sound';

// import KeyboardTyping from '../../../assests/sound/keyborad-typing.mp3'

const TextReplacementAnimation = () => {
    // const [play] = useSound(KeyboardTyping);

    return (
        <>
            <TypeAnimation
                sequence={[
                    `Build And Grow Your Business By Digital Marketing`,
                    1000,
                    'Build And Grow Your Business By CA services',
                    1000,
                    'Build And Grow Your Business By Technological services',
                    1000,
                    'Build And Grow Your Business By And Much More',
                    1000,
                ]}
                speed={10}
                className='text-black text-3xl md:text-5xl font-medium md:font-bold my-8 leading-tight'
                repeat={Infinity}
            />
            {/* <button onClick={play} > play</button> */}
        </>
    );
};

export default TextReplacementAnimation;