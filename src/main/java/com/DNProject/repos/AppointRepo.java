package com.DNProject.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.DNProject.models.Appointment;

//<ModelName, Primary Key> is the format
@Repository
public interface AppointRepo extends MongoRepository<Appointment, String>{
	Optional<Appointment> findByName(String paname);
}
