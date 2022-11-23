import React from 'react';
import './AppointmentBanner.css'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {


    return (
        <section className='my-20'>
            <div className='grid gap-6 grid-cols-1 banner-background lg:grid-cols-2 justify-items-center items-center' >
        <div className=''>
            <DayPicker
            mode='single'
            selected={selectedDate}
            onSelect={setSelectedDate}
            />
        </div>
        <div>
            <h1 className='text-5xl w-4/5 mb-4 text-[#3a4256] font-bold'>Your New Smile Starts Here</h1>
            <p className='mb-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <button className='btn border-none py-4 px-5 rounded-lg text-white font-bold bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>GET STARTED</button>
        </div>
        </div>
        </section>
    );
};

export default AppointmentBanner;