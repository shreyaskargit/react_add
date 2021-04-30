import React from 'react';
import AddEmployee from './Components/AddEmployee';
import ShowEmployee from './Components/ShowEmployee';

class App extends React.Component {
  state = {
    emp: []
  }

  handleData = (childData) => {
    let ar = this.state.emp;
      ar.push(childData);
    this.setState(() => ({
      emp: ar
    }));
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <AddEmployee employeeData = {this.handleData}/>
        <ShowEmployee employeeDetails = {this.state.emp}/>
      </div>
    );
  }
}

export default App;
