import React, { useEffect, useState } from 'react';
import {format} from 'date-fns'; 
import AppointmentOption from './AppointmentOption';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    // const [appOptions, setAppOptions] = useState([]);
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedAppOption, setSelectedAppOption] = useState(null);
    const date = format(selectedDate, 'PP');

    // const {data:appOptions, isLoading} = useQuery({
    const {data:appOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appOptions', date],
        queryFn: () =>  fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res=> res.json())
    })
 
    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppOptions(data))
    // },[])

    const handleModalOpen = (appOption) =>{
        setSelectedAppOption(appOption);
        setModalOpen(!modalOpen);
        
        // console.log(modalOpen)
        // console.log(selectedAppOption)
    }

    const handleModalClose = () =>{
        setModalOpen(!modalOpen);
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='my-40'>
            <h6 className='text-[#19D3AE] text-2xl text-center'>Available Appointments on {format(selectedDate, 'PP')}</h6>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-40'>
                {
                    appOptions.map(appOption => <AppointmentOption key={appOption._id} appOption={appOption}
                    handleModalOpen={handleModalOpen}
                    ></AppointmentOption>)
                }
            </div>
            {
                selectedAppOption && 
                <AppointmentModal
                modalOpen={modalOpen}
                handleModalClose={handleModalClose}
                selectedAppOption={selectedAppOption}
                selectedDate={selectedDate}
                setSelectedAppOption={setSelectedAppOption}
                refetch={refetch}
                ></AppointmentModal>
            }
        </section>
    );
};

export default AvailableAppointments;