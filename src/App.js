import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/layout/Users';
import axios from 'axios';

class App extends React.Component{

  state={
    users:[],
    loading: false
  }

  async componentDidMount(){

    this.setState({loading:true});
    const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   

    this.setState({users:response.data, loading:false});

  }
  
render(){

  return(

    <>
    <div className="App">
      <header className="App-header">
      
      <Navbar title="Github Finder" icon="fab fa-github-square"/>
      <div className="container">
      <Users users={this.state.users} loading={this.state.loading} />
      </div>
      
      </header>
    </div>
    </>
  )
}
}

export default App;