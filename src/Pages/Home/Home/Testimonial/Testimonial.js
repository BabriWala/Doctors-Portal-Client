import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            reviewDetails: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            img: people1 
        },
        {
            _id: 2,
            reviewDetails: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            img: people2 
        },
        {
            _id: 3,
            reviewDetails: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            img: people3 
        },
    ]

    return (
        <div className='mb-36'>
            <div className='flex justify-between'>
                <div>
                <h6 className='text-[#19D3AE] text-xl mb-3 font-bold'>Testimonial</h6>
                <h2 className='text-[#3a4256] text-4xl'>What Our Patients Says</h2>
                </div>
                <div className='text-right'>
                    <img src={quote} className='w-24 lg:w-48 justify-self-end inline mb-7' alt="Quote"/>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;