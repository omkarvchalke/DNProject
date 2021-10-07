package comDNAssessment.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


import comDNAssessment.models.Appointment;

public interface AppointRepository extends MongoRepository<Appointment, String> {
	
	@Query(value="{'paname' : ?0}", delete = true)
	Optional<Appointment> deleteByName(String paname);
	
	@Query("{paname :?0}")
	List<Appointment> findAllByName(String paname);
}
