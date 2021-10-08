import React from "react";
import Navbar from "./Navbar";
import { Bar } from "react-chartjs-2";
import Footer from "../components/Footer";

const AdminGraph = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        type: "bar",
        label: "",
        data: [10, 20, 30, 40, 90, 80, 10, 20, 30, 40, 90, 80],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        type: "line",
        label: "Line Dataset",
        data: [10, 20, 30, 40, 90, 80, 10, 20, 30, 40, 90, 80],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  };
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
      <div class="container mt-5">
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
            hAxis: {
              title: "Months",
              minValue: 0,
            },
            vAxis: {
              title: "Dollars(M)",
              minValue: 0,
            },
          }}
        />
      </div>
      <div class="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default AdminGraph;
