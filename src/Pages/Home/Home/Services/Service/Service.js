import React from 'react';

const Service = ({service}) => {
    const {img, title, description} = service;
    return (
        <div className='text-center py-11 px-14 rounded-lg shadow-lg'>
            <img className='mx-auto mb-9' src={img} alt={title} />
            <h3 className='text-[#3a4256] text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-[#000000]'>{description}</p>
        </div>
    );
};

export default Service;