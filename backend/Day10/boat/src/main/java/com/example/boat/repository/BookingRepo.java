package com.example.boat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boat.entity.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Integer> {
                             
}
