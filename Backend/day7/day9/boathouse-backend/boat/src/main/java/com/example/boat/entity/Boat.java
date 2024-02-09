package com.example.boat.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "boat")
public class Boat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int boatid;
    String boatname;
    int price;
    String childcount;
    String adultcount;
    String description;
}
