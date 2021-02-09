import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			employees: []
		}
		this.addEmployee = this.addEmployee.bind(this);
		this.editEmployee = this.editEmployee.bind(this);
		this.deleteEmployee = this.deleteEmployee.bind(this);
		this.viewEmployee = this.viewEmployee.bind(this);
	}
	componentDidMount() {
		EmployeeService.getEmployees().then((response) => {
			this.setState({ employees: response.data });
		});
	}

	addEmployee() {
		this.props.history.push('/add-employee/_add');
	}

	editEmployee(id) {
		//this.props.history.push(`/update-employee/${id}`);
		this.props.history.push(`/add-employee/${id}`);
	}

	deleteEmployee(id) {
		// rest api call
		EmployeeService.deleteEmployee(id).then(response => {
			this.setState({ employees: this.state.employees.filter(employee => employee.id != id) })
		})
	}

	viewEmployee(id) {
		this.props.history.push(`/view-employee/${id}`);
	}
	render() {
		return (
			<div>
				<br/>
				<h2 className="text-center">Employees List</h2>
				<div className="row">
					<button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
				</div>
				<br/>
				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th> First Name</th>
								<th> Last Name</th>
								<th> Email Id</th>
								<th> Actions </th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.employees.map(
									employee =>
										<tr key={employee.id}>
											<td>{employee.firstName}</td>
											<td>{employee.lastName}</td>
											<td>{employee.emailId}</td>
											<td>
												<button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Edit</button>
												<button onClick={() => { this.deleteEmployee(employee.id) }} className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
												<button onClick={() => { this.viewEmployee(employee.id) }} className="btn btn-info" style={{ marginLeft: "10px" }}>View</button>
											</td>
										</tr>
								)
							}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default ListEmployeeComponent

