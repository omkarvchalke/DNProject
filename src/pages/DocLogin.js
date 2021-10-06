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
        redirect1="/"
        redirect2="/"
        redirect3="/"
      />
      <PatientsDisp />
    </div>
  );
};

export default DocLogin;
