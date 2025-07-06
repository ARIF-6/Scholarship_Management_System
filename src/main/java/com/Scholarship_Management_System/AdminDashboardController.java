package com.Scholarship_Management_System;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/admin")
public class AdminDashboardController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProgramRepository programRepository;


    @Autowired
    private ApplicationRepository applicationRepository;

    @GetMapping("/users/count")
    public long getUserCount() {
        return userRepository.count();
    }

    @GetMapping("/applications/count")
    public long getApplicationCount() {
        return applicationRepository.count();
    }

    @GetMapping("/programs/count")
    public long getProgramCount() {
        return programRepository.count();
    }

}
