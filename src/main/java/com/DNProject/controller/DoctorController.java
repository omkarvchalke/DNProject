package com.DNProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.DNProject.models.Appointment;
import com.DNProject.models.Patient;
import com.DNProject.utils.AdminDAO;
import com.DNProject.utils.DoctorDAO;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping(value="/doctor",method= RequestMethod.GET)
public class DoctorController {
	@Autowired
	AdminDAO adminDao;
	DoctorDAO doctorDao;
	
	@GetMapping(value="/allPatients")
	public List<Patient> getPatients(){
		return doctorDao.getPatients();
	}
	@GetMapping(value="/allAppointments")
	public List<Appointment> getAppoinments(){
		return doctorDao.getAppointments();
	}
	@PutMapping(value="/editPatient")
	public void editPatient(@RequestBody Patient patient) {
		doctorDao.editPatient();
	}
	//searchPatient()
	
	@GetMapping(value="/getPatient/{pname}")
	public Patient getPatient(@PathVariable String pname) {
		return doctorDao.searchPatient(pname);
	}
	@DeleteMapping(value="/removePatient")
	public void removePatient() {
		doctorDao.deletePatient();
	}
	
	
}
