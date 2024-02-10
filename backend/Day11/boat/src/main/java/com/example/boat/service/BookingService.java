package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Booking;
import com.example.boat.repository.BookingRepo;

@Service
public class BookingService {
    @Autowired
    BookingRepo repository;

    public void addBookings(Booking booking){
        repository.save(booking);
    }

    public List<Booking> getAllBookings(){
        return repository.findAll();
    }

    public Booking getBookingById(int id){
        return repository.findById(id).get();
    }

    
    public Booking updateBooking(int id, Booking bookingDetails) {
        Booking booking = repository.findById(id).get();
                                    
        // Update booking details
        // For example:
        // booking.setField(bookingDetails.getField());
        // Set other fields as needed
        return repository.save(booking);
    }

    public void deleteBooking(int id) {
        Booking booking = repository.findById(id).get();
                                    
        repository.delete(booking);
    }
}
