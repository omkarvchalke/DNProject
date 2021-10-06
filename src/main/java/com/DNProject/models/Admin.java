package com.DNProject.models;



public class Admin {
	
	private String uname;
	private String upass;
	
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getUpass() {
		return upass;
	}
	public void setUpass(String upass) {
		this.upass = upass;
	}
	
	@Override
	public String toString() {
		return "Admin [uname=" + uname + ", upass=" + upass + "]";
	}
	
}
