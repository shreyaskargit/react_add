import React from 'react';

export default class Search extends React.Component {

    state = {
        searchBy: "",
        query: "",
        result: this.props.result
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
         result: nextProps.result,
        };
       }

    onChange = (event) => {
        this.setState(() => ({
            query: event.target.value
        }));
    }

    onRadioChange = (event) => {
        this.setState(() => ({
            searchBy: event.target.value
        }));
    }

    onSubmit = (event) => {
        event.preventDefault();
        const qr = {searchBy: this.state.searchBy, query: this.state.query};
        this.props.searchQuery(qr);
    }

    renderResult = () => {
        return(
            this.state.result.map((item, key) => {
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


    render () {
        return (
          <>
            <div>
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  name="seach"
                  id="search"
                  value={this.state.query}
                  onChange={this.onChange}
                  placeholder="enter name or id"
                />
                <br />
                <label>
                  <input
                    type="radio"
                    value="empId"
                    checked={this.state.searchBy === "empId"}
                    onChange={this.onRadioChange}
                  />
                  id
                </label>
                <label>
                  <input
                    type="radio"
                    value="empName"
                    checked={this.state.searchBy === "empName"}
                    onChange={this.onRadioChange}
                  />
                  name
                </label>
                <br />
                <button type="submit">Search</button>
              </form>
            </div>
            <div>
            <table border="1">
              <tbody>
                <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                  <th>Employee Salary</th>
                </tr>
                {this.renderResult()}
              </tbody>
            </table>
            </div>
          </>
        );
    }
}