package com.example.boat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.entity.Boat;
import com.example.boat.service.BoatService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/boat")
public class BoatController {
    @Autowired
    BoatService service;

    @GetMapping("/")
    public List<Boat> getAllBoats() {
        return service.getbBoats();
    }

    @GetMapping("/{id}")
    public Boat getBoatById(@PathVariable int id) {
        return service.getBoatByid(id);
    }
    
    @PostMapping("/add")
    public void addBoat(@RequestBody Boat boat) {
        service.addBoats(boat);
    }
    
    
    @PutMapping("/{id}")
    public Boat updateBoat(@PathVariable int id, @RequestBody Boat boat) {
        return service.updateBoat(id, boat);
    }

    @DeleteMapping("/{id}")
    public void deleteBoat(@PathVariable int id) {
        service.deleteBoat(id);
    }
}
