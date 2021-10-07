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

  const AddAppointmentList = (appt) => {
    console.log(appt);
    // setappointmentsList([...appointmentsList, appt]);
    console.log(appointmentsList);
  };

  const AddAppointment = (e) => {
    e.preventDefault();
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
    // setappointmentsList([...appointmentsList, item]);
    // AddAppointmentList({ paname, apdate, aptime, pacontact });
    axios
      .post(`localhost:8025/admin/bookAppointment`, item)
      .then((response) => {
        console.log(response);
      });
    console.log(appointmentsList);
    // TestApp();
    // axios.post("/admin/bookAppointment", appointmentsList);
    // BookAppointment(appointmentsList);
  };

  // const TestApp = async () => {
  //   try {
  //     console.log(appointmentsList);
  //     const res = axios.post(
  //       "localhost:8025/admin/bookAppointment",
  //       appointmentsList
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleDeleteAppoint = (paname) => {
    PatientService.delAppoint(paname)
      .then((response) => {
        fetchAllAppoint();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const BookAppointment = (aList) => {
    PatientService.BookAppointment(aList)
      .then((response) => {
        fetchAllAppoint();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // ///////////////////////////////////////////
  // useState = {
  //   search: ""
  // };
  // const { search } = this.state;
  //     const fileredAppointments = appointmentsList.filter(country => {
  //       return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  //     });

  // /////////////////////////////////////
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
        <div className="col-md-3 mx-auto mb-5">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // onChange={this.onchange}
          />
        </div>
        <div className="col-md-3 mx-auto mb-5">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>

            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {appointmentsList &&
          appointmentsList.map((appoint) => (
            <tbody key={appoint.paname}>
              <tr>
                <td>{appoint.paname}</td>
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
                <form onSubmit="">
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
                    <label className="col-md-3 col-form-label">Diagnosis</label>
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
                    <label className="col-md-3 col-form-label">Medicines</label>
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
                <form onSubmit={AddAppointment}>
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
