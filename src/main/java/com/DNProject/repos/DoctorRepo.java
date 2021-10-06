package com.DNProject.repos;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.DNProject.models.Doctor;

public interface DoctorRepo extends MongoRepository<Doctor, String> {

}
