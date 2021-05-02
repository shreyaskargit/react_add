import React from 'react';
import AddEmployee from './Components/AddEmployee';
import ShowEmployee from './Components/ShowEmployee';
import Search from './Components/Search';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
class App extends React.Component {
  state = {
    emp: [
      { empId: "101", empName: "some", empSalary: 10001 },
      { empId: "102", empName: "one", empSalary: 11 },
      { empId: "103", empName: "two", empSalary: 22 },
      { empId: "104", empName: "three", empSalary: 10001 },
      { empId: "101", empName: "four", empSalary: 10001 },
      { empId: "101", empName: "five", empSalary: 10001 },
    ],
    result: [],
  };

  handleAdd = (childData) => {
    let ar = this.state.emp;
    ar.push(childData);
    this.setState(() => ({
      emp: ar,
    }));
  };

  handleDelete = (childData) => {
    const rem = this.state;
    rem.emp.splice(childData, 1);
    this.setState(() => ({
      emp: rem.emp,
    }));
  };

  handleSearch = async (query) => {
    const res = await this.state.emp.filter((ele) => {
      const s = query.searchBy;
      return ele[s] === query.query
    });
    await this.setState({result: res})
  };

  render() {
    return (
      <Router>
        <div>
          <Link to="/add">Add Product</Link>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/show">Show Product</Link>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/search">Search</Link>
          <Route path="/add">
            <AddEmployee employeeData={this.handleAdd} />
          </Route>
          <Route path="/show">
            <ShowEmployee
              employeeDetails={this.state.emp}
              employeeDelete={this.handleDelete}
            />
          </Route>
          <Route path="/search">
            <Search
              searchQuery={this.handleSearch}
              result={this.state.result}
            />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
