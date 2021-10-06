import React from "react";
import AppointmentDisp from "../components/AppointmentDisp";
import Navbar from "../components/Navbar";
import PatientsDisp from "../components/PatientsDisp";

const AdminAppointment = () => {
  return (
    <div>
      <Navbar
        Link1="Patients"
        Link2="Book an Appointment"
        Link3="Income Graph"
        Link4="Change Doctor Password"
        redirect1="/adminLogin"
        redirect2="/adminAppointment"
        redirect3="/"
        panel_name="Admin"
      />
      <AppointmentDisp />
    </div>
  );
};

export default AdminAppointment;
