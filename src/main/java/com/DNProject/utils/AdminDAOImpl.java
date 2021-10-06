package com.DNProject.utils;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.DNProject.models.Admin;
import com.DNProject.models.Appointment;
import com.DNProject.models.Patient;
import com.DNProject.repos.AppointRepo;
import com.DNProject.repos.PatientRepo;

@Repository
public class AdminDAOImpl implements AdminDAO {
	
	@Autowired
	private AppointRepo arepo;
	private PatientRepo prepo;
	
	
	@Override
	public void changePass(Admin admin) {
		// TODO Auto-generated method stub
		
		
	}

	@Override
	public ResponseEntity<Appointment> bookAppoint(Appointment appointment) {
		 try {
			    Appointment appoint = arepo.save(new Appointment(appointment.getPaname(),appointment.getPacontact(),appointment.getPadate(),appointment.getPatime()));
			    return new ResponseEntity<>(appoint, HttpStatus.CREATED);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
		
	}

	@Override
	public ResponseEntity<List<Patient>> getPatients() {
		List<Patient> patients = prepo.findAll();
		if(patients.size() > 0) {
			return new ResponseEntity<List<Patient>>(patients,HttpStatus.OK);
		}
		else {
			return null;
		}
		
	}

	@Override
	public Patient getPatient(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removePatient() {
		// TODO Auto-generated method stub
		
	}

}
