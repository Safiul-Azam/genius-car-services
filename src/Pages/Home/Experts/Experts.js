import React, { useEffect, useState } from 'react';
import { Container, Row, TabContainer } from 'react-bootstrap';
import Expert1 from '../../../images/experts/expert-1.jpg'
import Expert2 from '../../../images/experts/expert-2.jpg'
import Expert3 from '../../../images/experts/expert-3.jpg'
import Expert4 from '../../../images/experts/expert-4.jpg'
import Expert5 from '../../../images/experts/expert-5.jpg'
import Expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';


const experts =[
    {id: 1 , name:'	Noah', img: Expert1},
    {id: 2 , name:'	Oliver', img: Expert2},
    {id: 3 , name:'	Elijah', img: Expert3},
    {id: 4 , name:'	William', img: Expert4},
    {id: 5 , name:'	Charlotte', img: Expert5},
    {id: 6 , name:'	Emma', img: Expert6}
]

const Experts = () => {
    return (
        <Container>
            <Row>
            <h2 className='m-5 text-primary fs-1'>Our Experts</h2>
            {
                experts.map(expert => <Expert
                key={expert.id}
                expert={expert}
                ></Expert>)
            }
            </Row>
        </Container>
    );
};

export default Experts;