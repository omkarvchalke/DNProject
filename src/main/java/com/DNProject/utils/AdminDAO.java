package com.DNProject.utils;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.DNProject.models.Admin;
import com.DNProject.models.Appointment;
import com.DNProject.models.Patient;

public interface AdminDAO {
	public void changePass(Admin admin);
	public ResponseEntity<Appointment> bookAppoint(Appointment appointment);
	public ResponseEntity<List<Patient>> getPatients();
	public Patient getPatient(String name); //search
	public void removePatient();
	
}
