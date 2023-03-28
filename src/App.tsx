import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Routes } from 'react-router-dom';

class App extends React.Component {

  render() {
    return <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          
        </Routes>
      </main>
    </div>
  }

}

export default App;
