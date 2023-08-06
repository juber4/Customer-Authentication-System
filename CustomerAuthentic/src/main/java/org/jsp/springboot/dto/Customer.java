package org.jsp.springboot.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String first_name;
	private String last_name;
//	private String street;
	private String address;
	private String city;
	private String state;
	private String email;
	private String password;
	private long phone;
}
