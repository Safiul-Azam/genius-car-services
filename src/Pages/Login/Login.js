import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(password, email)
    }
    const navigateRegister = () =>{
        navigate('/register')
    }
    return (
        <div className='mx-auto w-50 mt-4 border p-3'>
            <h2>Please Login</h2>
            <Form onClick={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className=''>New to genius-car-services <span className='text-danger ' onClick={navigateRegister}> Please Register</span></p>
            </Form>
            
        </div>
    );
};

export default Login;