package com.example.boat.controller;

// import static com.example.boat.utils.MyConstant.AUTH;
// import static com.example.boat.utils.MyConstant.LOGIN;
// import static com.example.boat.utils.MyConstant.REGISTER;
// import static org.springframework.http.HttpStatus.ACCEPTED;
// import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.example.boat.dto.request.LoginRequest;
import com.example.boat.dto.request.RegisterRequest;
import com.example.boat.dto.response.LoginResponse;
import com.example.boat.dto.response.RegisterResponse;
import com.example.boat.service.AuthenticationService;

@CrossOrigin(origins = {"http://localhost:8080"})
@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    private final AuthenticationService authService; // Declare final field

    @Autowired  // Add Autowired annotation to automatically inject the dependency
    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;  // Initialize the final field in the constructor
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authService.register(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Registration failed due to an unexpected error.");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
            response = authService.login(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Login failed!");
            response.setToken("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
}


