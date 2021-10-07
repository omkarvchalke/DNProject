package comDNAssessment.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="patient_details")
public class Patient {

	@Id
	private String id;
	
	private String pname;
	private int page;
	private String pgender;
	private String pcontact;
	private String illness;
	private String prevDiagno;
	private String currDiagno;
	private String prevMeds;
	private String currMeds;
	private String dose;
	private int fees;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public String getGender() {
		return pgender;
	}
	public void setGender(String pgender) {
		this.pgender = pgender;
	}
	public String getPcontact() {
		return pcontact;
	}
	public void setPcontact(String pcontact) {
		this.pcontact = pcontact;
	}
	public String getIllness() {
		return illness;
	}
	public void setIllness(String illness) {
		this.illness = illness;
	}
	public String getPrevDiagno() {
		return prevDiagno;
	}
	public void setPrevDiagno(String prevDiagno) {
		this.prevDiagno = prevDiagno;
	}
	public String getCurrDiagno() {
		return currDiagno;
	}
	public void setCurrDiagno(String currDiagno) {
		this.currDiagno = currDiagno;
	}
	public int getFees() {
		return fees;
	}
	public void setFees(int fees) {
		this.fees = fees;
	}
	public String getPrevMeds() {
		return prevMeds;
	}
	public void setPrevMeds(String prevMeds) {
		this.prevMeds = prevMeds;
	}
	public String getCurrMeds() {
		return currMeds;
	}
	public void setCurrMeds(String currMeds) {
		this.currMeds = currMeds;
	}
	public String getDose() {
		return dose;
	}
	public void setDose(String dose) {
		this.dose = dose;
	}
	@Override
	public String toString() {
		return "Patient [pname=" + pname + ", page=" + page + ", pgender=" + pgender + ", pcontact=" + pcontact
				+ ", illness=" + illness + ", prevDiagno=" + prevDiagno + ", currDiagno=" + currDiagno + ", fees="
				+ fees + ", prevMeds=" + prevMeds + ", currMeds=" + currMeds + ", dose=" + dose + "]";
	}
	public Patient(String pname, int page, String pgender, String pcontact, String illness, String prevDiagno,
			String currDiagno, String prevMeds, String currMeds, String dose, int fees) {
		super();
		this.pname = pname;
		this.page = page;
		this.pgender = pgender;
		this.pcontact = pcontact;
		this.illness = illness;
		this.prevDiagno = prevDiagno;
		this.currDiagno = currDiagno;
		this.fees = fees;
		this.prevMeds = prevMeds;
		this.currMeds = currMeds;
		this.dose = dose;
	}
	
	
	
	
	
}
