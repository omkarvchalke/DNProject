import http from "../http-common";

const getAllPatients = () => {
  return http.get("/doctor/getAllPatients");
};

const addPatient = () => {
  return http.post("/doctor/addPatient");
};
const delPatient = (pname) => {
  return http.delete(`/doctor/removePatient/${pname}`);
};

const BookAppointment = (aList) => {
  return http.post(`/admin/bookAppointment/${aList}`);
};
const getAllAppoint = () => {
  return http.get("/admin/getAllAppointments");
};
const delAppoint = (paname) => {
  return http.delete(`doctor/removeAppointment/${paname}`);
};
// eslint-disable-next-line
export default {
  getAllPatients,
  delPatient,
  getAllAppoint,
  delAppoint,
  BookAppointment
};
