import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const ExceptionalDental = () => {
    return (
        <div className='mb-48 flex flex-col lg:flex-row items-center justify-center'>
            <div className='w-full mb-10 lg:mb-0 lg:w-2/6'>
                <img src={treatment} className="rounded-lg" alt="treatment"/>
            </div>
            <div className='w-full ml-0 lg:w-2/6 lg:ml-20'>
                <h2 className='text-[#3a4256] text-5xl font-bold mb-7'>Exceptional Dental Care, on Your Terms</h2>
                <p className='text-justify text-black mb-11'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className='btn border-none py-4 px-5 rounded-lg text-white font-bold bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>GET STARTED</button>

            </div>
        </div>
    );
};

export default ExceptionalDental;