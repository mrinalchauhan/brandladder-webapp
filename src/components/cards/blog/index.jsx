import React from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ image, name, designation, content }) => {
    return (
        <div className='container p-4 shadow-lg rounded-3xl transition duration-500 ease-in-out hover:bg-orange-2 hover:shadow-xl'>
            <div className="flex justify-start space-x-4">
                <div className="rounded-full">
                    <img src={image} alt={name} className="rounded-full" />
                </div>
                <div className="flex flex-col my-auto">
                    <h5 className="font-bold">{name}</h5>
                    <small className="text-gray-500">{designation}</small>
                </div>
            </div>
            <small className='p-4'>
                {content}
            </small>
        </div>
    );
}

TestimonialCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default TestimonialCard;
