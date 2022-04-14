import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register!</h2>
            <form action="">
             <input type="text" name="name" id="" placeholder='Your Name' />
              <input type="email" name="email" id="" placeholder='Your Email'/>
              <input type="password" name="password" id="" placeholder='Your Password' />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;