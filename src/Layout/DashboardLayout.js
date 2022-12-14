import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Header from "../Pages/Shared/Header/Header";
const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  // console.log(isAdmin)
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#f1f5f9]">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li>
              <Link to={'/dashboard'}>My Appointments</Link>
              {
                isAdmin && <>
                <Link to={'/dashboard/allUsers'}>All Users</Link>
                <Link to={'/dashboard/addDoctor'}>Add A Doctor</Link>
                <Link to={'/dashboard/manageDoctors'}>Manage Doctors</Link>
                </>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
