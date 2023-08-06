package org.jsp.springboot.repository;


import java.util.Optional;

import org.jsp.springboot.dto.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	@Query("select c from Customer c where c.email=?1 and c.password=?2")
	public Optional<Customer> verifyCustomer(String email, String password);
}

