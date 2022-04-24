import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    
    return (
        <div>
            <h2>this is services details:{service.name}</h2>
            <h3>{service.price}</h3>
            <Link to='/checkout'>
            <button className='btn btn-primary'>proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;