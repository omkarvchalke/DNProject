package comDNAssessment.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import comDNAssessment.models.Appointment;
import comDNAssessment.models.Patient;
import comDNAssessment.repos.AppointRepository;
import comDNAssessment.repos.PatientRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	PatientRepository patientRepo;
	@Autowired
	AppointRepository appointRepo;
	
	@PutMapping("/changePass")
	public void chansPass() {}
	
	@PostMapping("/bookAppointment")
	public ResponseEntity<Appointment> bookAppoinment(@RequestBody Appointment appointment){
		try {
			//Appointment appoint_data= appointRepo.save(new Appointment(appointment.getPaname(),appointment.getPacontact(),appointment.getApdate(),appointment.getAptime()));
			Appointment appoint_data= appointRepo.save(appointment);
			return new ResponseEntity<>(appoint_data, HttpStatus.CREATED);
		}catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/removeAppointment/{paname}")
	public ResponseEntity<HttpStatus> removeAppointment(@PathVariable("paname") String paname){
		try {
			appointRepo.deleteByName(paname);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/getAppointment/{paname}")
	public ResponseEntity<List<Appointment>> findByName(@PathVariable("paname") String paname){
		List<Appointment> appointment = appointRepo.findAllByName(paname);
		System.out.println(appointment);
		
		if(!appointment.isEmpty()) {
			return new ResponseEntity<>(appointment,HttpStatus.OK);
		}
			
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/getAllPatients")
	public ResponseEntity<List<Patient>> getAllPatinets(){
		try {
			List<Patient> allPatients = new ArrayList<>();
			patientRepo.findAll().forEach(allPatients::add);
			
			if(allPatients.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			else {
				return new ResponseEntity<>(allPatients, HttpStatus.OK);
			}
		}catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/editMeds/{pname}")
	public ResponseEntity<Patient> editMeds(@PathVariable("pname") String pname, @RequestBody Patient patient){
		Optional<Patient> meds_data = patientRepo.findAllByNameMeds(pname);
		
		if(meds_data.isPresent()) {
			Patient p = meds_data.get();
			p.setPrevMeds(patient.getPrevMeds());
			p.setCurrMeds(patient.getCurrMeds());
			
			return new ResponseEntity<>(patientRepo.save(p), HttpStatus.OK);
		}
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	} 
	
}
