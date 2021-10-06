package com.DNProject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.DNProject.models.Admin;
import com.DNProject.models.Appointment;
import com.DNProject.utils.AdminDAO;
import com.DNProject.utils.DoctorDAO;
import com.DNProject.models.Patient;
import com.DNProject.repos.AppointRepo;
import com.DNProject.repos.PatientRepo;



@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping(value="/admin",method= RequestMethod.GET)

public class AdminController {
	
	@Autowired
	AdminDAO adminDao;
	//DoctorDAO doctorDao;
	@Autowired
	private AppointRepo appointRepo;
	@Autowired
	private PatientRepo patientRepo;
	
	
	@PutMapping(value="/changePass")
	public void changePass(@RequestBody Admin admin) {
		adminDao.changePass(admin);
	}
	
	@PostMapping(value="/bookAppointment")
	public ResponseEntity<Appointment> bookAppoint(@RequestBody Appointment appointment) {
		 try {
			    Appointment appoint = appointRepo.save(new Appointment(appointment.getPaname(),appointment.getPacontact(),appointment.getPadate(),appointment.getPatime()));
			    return new ResponseEntity<>(appoint, HttpStatus.CREATED);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	}
	
	@GetMapping(value="/allPatients")
	public ResponseEntity<?> getPatients(){
		//return adminDao.getPatients();
		List<Appointment> patients = appointRepo.findAll();
		if(patients.size() > 0) {
			return new ResponseEntity<List<Appointment>>(patients,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("No Paitients Available",HttpStatus.NOT_FOUND);
		}
	}
	
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
	
	
	
	
	
	
}
