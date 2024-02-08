import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TestimonialCard = ({ image, topic, content, link, domain }) => {

    const limitContent = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        } else {
            return text;
        }
    };

    return (
        <div className='container p-4 shadow-lg rounded-3xl transition duration-500 ease-in-out hover:bg-orange-2 hover:shadow-xl'>
            <div className="border-none overflow-hidden lg:h-52 md:h-72 w-full m-auto shadow p-4 rounded-2xl">
                <img src={image} alt={topic} className="rounded-full m-auto" />
            </div>

            <div className='text-black space-y-2'>
                <div className="">
                    <small className='text-xs'>{domain}</small>
                    <h2 className='font-medium'>{topic}</h2>
                </div>
                <p className='text-xs'>
                    {limitContent(content, 20)}
                    <Link to={link} className=' link link-primary text-xs' > Read More ... </Link>
                </p>
            </div>
        </div>
    );
}

TestimonialCard.propTypes = {
    image: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default TestimonialCard;
