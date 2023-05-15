// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import Everything from './component/Home/Everything';

import IndiaSports from './component/India/IndiaSports';
import IndiaBusiness from './component/India/IndiaBusiness';
import IndiaPolitics from './component/India/IndiaPolitics';
import IndiaEntertainment from './component/India/IndiaEntertainment';

import UsaSports from './component/USA/UsaSports';
import UsaBusiness from './component/USA/UsaBusiness';
import Usapolitics from './component/USA/UsaPolitics';
import UsaEntertainment from './component/USA/UsaEntertainment';
// contact 
import Login from './component/Contact/Login';
import Signup from './component/Contact/Signup';

export default class App extends Component {
  // constructor(){
  //   super();
  //   this.state={   
  //     mode:"dark"
  //   }
  // }
  // EnableMode =async()=>{
  //   if(this.state.mode==="dark"){
  //     this.setState({mode: "light"});
  //   }
  //   else {
  //     this.setState({mode: "dark"});
  //   }
  // } 
  render() {
    return (
      <div className={`bg-dark text-light`}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/NewsWorld" element={<News></News>}></Route>
        <Route path="/indiapolitics" element={<IndiaPolitics></IndiaPolitics>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/" element={<Everything></Everything>}></Route>
        <Route path="/indiasports" element={<IndiaSports></IndiaSports>}></Route>
        <Route path="/indiabusiness" element={<IndiaBusiness></IndiaBusiness>}></Route>
        <Route path="/indiaentertainment" element={<IndiaEntertainment></IndiaEntertainment>}></Route>
        <Route path="/usasports" element={<UsaSports></UsaSports>}></Route>
        <Route path="/usabusiness" element={<UsaBusiness></UsaBusiness>}></Route>
        <Route path="/usapolitics" element={<Usapolitics></Usapolitics>}></Route>
        <Route path="/usaentertainment" element={<UsaEntertainment></UsaEntertainment>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

