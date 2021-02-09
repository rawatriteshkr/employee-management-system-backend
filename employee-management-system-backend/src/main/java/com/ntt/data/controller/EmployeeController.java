package com.ntt.data.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntt.data.model.Employee;
import com.ntt.data.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/v1")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	//get all employees
	@GetMapping("/employees")
	public List<Employee> findAllEmployees() {
		return employeeService.findAll();
	}
	
	//create employee rest api
	@PostMapping("/add-employee")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeService.createEmployee(employee);
	}
	
	//get employee by id rest api
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> findEmployeeById(@PathVariable Long id) {
		return ResponseEntity.ok(employeeService.findEmployeeById(id));
	}
	
	//update employee rest api
	@PutMapping("/update-employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
		return ResponseEntity.ok(employeeService.updateEmployee(id, employee));
	}
	
	//delete employee rest api
	@DeleteMapping("/delete-employee/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmpoyee(@PathVariable Long id){
		return ResponseEntity.ok(employeeService.deleteEmployee(id));
		
	}
}
