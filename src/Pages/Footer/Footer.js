import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div style={{position:'sticky', bottom:'0'}} >
            <p><small>&copy; copy right {year}</small></p>
        </div>
    );
};

export default Footer;