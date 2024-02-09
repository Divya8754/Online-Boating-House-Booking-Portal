package com.example.boat.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.entity.Admin;
import com.example.boat.service.AdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    AdminService service;
    @GetMapping("/")
    public List<Admin> getAllAdmin() {
        return service.getAdmins();
    }
    @GetMapping("/{id}")
    public Admin getAdminByIds(@PathVariable int id){
        return service.getAdminById(id);
    }
}
