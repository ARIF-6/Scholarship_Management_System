package com.Scholarship_Management_System;

import org.springframework.stereotype.Service;

@Service
public class EmailService {
    public void sendResetEmail(String to, String token) {
        System.out.println("Sending reset email to: " + to);
        System.out.println("Reset link: http://localhost:5173/reset-password?token=" + token);
    }
}
