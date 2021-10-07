package comDNAssessment.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import comDNAssessment.models.Patient;


public interface PatientRepository extends MongoRepository<Patient, String> {

	@Query(value="{'pname' : ?0}", delete = true)
	Optional<Patient> deleteByName(String pname);
	
	@Query("{'pname' :?0}")
	List<Patient> findAllByName(String pname);
	
	@Query("{'pname' :?0}")
	Optional<Patient> findAllByNameMeds(String pname);
}
