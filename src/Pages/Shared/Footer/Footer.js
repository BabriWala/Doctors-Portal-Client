import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className=' my-20 p-5 footer-section'>
            <div className=' mb-28 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div>
                    <h2 className='text-lg font-bold text-[#939393] mb-5'>SERVICES</h2>
                    <Link className='block mb-4 text-[#3A4256]'>Emergency Checkup</Link>
                    <Link className='block mb-4 text-[#3A4256]'>Monthly Checkup</Link>
                    <Link className='block mb-4 text-[#3A4256]'>Weekly Checkup</Link>
                    <Link className='block mb-4 text-[#3A4256]'>Deep Checkup</Link>
                </div>
                <div>
                    <h2 className='text-lg font-bold text-[#939393] mb-5'>ORAL HEALTH</h2>
                    <Link className='block mb-4 text-[#3A4256]'>Fluoride Treatment</Link>
                    <Link className='block mb-4 text-[#3A4256]'>Cavity Filling</Link>
                    <Link className='block mb-4 text-[#3A4256]'>Teath Whitening</Link>
                </div>
                <div>
                    <h2 className='text-lg font-bold text-[#939393] mb-5'>OUR ADDRESS</h2>
                    <Link className='block mb-4 text-[#3A4256]'>New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='text-center text-black'>Copyright 2022 All Rights Reserved</div>
        </div>
    );
};

export default Footer;