package com.DNProject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.DNProject.repos.AppointRepo;
import com.DNProject.repos.PatientRepo;
import com.DNProject.utils.AdminDAO;
import com.DNProject.utils.DoctorDAO;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping(value="/doctor",method= RequestMethod.GET)
public class DoctorController {
//	@Autowired
//	AdminDAO adminDao;
//	DoctorDAO doctorDao;
	@Autowired
	private AppointRepo appointRepo;
	@Autowired
	private PatientRepo patientRepo;
	
	
	@GetMapping(value="/allPatients")
	public ResponseEntity<?> getPatients(){
		//return adminDao.getPatients();
		List<Patient> patients = patientRepo.findAll();
		if(patients.size() > 0) {
			return new ResponseEntity<List<Patient>>(patients,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("No Paitients Available",HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping(value="/allAppointments")
	public ResponseEntity<?> getAppointments(){
		//return adminDao.getPatients();
		List<Appointment> appointments = appointRepo.findAll();
		if(appointments.size() > 0) {
			return new ResponseEntity<List<Appointment>>(appointments,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("No Paitients Available",HttpStatus.NOT_FOUND);
		}
	}	
	
	@PutMapping(value="/editPatient")
	public void editPatient(@RequestBody Patient patient) {
		//doctorDao.editPatient();
	}
	
	
	//searchPatient()
	
	@GetMapping(value="/getPatient/{pname}")
	public ResponseEntity<Appointment> getPatient(@PathVariable("pname") String paname) {
		Optional<Appointment> patientData = appointRepo.findByName(paname);
		if(patientData.isPresent()) {
			return new ResponseEntity<>(patientData.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping(value="/removePatient")
	public void removePatient() {
		//doctorDao.deletePatient();
	}
	
	
}
