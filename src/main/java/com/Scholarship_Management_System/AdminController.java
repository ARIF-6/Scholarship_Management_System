package com.Scholarship_Management_System;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AdminService adminService;

    @Autowired
    private AdminRepository adminRepository;


    /**
     * ✅ Admin-only: Get list of all users
     */
    @GetMapping("/all-users")
    public ResponseEntity<?> getAllUsers(HttpServletRequest request) {
        try {
            String token = request.getHeader("Authorization").replace("Bearer ", "");
            String userId = jwtUtil.validateTokenAndGetUserId(token);

            Users user = userRepository.findById(Long.parseLong(userId)).orElse(null);
            if (user == null || user.getRole() != Role.ADMIN) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied");
            }

            return ResponseEntity.ok(userRepository.findAll());

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token");
        }
    }

    /**
     * 🔐 Admin Registration (optional)
     */
    @PostMapping("/register")
    public ResponseEntity<?> registerAdmin(@RequestBody Admin admin) {
        Admin savedAdmin = adminService.createAdmin(admin);
        return ResponseEntity.ok(savedAdmin);
    }

    /**
     * 🔐 Admin Login
     */

    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody LoginRequest request) {
        // 1️⃣ Authenticate credentials
        boolean isAuthenticated = adminService.authenticate(request.getUsername(), request.getPassword());
        if (!isAuthenticated) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid credentials"));
        }

        // 2 Lookup the admin so we can get their ID
        Admin admin = adminRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("Admin not found after authentication"));

        // 3 Generate a JWT using your JwtUtil
        String token = jwtUtil.generateToken(admin.getId().toString());

        // 4 Return the role and the token
        return ResponseEntity.ok(
                Map.of(
                        "role", Role.ADMIN.name(),
                        "token", token
                )
        );
    }


    /**
     * DTO for login request
     */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    static class LoginRequest {
        private String username;
        private String password;
    }
}



























