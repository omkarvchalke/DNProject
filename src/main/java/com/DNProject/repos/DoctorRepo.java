package com.DNProject.repos;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.DNProject.models.Doctor;

@Repository
public interface DoctorRepo extends MongoRepository<Doctor, String> {

}
