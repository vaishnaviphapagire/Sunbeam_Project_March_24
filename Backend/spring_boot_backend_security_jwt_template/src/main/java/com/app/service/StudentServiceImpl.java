package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.StudentDao;
import com.app.dto.ApiResponse;
import com.app.dto.StudentDto;
import com.app.entity.Batch;
import com.app.entity.Student;


@Service
@Transactional
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	StudentDao studDao;
	
	@Autowired
	ModelMapper mapper;

	@Override
	public ApiResponse addStudent(StudentDto stud) {
		
		
				Student s = mapper.map(stud, Student.class);
				
				Batch b = mapper.map(stud.getBatch(), Batch.class);
				s.setBatch(b);
				b.addStudent(s);
				
				s.setBatch(b);
		
		studDao.save(s);
		
		return new ApiResponse("Student added successfully ....");
		
	}

}
