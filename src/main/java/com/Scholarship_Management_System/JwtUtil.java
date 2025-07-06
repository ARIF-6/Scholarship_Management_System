package com.Scholarship_Management_System;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    private final SecretKey jwtSecret; // Change to SecretKey

    @Value("${app.jwt.expiration}")
    private long jwtExpiration;

    public JwtUtil() {
        // Generate a secure key for HS256
        this.jwtSecret = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    public String generateToken(String userId) {
        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(jwtSecret) // Use the SecretKey directly
                .compact();
    }

    public String validateTokenAndGetUserId(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(jwtSecret)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }
}