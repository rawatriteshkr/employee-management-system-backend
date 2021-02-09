package com.ntt.data.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ntt.data.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
