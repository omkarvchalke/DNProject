package com.DNProject.repos;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.DNProject.models.Appointment;

//<ModelName, Primary Key> is the format
public interface AppointRepo extends MongoRepository<Appointment, String>{

}
