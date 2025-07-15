package com.Scholarship_Management_System;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
//        userRepository.deleteById(id);
//        return ResponseEntity.noContent().build();
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        System.out.println("Attempting to delete user with ID: " + id);

        if (!userRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        try {
            userRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Delete failed: " + e.getMessage());
        }
    }





//    @PutMapping("/{id}")
//    public Users updateUser(@PathVariable Long id, @RequestBody Users updatedUser) {
//        Users user = userRepository.findById(id).orElseThrow();
//        user.setName(updatedUser.getName());
//        user.setEmail(updatedUser.getEmail());
//        return userRepository.save(user);
//    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody Users updatedUser) {
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        if (updatedUser.getName() == null || updatedUser.getEmail() == null) {
            return ResponseEntity.badRequest().body("Name and Email cannot be null");
        }
        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());

        try {
            Users savedUser = userRepository.save(user);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Update failed: " + e.getMessage());
        }
    }


}
