package com.DNProject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "appointments")
public class Appointment {
	@Id
	private String id;
	
	private String paname;
	//private String paillness;
	private String pacontact;
	private String padate;
	private String patime;
	
	public Appointment(String paname, String pacontact, String padate, String patime) {
		super();
		this.paname = paname;
		this.pacontact = pacontact;
		this.padate = padate;
		this.patime = patime;
	}

	public String getPaname() {
		return paname;
	}
	public void setPaname(String paname) {
		this.paname = paname;
	}
	/*public String getPaillness() {
		return paillness;
	}
	public void setPaillness(String paillness) {
		this.paillness = paillness;
	}*/
	
	public String getPacontact() {
		return pacontact;
	}
	public void setPacontact(String pacontact) {
		this.pacontact = pacontact;
	}
	public String getPadate() {
		return padate;
	}
	public void setPadate(String padate) {
		this.padate = padate;
	}
	public String getPatime() {
		return patime;
	}
	public void setPatime(String patime) {
		this.patime = patime;
	}
	@Override
	public String toString() {
		return "Appointment [paname=" + paname + ", pacontact=" + pacontact + ", padate="
				+ padate + ", patime=" + patime + "]";
	}
	
	
}
