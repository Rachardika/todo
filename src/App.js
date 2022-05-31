import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  // baseURL: `https://gorest.co.in/public/v1/users`
})

  
class App extends Component{

  state = {
    users: []
  }

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data)
      this.setState({ users :res.data })
    })
  }

  createUsers = async () => {
    let res = await api.post('/', { name: "test", id: 4, author: 'test'})
    console.log(res)
  }
  
  render (){
  return (
    <div className="App">
      <header className="App-header">
        {this.state.users.map(users => <h2 key={users.id}>{users.name}</h2>)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;