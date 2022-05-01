// import axios from 'axios';
import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    //   if(user){
        // return navigate(from , {replace:true});
    //   }
      if(loading){
          return <Loading></Loading>
      }
      
    const handleSubmit = async e =>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email, password)
        const {data} = await axios.post('https://afternoon-shelf-76964.herokuapp.com/login',{email})
        localStorage.setItem('accessToken',data.accessToken)
        navigate(from , {replace:true});
    }
    const navigateRegister = () =>{
        navigate('/register')
    }
    return (
        <div>
           <div className='mx-auto w-50 mt-4 border p-3'>
           <h2>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>

                <p className=''>New to genius-car-services <span className='text-danger ' onClick={navigateRegister}> Please Register</span></p>
            </Form>
           </div>
           
            <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Login;