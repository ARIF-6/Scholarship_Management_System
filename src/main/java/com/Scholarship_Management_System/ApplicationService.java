package com.Scholarship_Management_System;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    // ✅ Submit new application
    public Application submitApplication(Application application) {
        return applicationRepository.save(application);
    }

    // ✅ Get all applications (Admin)
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    // ✅ Get applications for a specific user
    public List<Application> getApplicationsByUserId(Long userId) {
        return applicationRepository.findByUserId(userId);
    }

    // ✅ Delete application
    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }

    // ✅ Get a single application by ID (for updating status)
    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found with ID: " + id));
    }

    // ✅ Save updated application (after editing status)
    public Application saveApplication(Application application) {
        return applicationRepository.save(application);
    }
}
