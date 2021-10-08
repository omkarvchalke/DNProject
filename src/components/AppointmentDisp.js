import React, { useEffect, useState } from "react";
import PatientService from "../services/PatientService";
import axios from "axios";

const AppointmentDisp = () => {
  const [appointmentsList, setappointmentsList] = useState([]);

  useEffect(() => {
    console.log("hehe");
    fetchAllAppoint();
  }, []);

  const fetchAllAppoint = () => {
    PatientService.getAllAppoint()
      .then((response) => {
        setappointmentsList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const createAppoint = () => {
    if (!paname) {
      alert("Please Add Values");
      return;
    }
    const item = {
      paname,
      apdate,
      aptime,
      pacontact,
    };

    PatientService.BookAppointment(item)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setpaName("");
    setapDate("");
    setapTime("");
    setpContact("");
  };

  const [pname, setpName] = useState("");
  const [page, setpAge] = useState("");
  const [pgender, setpGender] = useState("");
  const [pcontact, setpContact] = useState("");
  const [prevDiagno, setPrevDiagno] = useState("");
  const [currDiagno, setCurrDiagno] = useState("");
  const [prevMeds, setprevMeds] = useState("");
  const [currMeds, setCurrMeds] = useState("");
  const [dose, setDose] = useState("");
  const [illness, setIllness] = useState("");
  const [fees, setFees] = useState("");

  const [paname, setpaName] = useState("");
  const [pacontact, setpaContact] = useState("");
  const [apdate, setapDate] = useState("");
  const [aptime, setapTime] = useState("");

  const [searchValue, setsearchValue] = useState("");

  const handleDeleteAppoint = (paname) => {
    PatientService.delAppoint(paname)
      .then((response) => {
        fetchAllAppoint();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addPatienttoDB = () => {
    if (!pname) {
      alert("Please Add Values");
      return;
    }
    const item = {
      pname,
      page,
      pgender,
      pcontact,
      illness,
      prevDiagno,
      currDiagno,
      prevMeds,
      currMeds,
      dose,
      fees,
    };

    PatientService.addPatient(item)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setpName("");
    setpAge("");
    setpContact("");
    setpGender("");
    setPrevDiagno("");
    setCurrDiagno("");
    setprevMeds("");
    setCurrMeds("");
    setDose("");
    setIllness("");
    setFees("");
    handleDeleteAppoint(pname);
  };

  // const [searchList, setSearchList] = useState("");
  // const searchFunc = () => {
  //   console.log("asdfgggggggggggggggggggggggggggg", searchValue);

  //   PatientService.getSearch(searchValue)
  //     .then((response) => {
  //       console.log(response.data);
  //       setSearchList(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  const search_patient = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  return (
    <div className="col-md-8 mx-auto mt-5">
      <div className="row mx-auto ">
        <div className="col-md-3 mx-auto mb-5">
          <h2>Appointments</h2>
        </div>
        <div className="col-md-3 mx-auto mb-5">
          <button
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#AddAppointment"
          >
            Add Appointment
          </button>
        </div>

        <div className="row mx-auto ">
          <div className="col-md-12 mx-auto mb-5">
            <input
              id="searchbar"
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={search_patient}
              // onChange={this.onchange}
            />
          </div>
        </div>
      </div>

      <table id="myTable" className="table">
        <thead>
          <tr>
            <th>Name</th>

            <th>Contact No.</th>
            <th>Date</th>
            <th>Time</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {appointmentsList &&
          appointmentsList.map((appoint) => (
            <tbody key={appoint.paname}>
              <tr>
                <td>{appoint.paname}</td>
                <td>{appoint.pacontact}</td>
                <td>{appoint.apdate}</td>
                <td>{appoint.aptime}</td>
                {/*<td>{appoint.subject2}</td>
                <td>{appoint.subject3}</td>
                <td>{appoint.average}</td>
                <td>{appoint.total}</td> */}
                <td>
                  <button
                    // onClick=
                    type="button"
                    className=" btn btn-block btn-outline-warning btn-sm"
                    data-toggle="modal"
                    data-target="#DiagnosePatient"
                  >
                    Diagnose
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteAppoint(appoint.paname)}
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
      <div>
        <div
          class="modal fade"
          id="DiagnosePatient"
          tabindex="-1"
          role="dialog"
          aria-labelledby="DiagnosePatientModal"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Diagnose Patient
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
                <form onSubmit={addPatienttoDB}>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Name</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pName"
                        placeholder="Name"
                        value={pname}
                        onChange={(e) => setpName(e.target.value)}
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
                        value={page}
                        onChange={(e) => setpAge(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Gender</label>
                    <div className="col-md-9">
                      <select
                        className="text-muted form-control w-100 ml-auto"
                        aria-label="Default select example"
                        value={pgender}
                        onChange={(e) => setpGender(e.target.value)}
                        name="pgender"
                      >
                        <option defaultValue={pgender}>
                          Select the Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Contact</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pContact"
                        placeholder="Contact Number"
                        value={pcontact}
                        onChange={(e) => setpContact(e.target.value)}
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
                        placeholder="Diagnosis"
                        value={prevDiagno}
                        onChange={(e) => setPrevDiagno(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                      Current Diagnosis
                    </label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pCurrDiagnosis"
                        placeholder="Diagnosis"
                        value={currDiagno}
                        onChange={(e) => setCurrDiagno(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                      Previous Medicines
                    </label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pCurrMeds"
                        placeholder="Medicines"
                        value={prevMeds}
                        onChange={(e) => setprevMeds(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                      Current Medicines
                    </label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pCurrMeds"
                        placeholder="Medicines"
                        value={currMeds}
                        onChange={(e) => setCurrMeds(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Dose</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pDose"
                        placeholder="Dose"
                        value={dose}
                        onChange={(e) => setDose(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Illness</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pIllness"
                        placeholder="Illness"
                        value={illness}
                        onChange={(e) => setIllness(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Fees</label>
                    <div className="col-md-9">
                      <input
                        type="number"
                        className="form-control"
                        id="pFees"
                        placeholder="Fees"
                        value={fees}
                        onChange={(e) => setFees(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>

                    <button type="submit" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          class="modal fade"
          id="AddAppointment"
          tabindex="-1"
          role="dialog"
          aria-labelledby="AddAppointmentModal"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add Appointment
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
                <form onSubmit={createAppoint}>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Name</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pName"
                        placeholder="Name"
                        value={paname}
                        onChange={(e) => setpaName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Contact</label>
                    <div className="col-md-9">
                      <input
                        type="number"
                        className="form-control"
                        id="pName"
                        placeholder="Contact Number"
                        value={pacontact}
                        onChange={(e) => setpaContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Date</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pName"
                        placeholder="Date"
                        value={apdate}
                        onChange={(e) => setapDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Time</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        id="pTime"
                        placeholder="Time"
                        value={aptime}
                        onChange={(e) => setapTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>

                    <button type="submit" class="btn btn-primary">
                      Add Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDisp;
