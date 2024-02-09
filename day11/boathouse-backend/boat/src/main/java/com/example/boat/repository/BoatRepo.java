package com.example.boat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boat.entity.Boat;

@Repository
public interface BoatRepo extends JpaRepository<Boat,Integer> {

}
