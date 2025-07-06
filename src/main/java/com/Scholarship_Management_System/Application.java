package com.Scholarship_Management_System;
//import jakarta.persistence.*;
//import lombok.*;
//
//@Entity
//@Table(name = "application")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//public class Application {
//
//    @Id @GeneratedValue
//    private Long id;
//
//    private String name;
//    private String email;
//    private String program;
//
//    @Enumerated(EnumType.STRING)
//    private ApplicationStatus status = ApplicationStatus.PENDING;
//
//    @ManyToOne
//    private Users user;
//}

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Basic Applicant Info
    private String fullName;
    private String email;
    private LocalDate dateOfBirth;

    // Academic Info
    private String institution;
    private String gpa;

    // Personal Statement
//    @Lob
    private String personalStatement;

    // Relations
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "program_id")
    private Program program;

    private LocalDate submissionDate;

    @Enumerated(EnumType.STRING)
    private ApplicationStatus status;
}
