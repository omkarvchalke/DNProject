package com.DNProject.utils;

import java.util.List;

import com.DNProject.models.Appointment;
import com.DNProject.models.Patient;

public interface DoctorDAO {
	public List<Patient> getPatients();
	public List<Appointment> getAppointments();
	public Patient editPatient();
	public Patient searchPatient(String pname);
	public void deletePatient();
	public Patient submitAppoint();  //submitting in db and deleting appoint from appoint list
	
}




