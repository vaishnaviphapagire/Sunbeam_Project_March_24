package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SequenceGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@PrimaryKeyJoinColumn(name = "id")
public class Student extends UserEntity {
	
	private static Long genrationRollNumber =  10191324L;
	
	
	
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "custom_seq")
	@SequenceGenerator(name = "custom_seq", allocationSize = 1, initialValue = 1001)
	private Long rollNo;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "batch_id" , nullable = false)
	private Batch batch;

	public Student(Long rollNo, Batch batch) {
		super();
		this.rollNo = rollNo;
		this.batch = batch;
	}
	
	{
		rollNo = ++genrationRollNumber;
	}

	
	
	

	
}
