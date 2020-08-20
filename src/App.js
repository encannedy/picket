import React from "react";
// import SearchResultContainer from "./components/searchResultContainer";
import Header from "./components/Header"
import SearchResult from "./components/searchResult"
import API from './utils/API';


class App extends React.Component {
  state = {
    employees: [],
    allEmployees: [],
    order: "descend"
  }

  componentDidMount() {
    // update employee state
    // after making the api cal
    API.getUsers().then(users => {
      console.log(users)
      this.setState({
        employees: users.data.results,
        allEmployees: users.data.results
      })
    })
  }

  search = (event) => {
    const searchResult = event.target.value;
    this.setState({
      employees: this.state.allEmployees.filter(employee => {
        if (employee.name.first.includes (searchResult)){
          return true;
        } else return false;
        })
      })
    
    // use the filter funciton
    // use includes function
  }

  sort = () => {
    function ascend(a, b) {
      if (a.name.first > b.name.first) return -1;
      if (a.name.first < b.name.first) return 1;
      return 0;
    }

    function descend(a, b) {
      if (a.name.first < b.name.first) return -1;
      if (a.name.first > b.name.first) return 1;
      return 0;
    }
    if (this.state.order === 'ascend') {
      this.setState({
        order: "descend",
        employees: this.state.employees.sort(ascend)
      })
    } else {
      this.setState({
        order: "ascend",
        employees: this.state.employees.sort(descend)
      })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <input type="search" onChange={this.search} />
        <button onClick={this.sort}>Sort by first name</button>
        <SearchResult users={this.state.employees} />
      </div>
    );
  }
}

export default App;