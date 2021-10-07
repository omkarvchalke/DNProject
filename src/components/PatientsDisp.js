import React, { useEffect, useState } from "react";

const PatientsDisp = () => {
  const [modalShow, setModalShow] = useState(false);

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
                    data-toggle="modal"
                    data-target="#EditPatient"
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
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
      {/* Below is the modal code for Edit Patient */}
      <div
        class="modal fade"
        id="EditPatient"
        tabindex="-1"
        role="dialog"
        aria-labelledby="EditPatientModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Edit Patient
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="pName"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Age</label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      id="pAge"
                      placeholder="Age"
                    />
                  </div>
                </div>
                <fieldset className="form-group">
                  <div className="row">
                    <label className="col-form-label col-sm-2">Gender</label>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="pGender"
                          id="pGender1"
                          defaultValue="option1"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="pGender1">
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="pGender"
                          id="pGender2"
                          defaultValue="option2"
                        />
                        <label className="form-check-label" htmlFor="pGender2">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Contact</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="pContact"
                      placeholder="Contact Number"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Previous Diagnosis
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="pPrevDiagnosis"
                      placeholder="Previous Diagnosis from mongo"
                      disabled
                    />
                  </div>
                </div>{" "}
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Current Diagnosis
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="pCurrDiagnosis"
                      placeholder="Current Diagnosis"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Previous Medication
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="pPrevMeds"
                      placeholder="Previous Medication from mongo"
                      disabled
                    />
                  </div>
                </div>{" "}
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Current Medicines
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="pCurrMeds"
                      placeholder="Current Medicines"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Dose</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="pDose"
                      placeholder="Dose"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Illness</label>
                  <div className="col-sm-10">
                    <div class="dropdown show form-contol">
                      <a
                        class="btn btn-light btn-block dropdown-toggle "
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Select Illness
                      </a>

                      <div
                        class="dropdown-menu dropdown-block"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a class="dropdown-item dropdown-block" href="#">
                          Action
                        </a>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Fees</label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      id="pFees"
                      placeholder="Fees"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit patient Modal */}
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
