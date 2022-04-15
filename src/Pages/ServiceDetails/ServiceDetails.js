import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    
    return (
        <div>
            <h2>this is services details:{serviceId}</h2>
            <Link to='/checkout'>
            <button className='btn btn-primary'>proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;