import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Router from './components/Router/Router';

function App() {
  return (
    <div className="App">
      <Header>
      <Nav></Nav>
      </Header>
      <Main>
        <Router />
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
