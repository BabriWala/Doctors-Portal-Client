import React, { useContext } from "react";
import { useQuery } from '@tanstack/react-query';
import {AuthContext} from '../../../context/AuthProvider';

const MyAppointment = () => {
  const {user} = useContext(AuthContext);
  // console.log(user);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const {data: bookings = []}  = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () =>{
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })

  console.log(bookings)

  return (
    <div className=" m-14">
      <h2 className=" text-2xl text-black mb-6">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-[#E6E6E6]">
            <tr>
              <th>S.I</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((booking, index) => <tr key={booking._id}>
              <th>{index + 1}</th>
              <th>{booking.patient}</th>
              <td>{booking.treatment}</td>
              <td>{booking.appointmentDate}</td>
              <td>{booking.slot}</td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
