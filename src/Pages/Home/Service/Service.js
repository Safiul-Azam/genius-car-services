import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, description} = service
    return (
        <div className='single-service'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;