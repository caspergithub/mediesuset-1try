import React from 'react';
import Header from './components/Partials/Header/Header';
import Main from './components/Partials/Main/Main';
import Footer from './components/Partials/Footer/Footer';
import Nav from './components/Partials/Nav/Nav';
import Router from './components/Router/Router';

function App() {
  return (
    <>
    <Header>
      <Nav />
    </Header>
    <Main>
      <Router />
    </Main>
    <Footer />
    </>
  );
}

export default App;
