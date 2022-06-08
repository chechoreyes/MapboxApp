import React from 'react';
import reactlogo from '../logo.svg';

export const ReactLogo = () => {
    return (
        <img
            src={reactlogo}
            alt='React Logo'
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '130px',
            }}
        />
    );
};
