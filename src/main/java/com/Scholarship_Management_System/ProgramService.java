package com.Scholarship_Management_System;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProgramService {

    @Autowired
    private ProgramRepository programRepository;

    public List<Program> getAllPrograms() {
        return programRepository.findAll();
    }



//   create new program
    public Program createProgram(Program program) {
        program.setId(null);
        return programRepository.save(program);
    }

    //   delete  program
    public void deleteProgram(Long id) {
        programRepository.deleteById(id);
    }

//    get a specific Program By Id
    public Optional<Program> getProgramById(Long id) {
        return programRepository.findById(id);
    }

    //    update existing Program
    public Program updateProgram(Long id, Program updatedProgram) {
        return programRepository.findById(id).map(existing -> {
            existing.setTitle(updatedProgram.getTitle());
            existing.setDescription(updatedProgram.getDescription());
            existing.setStartDate(updatedProgram.getStartDate());
            existing.setEndDate(updatedProgram.getEndDate());
//            existing.setScholarship(updatedProgram.getScholarship()); // Optional
            return programRepository.save(existing);
        }).orElseThrow(() -> new RuntimeException("Program not found with id: " + id));
    }

//    search program
    public List<Program> searchPrograms(String query) {
        return programRepository.searchPrograms(query);
    }
}
