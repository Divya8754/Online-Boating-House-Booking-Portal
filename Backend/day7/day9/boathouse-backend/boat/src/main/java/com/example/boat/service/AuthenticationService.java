package com.example.boat.service;

import com.example.boat.dto.request.LoginRequest;
import com.example.boat.dto.request.RegisterRequest;
import com.example.boat.dto.response.LoginResponse;
import com.example.boat.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}

