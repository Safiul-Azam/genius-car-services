import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='text-center bg-dark text-white fixed-bottom p-4'>
            <p><small>&copy; copy right {year}</small></p>
        </div>
    );
};

export default Footer;