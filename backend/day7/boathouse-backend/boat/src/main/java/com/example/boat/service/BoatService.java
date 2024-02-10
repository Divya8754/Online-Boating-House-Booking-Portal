package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.boat.entity.Boat;
import com.example.boat.repository.BoatRepo;

@Service
public class BoatService {
    @Autowired
    BoatRepo repository;

    public void addBoats(Boat boat){
        repository.save(boat);
    }

    public List<Boat> getbBoats(){
        return repository.findAll();
    }
     public Boat getBoatById(int id){
        return repository.findById(id).get();
    }
    
    public Boat createBoat(Boat boat) {
        return repository.save(boat);
    }

    public Boat getBoatByid(int id){
        return repository.findById(id).get();
    }
    public Boat updateBoat(int id, Boat boatDetails) {
        Boat boat = repository.findById(id).get();
        boat.setBoatname(boatDetails.getBoatname());
        // boat.setType(boatDetails.getType());
       
        return repository.save(boat);
    }

    public void deleteBoat(int id) {
        Boat boat = repository.findById(id).get();
        repository.delete(boat);
    }
}
