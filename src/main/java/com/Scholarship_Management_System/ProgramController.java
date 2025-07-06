package com.Scholarship_Management_System;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/programs")
//@CrossOrigin(origins = "http://localhost:5173") // Update if needed
public class ProgramController {

    @Autowired
    private ProgramService programService;

    // Get all programs
    @GetMapping
    public List<Program> getAllPrograms() {
        return programService.getAllPrograms();
    }

    // Get a single program by ID
    @GetMapping("/{id}")
    public ResponseEntity<Program> getProgramById(@PathVariable Long id) {
        return programService.getProgramById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Create new program
    @PostMapping
    public ResponseEntity<Program> createProgram(@RequestBody Program program) {
        Program created = programService.createProgram(program);
        return ResponseEntity.ok(created);
    }

    // Update an existing program
    @PutMapping("/{id}")
    public ResponseEntity<Program> updateProgram(@PathVariable Long id, @RequestBody Program updatedProgram) {
        try {
            Program updated = programService.updateProgram(id, updatedProgram);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete program
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProgram(@PathVariable Long id) {
        programService.deleteProgram(id);
        return ResponseEntity.noContent().build();
    }

    // search program
    @GetMapping("/search")
    public ResponseEntity<List<Program>> searchPrograms(@RequestParam("query") String query) {
        List<Program> results = programService.searchPrograms(query);
        return ResponseEntity.ok(results);
    }



}
