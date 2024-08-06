package com.app.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Question extends BaseEntity {

	
	@Lob
    private String question;
	
	
	@Lob
    private String opt1;
	
	@Lob
    private String opt2;
	
	@Lob
    private String opt3;
	
	@Lob
    private String opt4;
	
	
	@Lob
    private String correctAns;
	
	
	@ManyToOne(fetch = FetchType.LAZY )
	@JoinColumn(nullable = false)
	private Quiz quiz;

	private int marks;

	public Question(Long id, LocalDateTime createdTime, LocalDateTime updatedTime, boolean isDeleted, String question,
			String opt1, String opt2, String opt3, String opt4, String correctAns, Quiz quiz, int marks) {
		super(id, createdTime, updatedTime, isDeleted);
		this.question = question;
		this.opt1 = opt1;
		this.opt2 = opt2;
		this.opt3 = opt3;
		this.opt4 = opt4;
		this.correctAns = correctAns;
		this.quiz = quiz;
		this.marks = marks;
	}	
	
	
	
	
	
	
}
