import React, { useContext } from "react";
import { GrFormClose } from "react-icons/gr";
import { format, formatDistance } from "date-fns";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";



const AppointmentModal = ({
  modalOpen,
  handleModalClose,
  selectedAppOption,
  selectedDate,
  setSelectedAppOption,
  refetch
}) => {

  const {user} = useContext(AuthContext);
  const { name, slots } = selectedAppOption;
  const date = format(selectedDate, 'PP');
  
  
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    console.log(name, email, slot, phone);

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
    };
    console.log(JSON.stringify(booking))
    // console.log(booking)
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        setSelectedAppOption(null);
      toast.success("Booking Confirm");
      refetch();
      }else{
        toast.error(data.message)
      }
    })
  };

  return (
    
    <>
      <div
        className={
          modalOpen
            ? "bg-[#2121216a] fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center"
            : "hidden"
        }
      >
        {/* <div className="bg-white rounded-lg p-5"> */}
        <div className="bg-white rounded-lg p-5 w-2/6">
          <div className="flex justify-between mb-12">
            <h3 className="font-semibold text-xl">{name}</h3>
            <button
              onClick={handleModalClose}
              className=" text-4xl  bg-[#3A4256] rounded-full"
            >
              <GrFormClose />
            </button>
          </div>
          <form onSubmit={handleBooking}>
            <input
              name="date"
              className="w-full p-3 border-[#CFCFCF] border-2 bg-[#E6E6E6] text-black rounded-lg mb-6 text-base"
              value={format(selectedDate, "PP")}
              disabled
              placeholder="Date"
            />
            <select
              name="slot"
              className="w-full p-3 border-r-2 border-[#CFCFCF] border-2 rounded-lg mb-6 text-black text-base"
            >
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              className=" w-full p-3 border-[#CFCFCF] border-2 rounded-lg mb-6 text-black text-base"
              placeholder="Full Name"
              defaultValue={user?.displayName}
              disabled
            />
            <input
              type="email"
              name="email"
              className=" w-full p-3 border-[#CFCFCF] border-2 rounded-lg mb-6 text-black text-base"
              placeholder="Email"
              defaultValue={user?.email}
              disabled
            />
            <input
              type="text"
              name="phone"
              className=" w-full p-3 border-[#CFCFCF] border-2 rounded-lg mb-6 text-black text-base"
              placeholder="Phone Number"
            />
            <button
              type="submit"
              className="w-full py-3 text-white rounded-lg bg-[#3A4256]"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  ); 
};

export default AppointmentModal;
