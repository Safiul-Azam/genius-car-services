import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id,name, img, price, description} = service
    const navigate = useNavigate()
    const navigateToServiceDetails = id => {
        navigate('/service/'+ id)
    }
    return (
            <div className='single-service'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={()=> navigateToServiceDetails(_id)} className='btn btn-primary'>Get service</button>
        </div>
    );
};

export default Service;