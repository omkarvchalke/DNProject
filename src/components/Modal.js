import React, { useEffect, useState } from "react";
import PatientService from "../services/PatientService";

const Modal = (props) => {
  const [patientsList, setpatientsList] = useState([]);
  useEffect(() => {
    console.log(props.modalName);
    fetchAll();
  }, []);

  const fetchAll = () => {
    PatientService.getAllPatients()
      .then((response) => {
        setpatientsList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div
      class="modal fade"
      id="ViewPatient"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ViewPatientModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
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
              <label className="col-md-3 col-form-label">Name :</label>
              <div className="col-md-9">
                <label className="col-form-label">{props.modalName}</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Age</label>
              <div className="col-md-9">
                <label className="col-form-label">Name value</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Gender</label>
              <div className="col-md-9">
                <label className="col-form-label">Name value</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Contact</label>
              <div className="col-md-9">
                <label className="col-form-label">Name value</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
