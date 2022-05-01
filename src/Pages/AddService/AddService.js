import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const url =`https://afternoon-shelf-76964.herokuapp.com/service`
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        } )
        console.log(data);
    }
    
    return (
        <div className='w-50 mx-auto'>
            <h2>please add new service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='service name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' {...register("description", )} />
                <input className='mb-2' placeholder='price' type="number" {...register("price", )} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img", )} />
                <input value='Add service' type="submit" />
            </form>
        </div>
    );
};

export default AddService;