import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import PostList from './components/PostList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      posts: [],
      userList: true,
      postList: false
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

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
          const filteredPosts = json.filter(json => json.id < 4);
          this.setState({posts:filteredPosts})
      })
  }

  changeBackgroundColor(event) {
    this.setState({background: event.target.value});
  }

  changeTextColor(event) {
    this.setState({color: event.target.value});
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

  showItems() {
		this.setState({userList : true, postList: false})
	}

	showPosts() {
		this.setState({postList : true, userList: false})
  }
  
  handleDeleteUsers(event, id){
    event.preventDefault();
    const items = this.state.users.filter(user => user.id !== id);
    this.setState({ users: items });
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
        style={{ background: this.state.background, color: this.state.color }}
      >
          <UserAddForm submitAddForm={(event, name, male, female, email, salariu, isGoldClient) => this.submitAddForm(event, name, male, female, email, salariu, isGoldClient)}/>

          <div>
            <label htmlFor="color">Schimba culoarea fundalului: </label>
            <input name="color" type="color" onChange={(event) => this.changeBackgroundColor(event)}/>
          </div>
          <br></br>
          <div>
            <label htmlFor="color">Schimba culoarea textului: </label>
            <input name="color" type="color" onChange={(event) => this.changeTextColor(event)}/>
          </div>
        <button className="buton" onClick={() => this.showItems()}>Afiseaza useri</button>
          <button onClick={() => this.showPosts()}>Afiseaza postari</button>
          <br></br>
          
          {this.state.userList ? 
          <UserList 
            users={this.state.users} 
            handleDeleteUsers={(event, id) => this.handleDeleteUsers(event, id)}
          /> 
          : null}
          {this.state.postList ? 
          <PostList posts={this.state.posts}/> 
          : null}
      
      </div>
    );
  }
}

export default App;
