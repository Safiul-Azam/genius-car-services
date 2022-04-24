import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendEmailVerification, updateProfile } from 'firebase/auth';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification: true});
      if(user){
          navigate('/home')
      }
      if(error){
          return <p>{error.message}</p>
      }
      const handleSubmit = async e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
       await createUserWithEmailAndPassword(email,password)   
       await updateProfile({ displayName: name });
       console.log('Updated profile');
    }
      const navigateLogin = ()=> {
          navigate('/login')
      }
    return (
        <div>
            <div className='register-form'>
            <h2 className='text-center mb-4 text-warning'>Please Register!</h2>
            <form onSubmit={handleSubmit}>
             <input type="text" name="name" id="1" placeholder='Your Name' />
              <input type="email" name="email" id="2" placeholder='Your Email'/>
              <input type="password" name="password" id="3" placeholder='Your Password' />
                <input type="submit" value="Register" />
                <p className=''>New to genius-car-services <span className='text-danger ' onClick={navigateLogin}> Please Log in</span></p>
            </form>

        </div>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;