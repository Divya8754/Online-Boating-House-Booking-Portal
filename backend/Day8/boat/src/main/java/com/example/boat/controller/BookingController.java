package com.example.boat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.boat.entity.Booking;
import com.example.boat.service.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    BookingService service;

    @GetMapping("/")
    public List<Booking> getAllBooking() {
        return service.getAllBookings();
    }

    @GetMapping("/{id}")
    public Booking getBookingByid(@PathVariable int id) {
        return service.getBookingById(id);
    }
    
    @PostMapping("/")
    public void addBooking(@RequestBody Booking booking) {
        service.addBookings(booking);
    }
     @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable int id, @RequestBody Booking bookingDetails) {
        return service.updateBooking(id, bookingDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable int id) {
        service.deleteBooking(id);
    }
}
