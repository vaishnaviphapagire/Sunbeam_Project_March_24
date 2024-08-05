package com.app.dto;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotNull;

import com.app.entity.Designation;
import com.app.entity.Subject;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TeacherDto {
	
	

	@NotNull
	private Designation designation;

	private Set<Subject> subjects = new HashSet<Subject>();
	
	
	private String education;


	public TeacherDto(@NotNull Designation designation, Set<Subject> subjects, String education) {
		super();
		this.designation = designation;
		this.subjects = subjects;
		this.education = education;
	}



	
	
	

}
