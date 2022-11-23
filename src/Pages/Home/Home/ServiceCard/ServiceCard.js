import React from 'react';
import { AiOutlineClockCircle} from "react-icons/ai";
import { MdLocationOn} from "react-icons/md";
import { FiPhoneCall} from "react-icons/fi";

const ServiceCard = () => {
    return (
        <div className='my-48 grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-white py-14 px-6 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>
                <div className='text-8xl mx-auto'><AiOutlineClockCircle/></div>
                <div className='cols lg:col-span-2 text-center lg:text-left'>
                    <h6 className='text-2xl text-[rgba(255, 255, 255, 1)] mb-4'>Opening Hours</h6>
                    <p className='text-[rgba(255, 255, 255, 1)]'>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-white py-14 px-6 rounded-lg bg-[#3A4256]'>
                <div className='text-8xl mx-auto'><MdLocationOn/></div>
                <div className='cols lg:col-span-2 text-center lg:text-left'>
                    <h6 className='text-2xl text-[rgba(255, 255, 255, 1)] mb-4'>Visit our location</h6>
                    <p className='text-[rgba(255, 255, 255, 1)]'>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 text-white py-14 px-6 rounded-lg bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>
                <div className='text-8xl mx-auto'><FiPhoneCall/></div>
                <div className='cols lg:col-span-2 text-center lg:text-left'>
                    <h6 className='text-2xl text-[rgba(255, 255, 255, 1)] mb-4'>Contact us now</h6>
                    <p className='text-[rgba(255, 255, 255, 1)]'>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;