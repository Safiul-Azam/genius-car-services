import React from 'react';

const Service = ({service}) => {
    const {name, img, price, discription} = service
    return (
        <div>
            <img src={img} alt="" />
            <h2>single service:{name}</h2>
        </div>
    );
};

export default Service;