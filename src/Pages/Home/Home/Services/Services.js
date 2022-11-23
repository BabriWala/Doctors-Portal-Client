import React from 'react';
import cavity from '../../../../assets/images/cavity.png';
import fluoride from '../../../../assets/images/fluoride.png';
import whitening from '../../../../assets/images/whitening.png';
import Service from './Service/Service';

const Services = () => {

    const services = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            img: fluoride,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            title: 'Cavity Filling',
            img: cavity,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            img: whitening,
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]



    return (
        <div className='mb-28'>
            <h6 className='text-xl font-bold text-[#19d3ae] mb-2 text-center'>OUR SERVICES</h6>
            <h2 className='text-4xl text-[#3a4256] mb-16 text-center'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-9'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;