package com.example.boat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Admin;
import com.example.boat.repository.AdminRepo;

@Service
public class AdminService {
    @Autowired
    AdminRepo repository;
    public Admin addAdmin(Admin admin){
        return repository.save(admin);
    }
    public List<Admin> getAdmins(){
        return repository.findAll();
    }

    public Admin getAdminById(int id){
        return repository.findById(id).get();
    }
    
    public Admin createAdmin(Admin admin) {
        return repository.save(admin);
    }

    public Admin updateAdmin(int id, Admin adminDetails) {
        Optional<Admin> optionalAdmin = repository.findById(id);
        if (optionalAdmin.isPresent()) {
            Admin existingAdmin = optionalAdmin.get();
            existingAdmin.setName(adminDetails.getName());
            return repository.save(existingAdmin);
        } else {
            return null; 
        }
    }

    public void deleteAdmin(int id) {
        repository.deleteById(id);
    }

}
