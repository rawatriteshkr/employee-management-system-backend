import axios from 'axios';

const ALL_EMPLOYEE_API_URL = "http://localhost:8080/api/v1/employees";
const ADD_EMPLOYEE_API_URL = "http://localhost:8080/api/v1/add-employee";
const GET_EMPLOYEE_BY_ID_API_URL = "http://localhost:8080/api/v1/employee";
const UPDATE_EMPLOYEE_API_URL = "http://localhost:8080/api/v1/update-employee"
const DELETE_EMPLOYEE_API_URL = "http://localhost:8080/api/v1/delete-employee";

class EmployeeService{

	getEmployees(){
		return axios.get(ALL_EMPLOYEE_API_URL);
	}

	createEmployee(employee){
		return axios.post(ADD_EMPLOYEE_API_URL, employee);
	}

	getEmployeeById(employeeId){
		return axios.get(GET_EMPLOYEE_BY_ID_API_URL + "/" + employeeId);	
	}

	updateEmployee(employeeId, employee){
		return axios.put(UPDATE_EMPLOYEE_API_URL + "/" + employeeId, employee);
	}

	deleteEmployee(employeeId){
		return axios.delete(DELETE_EMPLOYEE_API_URL + "/" + employeeId);
	}
}

export default new EmployeeService()