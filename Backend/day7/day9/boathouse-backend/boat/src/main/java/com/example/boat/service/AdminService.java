package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Admin;
import com.example.boat.repository.AdminRepo;

@Service
public class AdminService {
    @Autowired
    AdminRepo repository;

    public List<Admin> getAdmins(){
        return repository.findAll();
    }

    public Admin getAdminById(int id){
        return repository.findById(id).get();
    }
}
