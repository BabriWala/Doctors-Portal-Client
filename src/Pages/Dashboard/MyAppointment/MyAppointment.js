import React from "react";

const MyAppointment = () => {
  return (
    <div className=" m-14">
      <h2 className=" text-2xl text-black mb-6">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-[#E6E6E6]">
            <tr>
              <th>S.I</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
