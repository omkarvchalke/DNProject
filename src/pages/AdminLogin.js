import React from "react";
import Navbar from "../components/Navbar";
import PatientsDisp from "../components/PatientsDisp";
import Footer from "../components/Footer";
const AdminLogin = () => {
  return (
    <div>
      <Navbar
        Image="https://toppng.com/uploads/preview/health-plan-icon-hospital-icon-blue-11553476430fckf2owtwt.png"
        Link1="Patients"
        Link2="Book an Appointment"
        Link3="Income Graph"
        redirect1="/adminLogin"
        redirect2="/adminAppointment"
        redirect3="/adminGraph"
        panel_name="Admin"
      />
      <PatientsDisp />
      <div class="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default AdminLogin;
