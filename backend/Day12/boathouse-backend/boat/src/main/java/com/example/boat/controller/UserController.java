package com.example.boat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.entity.Users;
import com.example.boat.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService service;

    @PostMapping("/")
    public void  addUser(@RequestBody Users user) {
        service.addUsers(user);
    }

    @GetMapping("/")
    public List<Users> getUsers() {
        return service.getUsers();
    }
    
    @GetMapping("/{id}")
    public Users getUserByIds(@PathVariable String id){
        return service.getUserById(id);
    }

    
    @PutMapping("/{id}")
    public Users updateUser(@PathVariable String id, @RequestBody Users userDetails) {
        return service.updateUser(id, userDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        service.deleteUser(id);
    }
}
