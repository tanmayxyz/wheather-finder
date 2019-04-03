import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Wheather from './components/Wheather';

const API_KEY = "5c3b05d5417e9bfb0a7448ac299e3b89";

class App extends Component {
  
  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  }

  getWheather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data);

    this.setState({
      temperature : data.main.temp,
      city :data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error : undefined

    })
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