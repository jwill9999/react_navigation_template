import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import './main.scss'

class App extends React.Component {
  constructor() {
    super()
   
  }

 

  render() {
      

    return (
      <div className='container'>
        <Nav />
        <Home/>
        <About/>
        <Contacts/>
      </div>
    )
  }

};

module.exports = App;