import React from 'react';

export default class AddEmployee extends React.Component{
    state= {
        empName: "",
        empId: "",
        empSalary: 0,
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.employeeData(this.state);
        this.setState(() => ({
          empName: "",
          empId: "",
          empSalary: 0            
        }));
    }

    render() {
        return (
          <div>
            <h1>Add Employee</h1>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                name="empName"
                id="empName"
                value={this.state.empName}
                placeholder="Enter Name"
                onChange={this.onChange}
              /> <br />
              <input
                type="text"
                name="empId"
                id="empId"
                value={this.state.empId}
                placeholder="Enter Id"
                onChange={this.onChange}
              /> <br />
              <input
                type="number"
                name="empSalary"
                id="empSalary"
                value={this.state.empSalary}
                placeholder="Enter Salary"
                onChange={this.onChange}
              /><br />
              <button type="Submit">Submit</button>
            </form>
          </div>
        );
    }
}