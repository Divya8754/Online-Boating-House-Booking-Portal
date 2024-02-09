package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Users;
import com.example.boat.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo repository;

    public List<Users> getUsers(){
        return repository.findAll();
    }

    public void addUsers(Users user){
        repository.save(user);
    }

    public Users getUserById(String id){
        return repository.findById(id).get();
    }
}
