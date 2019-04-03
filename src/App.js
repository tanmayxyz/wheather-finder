import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Wheather from './components/Wheather';

const API_KEY = "5c3b05d5417e9bfb0a7448ac299e3b89";

class App extends Component {
  constructor() {
    super();
    this.getWheather = this.getWheather.bind(this);
  }

  getWheather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=kolkata,india&appid=${API_KEY}&units=metric`)
    const json_data = await api_call.json();
    console.log(json_data);
  }



  render() {
    return (
      <div>
        <Title />
        <Form getWheather = {this.getWheather}/>
        <Wheather />
      </div>
    )
  }
}

export default App;