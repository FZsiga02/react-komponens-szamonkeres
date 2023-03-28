import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Experience from './components/Experience';
import Time from './components/Time';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/tapasztalat' element={<Experience />}/>
          <Route path='/idopont' element={<Time />}/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  }

}

export default App;
