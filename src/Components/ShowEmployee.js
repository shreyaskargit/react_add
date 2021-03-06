import React from 'react';

export default class ShowEmployee extends React.Component{
   state = {
        Emp: []
    }

componentDidMount = () => {

    this.setState(() => ({
        Emp: this.props.employeeDetails
      }))
}

onDelete = (e) => {
  this.props.employeeDelete(parseInt(e.target.value));
}


    renderData = () => {
        return(
                this.state.Emp.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{item.empId}</td>
                      <td>{item.empName}</td>
                      <td>{item.empSalary}</td>
                      <td><button onClick={this.onDelete} value={key}>Delete</button></td>
                    </tr>
                  );
                })
        );
    }

    render() {
        return (
          <div>
            <h1>Show Employee</h1>
            <table border="1">
              <tbody>
                <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                  <th>Employee Salary</th>
                  <th>Action</th>
                </tr>
                {this.renderData()}
              </tbody>
            </table>
          </div>
        );
    }
}