import _ from "lodash";

import "./banner.css";
import { log } from "util";

const api = 'YcIAnHBf0sqksbYFejsewgDsh2qvoCuI';


const weather = async (key) => {

const link = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/';
const target = `${key}?apikey=${api}`;

const response = await fetch(link + target);

const data = await response.json();

return data[0];

};




const getCity = async (city) => {

const link = 'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search';
const target = `?apikey=${api}&q=${city}`;

const response = await fetch(link + target);
const data = await response.json();
return data[0];

};




export {getCity, weather};

