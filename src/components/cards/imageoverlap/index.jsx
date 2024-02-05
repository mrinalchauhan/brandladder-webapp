import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const ImageCard = ({ imageSrc, date, domain, title }) => {
    return (
        <div className="relative overflow-hidden shadow-lg rounded-3xl bg-orange-1 w-full">
            <img src={imageSrc} alt={title} className="h-auto" />

            <div className="absolute top-0 left-0 p-4 text-white">
                <span className="badge badge-xl my-2 border-orange-4 bg-white text-orange-7 shadow-2xl">
                    {date}
                </span> <br />
                <span className="badge badge-lg my-2 bg-inherit border-orange-4 text-orange-7 shadow-2xl">
                    {domain}
                </span>
            </div>

            <div className="absolute bottom-0 w-full p-4 ">
                <div className="flex justify-between">
                    <p className='bg-white text-orange-9 font-semibold rounded-3xl px-5 py-4 mx-auto shadow-2xl'>
                        {title}
                    </p>
                    <Link to='/insight' >
                        <p className='bg-white font-bold text-orange-9 rounded-full p-4 transform duration-300 -rotate-45 hover:rotate-0 transition-transform hover:bg-orange-5 hover:text-white hover:shadow-2xl'>
                            <FaArrowRightLong />
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
