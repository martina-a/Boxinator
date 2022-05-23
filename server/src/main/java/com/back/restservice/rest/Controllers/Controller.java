package com.back.restservice.rest.Controllers;

import java.util.List;

import com.back.restservice.rest.Models.Box;
import com.back.restservice.rest.Repo.BoxRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8080/")
@RequestMapping("/")
public class Controller {
    @Autowired
    private BoxRepo boxrepo;

    @GetMapping(value = "/")
    public String hello() {
        return "Hello World Spring Boot";
    }

    @GetMapping(value = "boxes")
    public List<Box> getBoxes() {
        return boxrepo.findAll();
    }

    @PostMapping(value = "boxes")
    public String saveBox(@RequestBody Box box) {
        boxrepo.save(box);
        return "The box is now saved!";
    }
}