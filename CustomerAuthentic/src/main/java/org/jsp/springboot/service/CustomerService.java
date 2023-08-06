package org.jsp.springboot.service;

import java.util.List;
import java.util.Optional;

import org.jsp.springboot.dao.CustomerDao;
import org.jsp.springboot.dto.Customer;
import org.jsp.springboot.dto.ResponseStructure;
import org.jsp.springboot.exception.IdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
	@Autowired
	private CustomerDao dao;

	public ResponseEntity<ResponseStructure<Customer>> saveCustomer(Customer customer) {
		ResponseStructure<Customer> structure = new ResponseStructure<>();
		structure.setMessage("Customer saved successfully");
		structure.setBody(dao.saveCustomer(customer));
		structure.setCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Customer>>(structure, HttpStatus.CREATED);
	}

	public ResponseEntity<ResponseStructure<Customer>> updateCustomer(Customer customer) {
		ResponseStructure<Customer> structure = new ResponseStructure<>();
		structure.setMessage("Customer updated successfully");
		structure.setBody(dao.updateUser(customer));
		structure.setCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<Customer>>(structure, HttpStatus.ACCEPTED);
	}

	public ResponseEntity<ResponseStructure<Customer>> findUser(int id) {
		ResponseStructure<Customer> structure = new ResponseStructure<>();
		Optional<Customer> recCustomer = dao.findCustomer(id);
		if (recCustomer.isPresent()) {
			structure.setBody(recCustomer.get());
			structure.setMessage("Customer Found");
			structure.setCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Customer>>(structure, HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}

	public ResponseEntity<ResponseStructure<List<Customer>>> findAll() {
		ResponseStructure<List<Customer>> structure = new ResponseStructure<>();
		structure.setBody(dao.findAll());
		structure.setMessage("All customer are displayed ");
		structure.setCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Customer>>>(structure, HttpStatus.OK);
	}

	public ResponseEntity<ResponseStructure<String>> deleteCustomer(int id) {
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<Customer> recCustomer = dao.findCustomer(id);
		if (recCustomer.isPresent()) {
			dao.deleteCustomer(id);
			structure.setBody("Customer deleted ");
			structure.setMessage("Customer Found");
			structure.setCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
		structure.setBody("Customer Not deleted ");
		structure.setMessage("Customer Not Found");
		structure.setCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.NOT_FOUND);
	}

	public ResponseEntity<ResponseStructure<Customer>> verifyCustomer(String email, String password) {
		ResponseStructure<Customer> structure = new ResponseStructure<>();
		Optional<Customer> recCustomer = dao.verifyCustomer(email, password);
		if (recCustomer.isPresent()) {
			structure.setBody(recCustomer.get());
			structure.setMessage("Customer verified successfully");
			structure.setCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Customer>>(structure, HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}
}
