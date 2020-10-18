import React from 'react';

import './App.css';
import Navbar from './components/layout/Navbar';

import Users from './components/layout/Users';


class App extends React.Component {
 
  
  render(){
  return (
    <>
    <div className="App">
      <header className="App-header">
      
      <Navbar title="Github Finder" icon="fab fa-github-square"/>
      <div className="container">
      <Users/>
      </div>
      
      </header>
    </div>
    </>
  );
}
}

export default App;