import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer p-3 bg-primary text-light text-center">
                <small>{new Date().getFullYear()}</small>
            </footer>
        </>
    );
};

export default Footer;