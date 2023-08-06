package org.jsp.springboot.exception;


public class IdNotFoundException extends RuntimeException {
	@Override
	public String getMessage() {
		return "Invalid Id";
	}
}

