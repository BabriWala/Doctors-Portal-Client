import React from 'react';

const Review = ({review}) => {
    const {reviewDetails, name, img, address} = review;
    return (
        <div className=' p-9 shadow-lg rounded-lg'>
            <p className='text-black text-justify mb-10'>{reviewDetails}</p>
            <div className='flex items-center'>
                <img className='rounded-full w-16 border-4 border-[#19D3AE]' src={img} alt={name} />
                <div className=' ml-4'>
                    <h5 className='text-xl font-semibold text-[#3A4256] mb-2'>{name}</h5>
                    <h6 className='text-black'>{address}</h6>
                </div>
            </div>
        </div>
    );
};

export default Review;