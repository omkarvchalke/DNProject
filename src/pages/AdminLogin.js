import React from "react";
import Navbar from "../components/Navbar";
import PatientsDisp from "../components/PatientsDisp";

const AdminLogin = () => {
  return (
    <div>
      <Navbar
        Link1="Patients"
        Link2="Book an Appointment"
        Link3="Income Graph"
        Link4="Change Doctor Password"
        redirect1="/adminLogin"
        redirect2="/adminAppointment"
        redirect3="/adminGraph"
        panel_name="Admin"
      />
      <PatientsDisp />
    </div>
  );
};

export default AdminLogin;
