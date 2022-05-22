package com.back.restservice.rest.Repo;

import com.back.restservice.rest.Models.Box;

import org.springframework.data.jpa.repository.*;

public interface BoxRepo extends JpaRepository<Box, Long> {
    public static void main(String[] args) {
        System.out.println("This repo works.");
    }
}
