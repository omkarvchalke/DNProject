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

import comDNAssessment.repos.AppointRepository;
import comDNAssessment.repos.PatientRepository;
import comDNAssessment.models.Appointment;
import comDNAssessment.models.Patient;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/doctor")
public class DoctorController {

	@Autowired
	PatientRepository patientRepo;
	@Autowired
	AppointRepository appointRepo;
	
	@GetMapping("/allAppointments")
	public ResponseEntity<List<Appointment>> getAllAppointments(){
		try {
			List<Appointment> allAppointments = new ArrayList<>();
			appointRepo.findAll().forEach(allAppointments::add);
			
			if(allAppointments.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			else {
				return new ResponseEntity<>(allAppointments, HttpStatus.OK);
			}
		}catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/addPatient")
	public ResponseEntity<Patient> addPatient(@RequestBody Patient patient){
		try {
			Patient patient_data= patientRepo.save(new Patient(patient.getPname(),patient.getPage(),patient.getGender(),patient.getPcontact(),patient.getIllness(),patient.getPrevDiagno(),patient.getCurrDiagno(),patient.getPrevMeds(),patient.getCurrMeds(),patient.getDose(),patient.getFees()));
			return new ResponseEntity<>(patient_data, HttpStatus.CREATED);
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

	@DeleteMapping("/removePatient/{pname}")
	public ResponseEntity<HttpStatus> removePatient(@PathVariable("pname") String pname){
		try {
			patientRepo.deleteByName(pname);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
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

	@GetMapping("/getPatient/{pname}")
	public ResponseEntity<List<Patient>> findByName(@PathVariable("pname") String pname){
		List<Patient> patients = patientRepo.findAllByName(pname);
		System.out.println(patients);
		
		if(!patients.isEmpty()) {
			return new ResponseEntity<>(patients,HttpStatus.OK);
		}
			
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/editPatient/{pname}")
	public ResponseEntity<Patient> editMeds(@PathVariable("pname") String pname, @RequestBody Patient patient){
		Optional<Patient> p_data = patientRepo.findAllByNameMeds(pname);
		
		if(p_data.isPresent()) {
			Patient p = p_data.get();
			// p is existing data
			//patient is new data
			System.out.println(p);
			p.setPname(patient.getPname());
			p.setPage(patient.getPage());
			p.setGender(patient.getGender());
			p.setPcontact(patient.getPcontact());
			
			if(p.getPrevDiagno()== "") {
				System.out.println(p.getCurrDiagno());
				p.setPrevDiagno(p.getCurrDiagno());
				p.setCurrDiagno(patient.getCurrDiagno());
			}
			
			
			
			//p.setPrevDiagno(patient.getPrevDiagno());
			//p.setCurrDiagno(patient.getCurrDiagno());
			p.setPrevMeds(patient.getPrevMeds());
			p.setCurrMeds(patient.getCurrMeds());
			p.setDose(patient.getDose());
			p.setIllness(patient.getIllness());
			p.setFees(patient.getFees());
			
			return new ResponseEntity<>(patientRepo.save(p), HttpStatus.OK);
		}
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	} 

}
