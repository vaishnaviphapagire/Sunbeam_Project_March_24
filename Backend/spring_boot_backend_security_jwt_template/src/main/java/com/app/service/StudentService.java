package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.StudentDto;
import com.app.entity.Student;

public interface StudentService {

	public ApiResponse addStudent(StudentDto stud);
}
