package org.jsp.springboot.controller;

import java.util.List;
import java.util.Map;

import org.jsp.springboot.dto.Customer;
import org.jsp.springboot.dto.ResponseStructure;
import org.jsp.springboot.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000/")
public class CustomerController {
	@Autowired
	private CustomerService service;

	@PostMapping("/customer")
	public ResponseEntity<ResponseStructure<Customer>> saveCustomer(@RequestBody Customer customer) {
		return service.saveCustomer(customer);
	}

	@PutMapping("/customer")
	public ResponseEntity<ResponseStructure<Customer>> updateCustomer(@RequestBody Customer customer) {
		return service.updateCustomer(customer);
	}

	@GetMapping("/customer/{id}")
	public ResponseEntity<ResponseStructure<Customer>> findCustomer(@PathVariable int id) {
		return service.findUser(id);
	}

	@GetMapping("/customer")
	public ResponseEntity<ResponseStructure<List<Customer>>> findAll() {
		return service.findAll();
	}

	@DeleteMapping("/customer/{id}")
	public ResponseEntity<ResponseStructure<String>> deleteCustomer(@PathVariable int id) {
		return service.deleteCustomer(id);
	}

	@PostMapping("/customer/verify-email")
	public ResponseEntity<ResponseStructure<Customer>> verifyCustomer(@RequestParam String email, @RequestParam String password)
	{
		return service.verifyCustomer(email, password);
	}
}
