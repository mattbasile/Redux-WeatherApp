import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {fetchingWeather} from "./actions"
import Forecast from "./components/Forecast"

class App extends Component {
  constructor(props){
    super(props);

  }
componentDidMount(){
  this.props.fetchingWeather();
}
render() {
  console.log(this.props.weather)
    return (
      <div className="App">
        <h1>Weather for {this.props.location.name}, {this.props.location.country}</h1>
        {this.props.weather.map(forecast =>{
          return <Forecast key={forecast.dt} forecast={forecast}/>
        })}
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    weather: state.weather,
    error: state.error,
    fetchingWeather: state.fetchingWeather,
    location: state.location
  }
}

export default connect(mapStateToProps, {fetchingWeather})(App)