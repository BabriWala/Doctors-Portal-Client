import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import ServiceCard from './ServiceCard/ServiceCard';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;