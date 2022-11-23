import React from 'react';
import './MakeAppointment.css';
import doctorSmall from '../../../../assets/images/doctor-small.png'

const MakeAppointment = () => {
    return (
        <div className='make-appointment grid grid-cols-1 p-5 lg:p-0 lg:grid-cols-2 items-center mt-20 mb-40 rounded-lg'>
           <div className='hidden lg:block'>
            <img src={doctorSmall} className=" -mt-28" alt='Doctor Small' />
            </div> 
            <div>
                <h6 className='text-[#19D3AE] text-xl mb-6'>Appointment</h6>
                <h2 className='text-white font-semibold text-4xl mb-6'>Make an appointment Today</h2>
                <p className='mb-7 text-white text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='btn border-none py-4 px-5 rounded-lg text-white font-bold bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>GET STARTED</button>
            </div>
        </div>
    );
};

export default MakeAppointment;