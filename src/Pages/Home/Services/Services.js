import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services ,setServices] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       <Container>
            <div id='services'>
            <h2 className='m-5 text-primary fs-1'>Our Services</h2>
           <div className="services-container">
           {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
           </div>
        </div>
       </Container>
    );
};

export default Services;