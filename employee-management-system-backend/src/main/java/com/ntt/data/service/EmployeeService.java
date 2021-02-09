package com.ntt.data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntt.data.exception.ResourceNotFoundException;
import com.ntt.data.model.Employee;
import com.ntt.data.repo.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public List<Employee> findAll() {
		return employeeRepository.findAll();
	}

	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	
	public Employee findEmployeeById(Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id : " + id));
		return employee;
	}
	
	public Employee updateEmployee(Long id, Employee employee) {
		Employee reterivedEmployee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id : " + id));
		reterivedEmployee.setFirstName(employee.getFirstName());
		reterivedEmployee.setLastName(employee.getLastName());
		reterivedEmployee.setEmailId(employee.getEmailId());
		Employee updatedEmployee = employeeRepository.save(reterivedEmployee);
		return  updatedEmployee;
	}
	
	public Map<String, Boolean> deleteEmployee(Long id) {
		Employee reterivedEmployee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id : " + id));
		employeeRepository.delete(reterivedEmployee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
