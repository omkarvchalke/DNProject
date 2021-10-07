import React from "react";
import Navbar from "../components/Navbar";
import PatientsDisp from "../components/PatientsDisp";

const DocLogin = () => {
  return (
    <div>
      <Navbar
        Link1="Patients"
        Link2="Appointments"
        Link3="Graph"
        redirect1="/docLogin"
        redirect2="/docAppointments"
        redirect3="/docGraph"
        panel_name="Doctor"
      />
      <PatientsDisp />
    </div>
  );
};

export default DocLogin;
