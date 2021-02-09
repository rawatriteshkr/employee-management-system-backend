package com.ntt.data.initializer;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ntt.data.model.Employee;
import com.ntt.data.service.EmployeeService;

@Component
public class Initializer implements CommandLineRunner {

	@Autowired
	private EmployeeService employeeService;

	@Override
	public void run(String... args) throws Exception {
		List<Employee> list = new ArrayList<Employee>();
		Employee emp = new Employee();
		emp.setFirstName("Ritesh");
		emp.setLastName("Rawat");
		emp.setEmailId("rkrawat@gmail.com");
		Employee emp2 = new Employee();
		emp2.setFirstName("Sarvesh");
		emp2.setLastName("Rawat");
		emp2.setEmailId("sarvesh@yahoo.com");
		list.add(emp);
		list.add(emp2);
		for(Employee e : list) {
			employeeService.createEmployee(e);
		}
		

		employeeService.findAll().forEach((n) -> System.out.println(n.getId() + "," + n.getFirstName() + "," + n.getLastName() + "," + n.getEmailId()));
	}

}
