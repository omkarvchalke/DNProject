package com.DNProject.repos;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.DNProject.models.Appointment;
import com.DNProject.models.Patient;

@Repository
public interface PatientRepo extends MongoRepository<Patient, String> {
	Optional<Appointment> findByName(String pname);
}
