import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogCard2 = ({ order, image, editor, designation, topic, date, readTime, desc, navLink }) => {
    return (
        <div className="card max-w-full shadow-lg bg-inherit">
            <div className={`card-body max-w-full grid grid-${order}-5 gap-4 border p-4`}>
                <img
                    src={image} alt={topic}
                    className='col-span-2 h-full w-full rounded-3xl'
                />
                <div className="col-span-2 my-auto">
                    <div className="flex my-2">
                        <img src="" alt="" />
                        <div className="flex flex-col">
                            <p className='text-sm text-black'>{editor}</p>
                            <small className='text-xs text-gray-800'>{designation}</small>
                        </div>
                    </div>
                    <div className="flex flex-col my-2">
                        <h1 className='text-blue-950' >{topic}</h1>
                        <div className="flex">
                            <small className='font-xs' >{readTime}</small>
                            <small className='mx-4 font-xs'>{date}</small>
                        </div>
                    </div>
                    <p className='text-xs text-black my-2'>
                        {desc}
                        <Link to={navLink} className='font-semibold'>
                            Read More ...
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

BlogCard2.propType = {
    order: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    editor: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    navLink: PropTypes.string.isRequired
}

export default BlogCard2
