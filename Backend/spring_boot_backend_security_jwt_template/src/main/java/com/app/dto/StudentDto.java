package com.app.dto;

import javax.validation.constraints.NotNull;

import com.app.entity.Batch;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class StudentDto {
	
	@NotNull
	private UserDto user;

	@JsonProperty(access = Access.READ_ONLY)
	private Long rollNo;

	@NotNull
	private BatchDto batch;
	
	
	private String guardianName;
	
	private String guardianPhone;
	
	public StudentDto(@NotNull UserDto user, Long rollNo, @NotNull BatchDto batch) {
		super();
		this.user = user;
		this.rollNo = rollNo;
		this.batch = batch;
	}
	
	

}
