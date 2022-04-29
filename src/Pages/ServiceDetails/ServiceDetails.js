import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useServiceDetails from '../hooks/useServiceDetails';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [service] = useServiceDetails(serviceId)
    
   
    
    return (
        <div>
            <h2>this is services details:{service.name}</h2>
            <h3>{service.price}</h3>
            <Link to={`/checkout/${serviceId}`}>
            <button className='btn btn-primary'>proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;