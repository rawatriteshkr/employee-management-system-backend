import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			// step 2 get id from the route
			id: this.props.match.params.id,
			firstName: '',
			lastName: '',
			emailId: ''
		}

		this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
		this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
		this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
		this.saveEmployee = this.saveEmployee.bind(this);
		this.cancel = this.cancel.bind(this);
	}

	// step 3
	componentDidMount() {
		//step 4
		if (this.state.id === '_add') {
			return
		} else {
			EmployeeService.getEmployeeById(this.state.id).then((response) => {
				let employee = response.data;
				this.setState({
					firstName: employee.firstName,
					lastName: employee.lastName,
					emailId: employee.emailId
				})
			})
		}
	}

	saveEmployee = (e) => {
		e.preventDefault();
		let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
		console.log('employee => ' + JSON.stringify(employee));

		// step 5
		if (this.state.id === '_add') {
			EmployeeService.createEmployee(employee).then(response => {
				this.props.history.push('/employees');
			})
		} else {
			EmployeeService.updateEmployee(this.state.id, employee).then(response => {
				this.props.history.push('/employees');
			})
		}
	}

	getTitle(){
		if(this.state.id === '_add'){
			return <h3 className="text-center">Add Employee</h3>
		}else{
			return <h3 className="text-center">Edit Employee</h3>
		}
	}
	changeFirstNameHandler = (event) => {
		this.setState({ firstName: event.target.value });
	}
	changeLastNameHandler = (event) => {
		this.setState({ lastName: event.target.value });
	}
	changeEmailIdHandler = (event) => {
		this.setState({ emailId: event.target.value });
	}

	cancel() {
		this.props.history.push('/employees');
	}

	render() {
		return (
			<div><br/>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							{this.getTitle()}
							<div className="card-body">
								<form>
									<div className="form-group">
										<label>First Name: </label>
										<input placeholder="First Name" name="firstName" className="form-control"
											value={this.state.firstName} onChange={this.changeFirstNameHandler} />
									</div>
									<div className="form-group">
										<label>Last Name: </label>
										<input placeholder="Last Name" name="lastName" className="form-control"
											value={this.state.lastName} onChange={this.changeLastNameHandler} />
									</div>
									<div className="form-group">
										<label>Email Id: </label>
										<input placeholder="Email Id" name="emailId" className="form-control"
											value={this.state.emailId} onChange={this.changeEmailIdHandler} />
									</div>
									<button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
									<button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CreateEmployeeComponent;