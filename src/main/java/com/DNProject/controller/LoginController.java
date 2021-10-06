package com.DNProject.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.DNProject.models.Doctor;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping(value="/admin", method= RequestMethod.GET)
public class LoginController {

    @RequestMapping(value="/authAdmin")
    public Doctor auth(@RequestBody Doctor doctor) {
        System.out.println(doctor.getDname());
        return doctor;
    }
}
