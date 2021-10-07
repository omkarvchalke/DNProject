package comDNAssessment.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="appointment")
public class Appointment {
	@Id
	private String id;
	
	private String paname;
	private String pacontact;
	private String apdate;
	private String aptime;
	public String getPaname() {
		return paname;
	}
	public void setPaname(String paname) {
		this.paname = paname;
	}
	public String getPacontact() {
		return pacontact;
	}
	public void setPacontact(String pacontact) {
		this.pacontact = pacontact;
	}
	public String getApdate() {
		return apdate;
	}
	public void setApdate(String apdate) {
		this.apdate = apdate;
	}
	public String getAptime() {
		return aptime;
	}
	public void setAptime(String aptime) {
		this.aptime = aptime;
	}
	public Appointment(String paname, String pacontact, String apdate, String aptime) {
		super();
		this.paname = paname;
		this.pacontact = pacontact;
		this.apdate = apdate;
		this.aptime = aptime;
	}
	@Override
	public String toString() {
		return "appoint_details [paname=" + paname + ", pacontact=" + pacontact + ", apdate=" + apdate + ", aptime="
				+ aptime + "]";
	}


	
	
}
