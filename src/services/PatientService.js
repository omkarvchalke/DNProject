import http from "../http-common";

const getAllPatients = () => {
  return http.get("/doctor/getAllPatients");
};

const addPatient = (data) => {
  return http.post("/doctor/addPatient", data);
};

const delPatient = (pname) => {
  return http.delete(`/doctor/removePatient/${pname}`);
};

const BookAppointment = (data) => {
  return http.post("/admin/bookAppointment", data);
};

const getAllAppoint = () => {
  return http.get("/admin/getAllAppointments");
};

const delAppoint = (paname) => {
  return http.delete(`doctor/removeAppointment/${paname}`);
};

const getSearch = (paname) => {
  return http.get(`admin/getAppointment/${paname}`);
};

// eslint-disable-next-line
export default {
  getAllPatients,
  delPatient,
  getAllAppoint,
  delAppoint,
  BookAppointment,
  addPatient,
  getSearch,
};
