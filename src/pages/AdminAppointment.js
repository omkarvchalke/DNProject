import React from "react";
import AppointmentDisp from "../components/AppointmentDisp";
import Navbar from "../components/Navbar";
import PatientsDisp from "../components/PatientsDisp";
import Footer from "../components/Footer";

const AdminAppointment = () => {
  return (
    <div>
      <Navbar
      Image="https://toppng.com/uploads/preview/health-plan-icon-hospital-icon-blue-11553476430fckf2owtwt.png"
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
      <div class="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default AdminAppointment;
