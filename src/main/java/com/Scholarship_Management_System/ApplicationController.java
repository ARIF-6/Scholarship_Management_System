//package com.Scholarship_Management_System;
//
//
//
//import com.Scholarship_Management_System.Application;
//import com.Scholarship_Management_System.ApplicationStatus;
//import jakarta.servlet.http.HttpServletRequest;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/applications")
////@CrossOrigin(origins = "http://localhost:5176")
//@RequiredArgsConstructor
//public class ApplicationController {
//
//    private final ApplicationRepository applicationRepository;
//    private final UserRepository userRepository;
//    private final JwtUtil jwtUtil;
//
//    @PostMapping
//    public ResponseEntity<?> submitApplication(@RequestBody Application application, HttpServletRequest request) {
//        // Get token from header
//        String token = request.getHeader("Authorization").replace("Bearer ", "");
//        String userId = jwtUtil.validateTokenAndGetUserId(token);
//
//        // Find the user
//        Users user = userRepository.findById(Long.parseLong(userId)).orElse(null);
//        if (user == null) {
//            return ResponseEntity.badRequest().body("User not found");
//        }
//
//        // Attach user and save
//        application.setUser(user);
//        application.setStatus(ApplicationStatus.PENDING);
//        applicationRepository.save(application);
//
//        return ResponseEntity.ok("Application submitted successfully");
//    }
//
//    @GetMapping
//    public ResponseEntity<List<Application>> getUserApplications(HttpServletRequest request) {
//        String token = request.getHeader("Authorization").replace("Bearer ", "");
//        String userId = jwtUtil.validateTokenAndGetUserId(token);
//
//        Users user = userRepository.findById(Long.parseLong(userId)).orElse(null);
//        if (user == null) {
//            return ResponseEntity.badRequest().build();
//        }
//
//        List<Application> apps = applicationRepository.findByUser(user);
//        return ResponseEntity.ok(apps);
//    }
//}
//



package com.Scholarship_Management_System;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "http://localhost:5173") // Adjust if needed
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @Autowired
    private ProgramRepository programRepository;

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/apply/{programId}")
    public ResponseEntity<?> applyToProgram(
            @PathVariable Long programId,
            @RequestBody Application application,
            HttpServletRequest request) {

        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid Authorization header");
        }

        String token = authHeader.replace("Bearer ", "");
        String userId = jwtUtil.validateTokenAndGetUserId(token);
        Users user = userRepository.findById(Long.parseLong(userId)).orElseThrow();

        Program program = programRepository.findById(programId).orElseThrow();

        application.setUser(user);
        application.setProgram(program);
        application.setStatus(ApplicationStatus.PENDING);

        Application saved = applicationService.submitApplication(application);
        return ResponseEntity.ok(saved);
    }



    // ✅ Admin: Get all applications
    @GetMapping("/admin")
    public ResponseEntity<List<Application>> getAllApplications() {
        return ResponseEntity.ok(applicationService.getAllApplications());
    }

//    // ✅ User: View their own applications
//    @GetMapping("/my")
//    public ResponseEntity<List<Application>> getUserApplications(HttpServletRequest request) {
//        String token = request.getHeader("Authorization").replace("Bearer ", "");
//        String userId = jwtUtil.validateTokenAndGetUserId(token);
//        List<Application> apps = applicationService.getApplicationsByUserId(Long.parseLong(userId));
//        return ResponseEntity.ok(apps);
//    }


    @GetMapping("/my")
    public ResponseEntity<?> getUserApplications(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or invalid Authorization header");
        }

        String token = authHeader.replace("Bearer ", "");
        String userId = jwtUtil.validateTokenAndGetUserId(token);

        List<Application> apps = applicationService.getApplicationsByUserId(Long.parseLong(userId));
        return ResponseEntity.ok(apps);
    }


    // ✅ Delete (optional)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApplication(@PathVariable Long id) {
        applicationService.deleteApplication(id);
        return ResponseEntity.noContent().build();
    }



}
