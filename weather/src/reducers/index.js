import {FETCHING_WEATHER, FETCH_SUCCESS, FETCH_ERROR } from '../actions'

const initialState = {
    weather: [],
    fetchingWeather: false,
    error: "",
    location: {}
};

export const rootReducer = (state= initialState, action) =>{
    switch(action.type){
    case FETCHING_WEATHER:
        return Object.assign({}, state, {fetchingWeather: true});
    case FETCH_SUCCESS: 
    console.log(action.payload.data)
        return Object.assign({}, state, {
        weather: [...state.weather, ...action.payload.data.list],
        location: {...state.location, ...action.payload.data.city},
        fetchingWeather: false
    });
    case FETCH_ERROR: 
    return  {...state,
        fetchingWeather: false,
        error: "Error fetching Weather"
    };
    default:
    return state;
    }

}