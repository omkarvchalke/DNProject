import React, { useEffect, useState } from "react";

const PatientsDisp = () => {
  //     const [associates, setAssociates] = useState([]);
  //   //const [currAssc, setCurrAssc] = useState({});

  //   useEffect(() => {
  //     console.log("hehe");
  //     fetchAll();
  //   }, []);

  //   const fetchAll = () => {
  //     AssociateService.getAll()
  //       .then((response) => {
  //         setAssociates(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  //   const handleDelete = (id) => {
  //     AssociateService.delAssc(id)
  //       .then((response) => {
  //         fetchAll();
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  //   const handleUpdate = (id) => {};
  const patients = [
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
    <div className="col-md-8 mx-auto">
      <h2>Patients</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Diagnosis</th>
            <th>Dose</th>
            <th>Fees</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {patients &&
          patients.map((pati) => (
            <tbody key={pati.id}>
              <tr>
                <td>{pati.name}</td>
                <td>{pati.subject1}</td>
                <td>{pati.subject2}</td>
                <td>{pati.subject3}</td>
                <td>{pati.average}</td>
                <td>{pati.total}</td>
                <td>
                  <button
                    // onClick={() => handleUpdate(pati.id)}
                    type="button"
                    className="btn btn-outline-warning btn-sm"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    // onClick={() => handleDelete(pati.id)}
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    // onClick={() => handleDelete(pati.id)}
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    data-toggle="modal" data-target="#exampleModalCenter"
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>

    // <div className="list row">
    //   <div className="col-md-8 mx-auto">
    //     <h4>Associates List</h4>

    //     <ul className="list-group">
    //       {associates &&
    //         associates.map((assc) => (
    //           <li className={"list-group-item "} key={assc.name}>
    //             {assc.name}
    //           </li>

    //         ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default PatientsDisp;
