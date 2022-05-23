package com.back.restservice.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.back.restservice.rest.DBManager;

@SpringBootApplication
public class RestApplication {

	public static void main(String[] args) {
		DBManager dbmanager = new DBManager();
		dbmanager.connectDB();
		SpringApplication.run(RestApplication.class, args);
	}

}
