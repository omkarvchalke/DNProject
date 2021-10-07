import React from 'react'
import AppointmentDisp from '../components/AppointmentDisp'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
const DocAppointments = () => {
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
      <AppointmentDisp />
      <div class="fixed-bottom">
        <Footer />
      </div>
        </div>
    )
}

export default DocAppointments
