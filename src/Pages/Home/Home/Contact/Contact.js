import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className=' lg:py-20 lg:px-0 text-center contact-background rounded-lg p-5'>
            <h6 className='text-[#19D3AE] text-xl mb-3 font-bold'>Contact Us</h6>
            <h2 className='text-white text-4xl mb-10'>Stay connected with us</h2>
            <form className=''>
                <input placeholder='Email Address' className='mb-5 block w-full lg:w-2/6 mx-auto rounded p-4'/>
                <input placeholder='Subject' className='mb-5 w-full block lg:w-2/6 mx-auto rounded p-4'/>
                <textarea placeholder='Your message' className='block w-full lg:w-2/6 h-32 mx-auto mb-10 rounded p-4'/>
                <button type='submit' className='btn border-none py-4 px-5 rounded-lg text-white font-bold bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;