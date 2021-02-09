import React, {Component} from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component{
	 
	constructor(props){
		super(props);
		this.state = {
			// step 2
			id: this.props.match.params.id,
			employee:{}
		}

		this.homePage = this.homePage.bind(this);
	}

	componentDidMount(){
		  EmployeeService.getEmployeeById(this.state.id).then(response => {
			//set response data to employee obj
			this.setState({employee : response.data});
		})  
	}

	homePage(){
		this.props.history.push('/employees');
	}
	render(){
		return(
			<div>
				<br></br>
				<div className="card col-md-6 offset-md-3">
					<h3 className="text-center">View Employee Details</h3>
					<div className="card-body">
						<div className="row">
							<div className="form-group">
								<br></br>
							<label>First Name: &nbsp;</label>
								{this.state.employee.firstName}<br></br>
							<label>Last Name: &nbsp;</label>
								{this.state.employee.lastName}<br></br>
							<label>Email Id: &nbsp;</label>
								{this.state.employee.emailId}
							<div className="form-group">
								<br></br>
								<button className="btn btn-success" style={{marginLeft: '220px'}}  onClick={this.homePage}>Home</button>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ViewEmployeeComponent;