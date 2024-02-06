import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const ImageCard = ({ imageSrc, title }) => {
    return (
        <div className="relative overflow-hidden shadow-lg rounded-3xl bg-orange-1 w-full">
            <div className="overflow-hidden">
                <img src={imageSrc} alt={title} className="h-auto" />
            </div>

            <div className="absolute bottom-10 w-full p-4 ">
                <p className='text-xs md:text-lg font-normal md:font-semibold rounded-3xl px-2 md:px-3 py-2 md:py-2 mx-auto shadow-2xl text-center flex'>
                    <div className='flex space-x-11 p-5 bg-white text-orange-9 rounded-full'>
                        {title}
                        <FaArrowRightLong className='my-auto' />
                    </div>
                </p>
            </div>
        </div>
    );
};

export default ImageCard;
