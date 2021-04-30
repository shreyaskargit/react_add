import React from 'react';

export default class ShowEmployee extends React.Component{
   state = {
        Emp: []
    }

componentDidMount = () => {
    console.log(this.props);

    this.setState(prevState => ({
        Emp: this.props.employeeDetails
      }))
}


    renderData = () => {
        return(
                this.state.Emp.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{item.empId}</td>
                      <td>{item.empName}</td>
                      <td>{item.empSalary}</td>
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
                  <th>Employee Price</th>
                </tr>
                {this.renderData()}
              </tbody>
            </table>
          </div>
        );
    }
}