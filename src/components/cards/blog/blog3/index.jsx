import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const CardWithOverlap = ({ image, title }) => {
    return (
        <div className="relative">
            <Link to='/insight'>
                <img src={image} alt={title} className="w-full h-auto rounded-lg" />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                    <h2 className="text-xl text-orange-9 p-2 rounded-3xl flex font-semibold bg-white transition-all ease-linear duration-300 hover:bg-orange-10 hover:text-orange-1 shadow-md hover:shadow-2xl">
                        {title} <FaArrowRight className='my-auto mx-2' />
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default CardWithOverlap;
