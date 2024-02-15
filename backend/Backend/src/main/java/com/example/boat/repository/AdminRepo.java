package com.example.boat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boat.entity.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin,Integer> {

}
