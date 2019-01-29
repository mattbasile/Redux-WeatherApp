import axios from 'axios';


export const FETCHING_WEATHER = "FETCHING_WEATHER";
export const FETCH_SUCCESS= "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchingWeather = () => {
    const promise = axios.get("https://api.openweathermap.org/data/2.5/forecast?id=5110302&APPID=4daf74c51e95eb31d83855929ec9bbab")
    return dispatch =>{
        dispatch({type: FETCHING_WEATHER});
        promise
        .then(response =>{
            dispatch({type: FETCH_SUCCESS, payload: response});
        })
        .catch(err =>{
            console.log(err);
            dispatch({type: FETCH_ERROR})
        });
    };
};