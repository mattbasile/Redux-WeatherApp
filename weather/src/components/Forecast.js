import React from 'react';

class Forecast extends React.Component{
    constructor(props){
        super(props);
    }
    degreesF = temp =>{
        const numTemp = Number(temp)
        const newTemp = (numTemp- 273.15)*1.8+32
        return Math.round(newTemp);
    }
    formatDate = date  =>  {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        let split = date.split(" ");
        let mapper = split.map(val => val.split("-"));
        mapper.pop();
        var date = mapper[0].map(n => parseInt(n, 10));
        console.log(date)
      
        var day = date[2]
        var monthIndex = date[1];
        var year = date[0];
      
        return day + ' ' + monthNames[monthIndex-1] + ' ' + year;
      }
    render(){
        return(
            <div>
                <h3>Date: {this.formatDate(this.props.forecast.dt_txt)}</h3>
                <div>
                    <p>High: {`${this.degreesF(this.props.forecast.main.temp_max)} F`}</p>
                    <p>Low: {`${this.degreesF(this.props.forecast.main.temp_min)} F`}</p>
                </div>
            </div>
        )
    }
}

export default Forecast