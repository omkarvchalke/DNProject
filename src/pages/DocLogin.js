import React from "react";
import Navbar from "../components/Navbar";
import PatientsDisp from "../components/PatientsDisp";
import Footer from "../components/Footer";
const DocLogin = () => {
  return (
    <div>
      <Navbar
        Image="https://toppng.com/uploads/preview/icon-doctor-icon-115535104759u0mwhoaci.png"
        Link1="Patients"
        Link2="Appointments"
        Link3="Graph"
        redirect1="/docLogin"
        redirect2="/docAppointments"
        redirect3="/docGraph"
        panel_name="Doctor"
      />
<<<<<<< HEAD
      <PatientsDisp />
      <div class="fixed-bottom">
        <Footer />
      </div>
=======
      <PatientsDisp/>
>>>>>>> 8fbc4a3030915723943f389bc58224362bbf2409
    </div>
  );
};

export default DocLogin;
