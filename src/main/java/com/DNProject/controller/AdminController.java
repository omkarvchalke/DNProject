package com.DNProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	DoctorDAO doctorDao;
	
	
	@PutMapping(value="/changePass")
	public void changePass(@RequestBody Admin admin) {
		adminDao.changePass(admin);
	}
	
	@PostMapping(value="/bookAppointment")
	public void bookAppoint(@RequestBody Appointment appointment) {
		adminDao.bookAppoint(appointment);
	}
	
	@GetMapping(value="/allPatients")
	public List<Patient> getPatients(){
		return adminDao.getPatients();
	}
	
	@GetMapping(value="/getPatient/{pname}")
	public Patient getPatient(@PathVariable String pname) {
		return adminDao.getPatient(pname);
	}
	
	
	
	
	
	
}
