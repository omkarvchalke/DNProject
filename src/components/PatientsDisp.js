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
      pname: "Omkar",
      page: 21,
      pgender: "Male",
      pcontact: "123456789",
      illness: "Cough Fever",
      prevDiagno: "",
      currDiagno: "Viral Fever",
      prevMeds: "",
      currMeds: "Crocin 500",
      dose: "Twice a day",
      fees: 300,
    },
    {
      pname: "Ashutosh",
      page: 21,
      pgender: "Male",
      pcontact: "123456789",
      illness: "Cough Fever",
      prevDiagno: "",
      currDiagno: "Viral Fever",
      prevMeds: "",
      currMeds: "Crocin 500",
      dose: "Twice a day",
      fees: 300,
    },
    {
      pname: "Orvin",
      page: 21,
      pgender: "Female",
      pcontact: "123456789",
      illness: "Cough Fever",
      prevDiagno: "",
      currDiagno: "Viral Fever",
      prevMeds: "",
      currMeds: "Crocin 500",
      dose: "Twice a day",
      fees: 300,
    },
  ];

  return (
    <div>
      <h2 class="text-center">Patients</h2>

      <div className="col-md-8 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {patients &&
              patients.map((pati) => (
                <tr key={pati.pname}>
                  <td>{pati.pname}</td>

                  {/* <td>{pati.subject1}</td>
                <td>{pati.subject2}</td>
                <td>{pati.subject3}</td>
                <td>{pati.average}</td>
                <td>{pati.total}</td> */}
                  <td>
                    <button
                      // onClick={() => handleDelete(pati.id)}
                      type="button"
                      className="btn btn-outline-success btn-sm btn-block"
                      data-toggle="modal"
                      data-target="#ViewPatient"
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      // onClick={() => handleUpdate(pati.id)}
                      type="button"
                      className="btn btn-outline-warning btn-sm btn-block"
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
                      className="btn btn-outline-danger btn-sm btn-block"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {patients &&
          patients.map((pati) => (
            <div>
              <div
                class="modal fade"
                id="EditPatient"
                tabindex="-1"
                role="dialog"
                aria-labelledby="EditPatientModal"
                aria-hidden="true"
              >
                <div
                  class="modal-dialog modal-dialog-centered modal-lg"
                  role="document"
                >
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
                          <label className="col-md-3 col-form-label">
                            Name
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              id="pName"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">Age</label>
                          <div className="col-md-9">
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
                            <label className="col-form-label col-md-3">
                              Gender
                            </label>
                            <div className="col-md-9">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="pGender"
                                  id="pGender1"
                                  defaultValue="option1"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="pGender1"
                                >
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
                                <label
                                  className="form-check-label"
                                  htmlFor="pGender2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Contact
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              id="pContact"
                              placeholder="Contact Number"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Previous Diagnosis
                          </label>
                          <div className="col-md-9">
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
                          <label className="col-md-3 col-form-label">
                            Current Diagnosis
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              id="pCurrDiagnosis"
                              placeholder="Current Diagnosis"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Previous Medication
                          </label>
                          <div className="col-md-9">
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
                          <label className="col-md-3 col-form-label">
                            Current Medicines
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              id="pCurrMeds"
                              placeholder="Current Medicines"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Dose
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              id="pDose"
                              placeholder="Dose"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Illness
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              id="pIllness"
                              placeholder="Illness"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label">
                            Fees
                          </label>
                          <div className="col-md-9">
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
              {/* View Patient Modal below */}
              <div
                class="modal fade"
                id="ViewPatient"
                tabindex="-1"
                role="dialog"
                aria-labelledby="ViewPatientModal"
                aria-hidden="true"
              >
                <div
                  class="modal-dialog modal-dialog-centered modal-lg"
                  role="document"
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        View Patient
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
                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">
                          Name :
                        </label>
                        <div className="col-md-9">
                          <label className="col-form-label">{pati.pname}</label>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">Age</label>
                        <div className="col-md-9">
                          <label className="col-form-label">{pati.page}</label>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">
                          Gender
                        </label>
                        <div className="col-md-9">
                          <label className="col-form-label">
                            {pati.pgender}
                          </label>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 col-form-label">
                          Contact
                        </label>
                        <div className="col-md-9">
                          <label className="col-form-label">
                            {pati.pcontact}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
