import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast'

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(response =>{
            // console.log(response.data);
            setUsers(response.data)
        })
    },[])

    const config ={
        headers: {
            authorization : `bearer ${localStorage.getItem('accessToken')}`,
        }
    };

    const handleMakeAdmin = id =>{
        axios
            .put(`http://localhost:5000/users/admin/${id}`,{},config)
            // fetch(`http://localhost:5000/users/admin/${id}`,{
            //     method: 'PUT',
            //     headers: {
            //         authorization : `bearer ${localStorage.getItem('accessToken')}`,
            //     }
            // })
            .then(response => {
                console.log(response.data);
                if(response.data.modifiedCount > 0){
                    toast.success('Make User Admin Done');
                    // const remaining = users.map(user => user._id !== id);
                    // const setAdmin = users.find(user => user._id === id);
                    // setAdmin.role = 'admin';
                    // setUsers(remaining, setAdmin);


                    axios.get('http://localhost:5000/users')
                    .then(response =>{
                        // console.log(response.data);
                        setUsers(response.data)
                    })
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className=" m-14">
        <h2 className=" text-2xl text-black mb-6">All Users</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
            <thead className="bg-[#E6E6E6]">
                <tr>
                <th>S.I</th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                { users &&
                users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                </tr>)
                }
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default AllUsers;