import React from "react";

const AppointmentOption = ({ appOption, handleModalOpen }) => {
  const { name, slots } = appOption;

  return (
    <div className=" py-11 px-28 rounded-lg shadow-lg text-center">
      <h5 className="text-xl font-semibold text-[#19D3AE] mb-2">{name}</h5>
      <h6 className="text-black uppercase text-sm mb-3">
        {slots.length > 0 ? slots[0] : "Try Another Day"}
      </h6>
      <h6 className=" text-xs text-black mb-4">
        {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
      </h6>
      {slots.length === 0 ? (
        <button
          onClick={() => handleModalOpen(appOption)}
          disabled
          className="btn border-none py-4 px-5 rounded-lg text-[#ffffff6f] font-bold bg-[#3a4256c0]"
        >
          Book Appointment
        </button>
      ) : (
        <button
          onClick={() => handleModalOpen(appOption)}
          className="btn border-none py-4 px-5 rounded-lg text-white font-bold bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"
        >
          Book Appointment
        </button>
      )}
    </div>
  );
};

export default AppointmentOption;
