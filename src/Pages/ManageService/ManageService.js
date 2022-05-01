import React from 'react';
import useService from '../hooks/useService';

const ManageService = () => {
    const [services, setServices] = useService()
    const handleDelete = id => {
      const url =`https://afternoon-shelf-76964.herokuapp.com/service/${id}`
      console.log(url)
      fetch(url, {
          method:'DELETE',
      })
      .then(res => res.json())
      .then(data => {
          const remaining = services.filter(service => service._id !== id)
          setServices(remaining)
          console.log(data)
      })
    }
    return (
        <div>
            <h2>Manage service</h2>
            {
                services.map(service => 
                <h2 key={service._id}>{service.name}<button onClick={()=>handleDelete(service._id)}>X</button></h2>

                )
            }
            
        </div>
    );
};

export default ManageService;