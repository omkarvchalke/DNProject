package com.DNProject.repos;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.DNProject.models.Patient;

public interface PatientRepo extends MongoRepository<Patient, String> {

}
