import React from 'react';
import AddEmployee from './Components/AddEmployee';
import ShowEmployee from './Components/ShowEmployee';

class App extends React.Component {
  state = {
    emp: []
  }

  handleAdd = (childData) => {
    let ar = this.state.emp;
      ar.push(childData);
    this.setState(() => ({
      emp: ar
    }));
  }

  handleDelete = (childData) => {
    let rem = this.state.emp.splice(childData, 1);
    this.setState(() => ({
      emp: rem
    }));
  }

  render() {
    return (
      <div>
        <AddEmployee employeeData = {this.handleAdd}/>
        <ShowEmployee employeeDetails = {this.state.emp} employeeDelete = {this.handleDelete}/>
      </div>
    );
  }
}

export default App;
