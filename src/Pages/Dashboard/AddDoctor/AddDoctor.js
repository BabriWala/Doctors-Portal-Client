import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loading from "../../Shared/Loading/Loading";
import toast from 'react-hot-toast';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const {data: specialities, isLoading} = useQuery({
        queryKey: ['speciality'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/appointmentSpeciality');
            const data = await res.json();
            return data;
            
            // axios.get('http://localhost:5000/appointmentSpeciality')
            // .then(response)
        }
    })

    // console.log(data);
    if(isLoading){
        return <Loading></Loading>
    }

    const imageHostKey = process.env.REACT_APP_imgbb_Key;
    // console.log(imageHostKey)

    const handleAddDoctor = (data) => {
        // console.log(data)
        const image = data.image[0]
        // console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_Key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            // console.log(imgData);
            if(imgData.success){
                // console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    image: imgData.data.url
                }
                const config = {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`}
                }
                // console.log(doctor);
                axios.post('http://localhost:5000/doctors', doctor, config)
                .then(response => {
                    // console.log(response.data)
                    if(response.data.acknowledged){
                        toast.success(`${data.name} is added successfully.`)
                        navigate('/dashboard/manageDoctors')
                    }
                })
            }
        })
    };

  return (
    <div>
      <h2 className="p-7 text-black text-2xl font-bold">Add A Doctor</h2>
      <div className=" w-2/5 flex items-center justify-center">
        <div className="w-full lg:w-96 bg-white p-7 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit(handleAddDoctor)} className="">
            <label className="  text-sm" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              {...register('name', { required: true })}
              className=" p-3 mt-3 mb-5 outline-none border border-[#CFCFCF] rounded-lg  w-full"
            />
            <label className="  text-sm" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter Your Email"
              {...register('email', { required: true })}
              className=" p-3 mt-3 mb-5 outline-none border border-[#CFCFCF] rounded-lg  w-full"
            />
                <label className="  text-sm" htmlFor="specialist">
                Specialty
                </label>
              <select {...register('speciality', { required: true })}  className="p-3 mt-3 mb-5 text-black bg-white outline-none border border-[#CFCFCF] rounded-lg  w-full">
                {
                    specialities.map(speciality => <option
                    value={speciality.name}
                    key={speciality._id}
                    >{speciality.name}</option>)
                }
              </select>
            <input
              id="img"
              type="file"
              name="img"
              placeholder="Enter Your Image"
              {...register('image', { required: true })}
              className=" p-3 mt-3 mb-5 outline-none border border-[#CFCFCF] rounded-lg  w-full"
            />
            <button
              type="submit"
              className="rounded-lg p-3 bg-[#3A4256] mb-3 border-transparent border text-[#D4D9E3] uppercase w-full
                    hover:bg-transparent hover:text-[#3A4256] hover:border-[#3A4256] hover:border"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
