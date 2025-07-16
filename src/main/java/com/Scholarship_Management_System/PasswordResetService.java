package com.Scholarship_Management_System;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class PasswordResetService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

    private final Map<String, String> tokenStore = new HashMap<>();

    public void sendResetLink(String email) {
        Optional<Users> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        String token = UUID.randomUUID().toString();
        tokenStore.put(token, email); // store email with token
        emailService.sendResetEmail(email, token);
    }

    public void resetPassword(String token, String newPassword) {
        String email = tokenStore.get(token);
        if (email == null) {
            throw new RuntimeException("Invalid token");
        }

        Users user = userRepository.findByEmail(email).orElseThrow();
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        tokenStore.remove(token); // invalidate token
    }
}
