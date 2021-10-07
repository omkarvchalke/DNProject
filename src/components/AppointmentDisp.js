import React, { useEffect, useState } from "react";

const AppointmentDisp = () => {
  const appointments = [
    {
      id: 1,
      name: "Ashutosha",
      subject1: "666",
      subject2: "Sub1",
      subject3: "Sub1",
      average: 33,
      total: 90,
    },
    {
      id: 2,
      name: "Ashutosh2",
      subject1: "Sub1",
      subject2: "Sub1",
      subject3: "Sub1",
      average: 33,
      total: 90,
    },
    {
      id: 3,
      name: "Ashutosh3",
      subject1: "Sub1",
      subject2: "Sub1",
      subject3: "Sub1",
      average: 33,
      total: 90,
    },
    {
      id: 4,
      name: "Ashutosh4",
      subject1: "Sub1",
      subject2: "Sub1",
      subject3: "Sub1",
      average: 33,
      total: 90,
    },
  ];
  return (
    <div className="col-md-8 mx-auto mt-5">
      <h2>Appointments</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>

            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {appointments &&
          appointments.map((appoint) => (
            <tbody key={appoint.id}>
              <tr>
                <td>{appoint.name}</td>
                {/* <td>{appoint.subject1}</td>
                <td>{appoint.subject2}</td>
                <td>{appoint.subject3}</td>
                <td>{appoint.average}</td>
                <td>{appoint.total}</td> */}
                <td>
                  <button
                    // onClick={() => handleUpdate(pati.id)}
                    type="button"
                    className=" btn btn-block btn-outline-warning btn-sm"
                  >
                    Diagnose
                  </button>
                </td>
                <td>
                  <button
                    // onClick={() => handleDelete(pati.id)}
                    type="button"
                    className="btn btn-block btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default AppointmentDisp;
