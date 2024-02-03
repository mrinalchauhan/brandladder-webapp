import React from 'react'
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import OutlineButton from '../../buttons/outline'

const ServiceCard = ({ image, title, desc, pricing, link }) => {
  return (
    <div className="card card-image-cover shadow-lg bg-orange-3 p-4">
      <img src={image} alt={title} />
      <div className="card-body p-0">
        <h2 className="card-header text-gray-600 text-sm">{title}</h2>
        <p className="text-black text-xs">{desc}</p>
        <h3>{pricing}</h3>
        <div className="card-footer">
          <Link to={link} className='w-full'>
            <OutlineButton text='Get Plan' />
          </Link>
        </div>
      </div>
    </div>
  )
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pricing: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
}

export default ServiceCard
