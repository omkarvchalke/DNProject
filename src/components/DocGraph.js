import React from 'react';
import { Bar } from 'react-chartjs-2';
import Navbar from './Navbar';


const DocGraph = () => {

    const state = {
        labels: ['Diabeties', 'Tuberculosis', 'Aasthama',
            'Heart Diseases', 'Alzheimers','Fever'],
        datasets: [
            {
                label: 'Patients Count',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56,91]
            }
        ]
    }

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
            <div class="container mt-5">
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default DocGraph;