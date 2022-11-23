import React from 'react';
import BannerImg from '../../../../assets/images/chair.png';
import './Banner.css'

const Banner = () => {
    return (
        <>
        <div className='my-20 grid gap-6 grid-cols-1 banner-background lg:grid-cols-2 justify-items-center items-center' >
        <div className='lg: order-2'>
            <div><img src={BannerImg} alt='banner'/></div>
        </div>
        <div>
            <h1 className='text-5xl w-4/5 mb-4 text-[#3a4256] font-bold'>Your New Smile Starts Here</h1>
            <p className='mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <button className='btn py-4 px-5 rounded-lg outline-none border-none text-white font-bold bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>GET STARTED</button>
        </div>
        </div>
        </>
    );
};

export default Banner;