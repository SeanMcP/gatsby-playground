import React from 'react';

const Responsive = ({ children, modifier }) => {
    return (
        <section
            className={`Responsive ${
                modifier ? `Responsive--${modifier}` : ''
            }`}
        >
            {children}
        </section>
    );
};

export default Responsive;
