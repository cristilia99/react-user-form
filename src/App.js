import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        data.forEach(user => {          
          (user.id === 1) ? ((user.salariu = 4000) && (user.female = true))
          : (user.id === 2) ? ((user.salariu = 3500) && (user.male = true))
          : ((user.salariu = 3000) && (user.female = true))       
        });
        this.setState({users: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, male, female, email, salariu, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            male,
            female,
            email,
            salariu,
            isGoldClient
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" 
      >
          <UserAddForm submitAddForm={(event, name, male, female, email, salariu, isGoldClient) => this.submitAddForm(event, name, male, female, email, salariu, isGoldClient)}/>
          <UserList 
            users={this.state.users} 
          /> 
      </div>
    );
  }
}

export default App;
