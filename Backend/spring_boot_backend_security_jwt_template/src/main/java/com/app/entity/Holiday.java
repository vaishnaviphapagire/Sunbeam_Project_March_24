package com.app.entity;

import java.time.LocalDate;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Holiday extends BaseEntity{
	
	private String holidayTitle;

	private LocalDate holidayFrom;
	private LocalDate holidayTo;

}

