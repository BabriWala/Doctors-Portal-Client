import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () =>{
    setDeletingDoctor(null);
  }
  const config = {
    headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
    }
  const { data: doctors, isLoading, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/doctors",config);
      return response.data;
    },
  });

  const handleDeleteDoctor = doctor =>{
    // console.log(doctor)
    const config = {
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }
    axios.delete(`http://localhost:5000/doctors/${doctor._id}`,{},config)
    .then(response => {
        console.log(response.deletedCount > 0)
        if(response.data.acknowledged){
            refetch();
            toast.success(`Doctor ${doctor.name} is successfully deleted`);
        }
    })
  }
  if (isLoading) {
    return <Loading></Loading>;
  }

  // console.log(doctors)

  return (
    <div className=" m-14">
      <h2 className=" text-2xl text-black mb-6">Manage Doctors: 01</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-[#E6E6E6]">
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors &&
              doctors.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th>{index + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={doctor.image} alt="" />
                      </div>
                    </div>
                  </th>
                  <th>{doctor.name}</th>
                  <td>{doctor.email}</td>
                  <td>{doctor.speciality}</td>
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirmationModal"
                      className="btn btn-xs btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfirmationModal
        title={`Are you sure you want to delete?`}
        message={`If you delete ${deletingDoctor.name}. It cannot be undoen.`}
        closeModal={closeModal}
        modalData={deletingDoctor}
        successAction={handleDeleteDoctor}
        >

        </ConfirmationModal>
      }
    </div>
  );
};

export default ManageDoctors;
