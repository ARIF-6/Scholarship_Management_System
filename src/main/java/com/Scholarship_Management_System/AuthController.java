package com.Scholarship_Management_System;


import com.Scholarship_Management_System.JwtUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

//@CrossOrigin(origins = "http://localhost:5176")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;



    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody AuthRequest request) {
        if (userRepo.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        Users user = new Users();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepo.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody AuthRequest request) {
    Users user = userRepo.findByEmail(request.getEmail()).orElse(null);
    if (user == null) {
        System.out.println("User not found: " + request.getEmail());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid email or password"));
    }

    boolean passwordMatch = passwordEncoder.matches(request.getPassword(), user.getPassword());
    System.out.println("Password matches: " + passwordMatch);

    if (!passwordMatch) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid email or password"));
    }

    String token = jwtUtil.generateToken(user.getId().toString());
    String role = user.getRole().name(); // Assuming you have a getRole() method in your Users class

    return ResponseEntity.ok(Map.of("token", token, "role", role)); // Include role in response

    }
}
