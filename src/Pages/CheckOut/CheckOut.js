import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetails from '../hooks/useServiceDetails';

const CheckOut = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetails(serviceId)
    const [user] = useAuthState(auth)

    const handlePlaceOrder = e => {
        e.preventDefault()
        const order = {
            name:user.displayName,
            email: user.email,
            serviceId: serviceId,
            address:e.target.address.value,
            phone:e.target.phone.value,
            service:e.target.service.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(response=> {
            const {data} = response
            if(data.insertedId){
                toast('order is booked')
            }
            console.log(response)
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>check out your order{service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name="name" readOnly disabled value={user.displayName} />
                <br />
                <input className='w-100 mb-2' type="email" name="email" readOnly disabled value={user.email} />
                <br />
                <input className='w-100 mb-2' type="text" name="service" readOnly disabled autoComplete='off' value={service.name} />
                <input className='w-100 mb-2' type="address" name="address" placeholder='address' />
                <br />
                <input className='w-100 mb-2' type="number" name="phone" />
                <br />
                <input  className='w-100 mb-2 btn btn-primary' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default CheckOut;