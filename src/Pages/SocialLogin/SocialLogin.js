import React from 'react';
import Google from '../../images/social-icon/google.png'
import GitHub from '../../images/social-icon/github.png'
import Facebook from '../../images/social-icon/facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    if (user || user1) {
        navigate('/home')
    }
    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger text-center'>{error.message}</p>
        </div>
    }
    let loadingElement
    if (loading) {
        loadingElement= <p>Loading...</p>;
    }
    return (
        <div className='mx-auto w-50'>
            <div className='mt-3 d-flex align-items-center  '>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-3 '>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            {loadingElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning mx-auto d-block w-50 my-3'>
                    <img className=' px-3' src={Google} alt="" />
                    Google Sign In
                </button>
                <button className='btn btn-primary mx-auto d-block w-50 my-3'>
                    <img className=' px-3' src={Facebook} alt="" />
                    Facebook Sign In
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-dark mx-auto d-block w-50 '>
                    <img className=' px-3' src={GitHub} alt="" />
                    GitHub Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;