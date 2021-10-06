package com.DNProject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctors")
public class Doctor {
	
	@Id
	private String id;
	
	
	private String dname;
	private String dtype;
	private String dcontact;
	private String daddress;
	
	public Doctor(String dname, String dtype, String dcontact, String daddress) {
		super();
		this.dname = dname;
		this.dtype = dtype;
		this.dcontact = dcontact;
		this.daddress = daddress;
	}
	
	
	public Doctor() {
		
	}


	public String getDname() {
		return dname;
	}
	public void setDname(String dname) {
		this.dname = dname;
	}
	public String getDtype() {
		return dtype;
	}
	public void setDtype(String dtype) {
		this.dtype = dtype;
	}
	public String getDcontact() {
		return dcontact;
	}
	public void setDcontact(String dcontact) {
		this.dcontact = dcontact;
	}
	public String getDaddress() {
		return daddress;
	}
	public void setDaddress(String daddress) {
		this.daddress = daddress;
	}
	@Override
	public String toString() {
		return "Doctor [dname=" + dname + ", dtype=" + dtype + ", dcontact=" + dcontact + ", daddress=" + daddress
				+ "]";
	}
	
	

}
