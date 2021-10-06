import React from 'react'
import AppointmentDisp from '../components/AppointmentDisp'
import Navbar from '../components/Navbar'

const DocAppointments = () => {
    return (
        <div>
             <Navbar
        Link1="Patients"
        Link2="Appointments"
        Link3="Graph"
        redirect1="/docLogin"
        redirect2="/docAppointments"
        redirect3="/"
        panel_name="Doctor"
      />
      <AppointmentDisp />
        </div>
    )
}

export default DocAppointments
