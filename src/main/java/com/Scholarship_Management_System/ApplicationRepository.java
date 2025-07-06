package com.Scholarship_Management_System;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.List;
//
//public interface ApplicationRepository extends JpaRepository<Application, Long> {
//    List<Application> findByUser(Users user);
//}

//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.List;
//
//public interface ApplicationRepository extends JpaRepository<Application, Long> {
//
//    List<Application> findByUserId(Long userId);
//
//
//}


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

    // ✅ Find applications by user entity
    List<Application> findByUser(Users user);

    // ✅ Find applications by user ID directly (optional, useful for cleaner service)
    List<Application> findByUserId(Long userId);
}
