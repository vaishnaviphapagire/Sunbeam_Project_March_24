package com.app.entity;

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
public class Announcement extends BaseEntity {

	private String annDesc;

}
