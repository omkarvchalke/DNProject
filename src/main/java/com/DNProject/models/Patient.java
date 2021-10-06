package com.DNProject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patients")
public class Patient {
	@Id
	private String id;
	
	private String pname;
	
	private String pgender;
	private int page;
	private String pcontact;
	private String prevDiagno;
	private String currDiagno;
	private String prevMeds;
	private String currMeds;
	private int pfee;
	private String dose;
	
	public Patient(String pname, String pgender, int page, String pcontact, String prevDiagno, String currDiagno,
			String prevMeds, String currMeds, int pfee, String dose) {
		super();
		this.pname = pname;
		this.pgender = pgender;
		this.page = page;
		this.pcontact = pcontact;
		this.prevDiagno = prevDiagno;
		this.currDiagno = currDiagno;
		this.prevMeds = prevMeds;
		this.currMeds = currMeds;
		this.pfee = pfee;
		this.dose = dose;
	}
	
	public Patient() {}
	
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPgender() {
		return pgender;
	}
	public void setPgender(String pgender) {
		this.pgender = pgender;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public String getPcontact() {
		return pcontact;
	}
	public void setPcontact(String pcontact) {
		this.pcontact = pcontact;
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
	public int getPfee() {
		return pfee;
	}
	public void setPfee(int pfee) {
		this.pfee = pfee;
	}
	public String getDose() {
		return dose;
	}
	public void setDose(String dose) {
		this.dose = dose;
	}
	@Override
	public String toString() {
		return "Patient [pname=" + pname + ", pgender=" + pgender + ", page=" + page + ", pcontact=" + pcontact
				+ ", prevDiagno=" + prevDiagno + ", currDiagno=" + currDiagno + ", prevMeds=" + prevMeds + ", currMeds="
				+ currMeds + ", pfee=" + pfee + ", dose=" + dose + "]";
	}
	
	
	
}
