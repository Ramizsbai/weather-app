import './banner';
import {getCity, weather} from './banner';


const cityForm = document.querySelector('form');
const card = document.querySelector('card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');


const UpdateUi = (data) => {


const cityDat = data.cityDat;
const weatherC = data.weatherC;


details.innerHTML = 
`<h5 class="my-3">${cityDat.EnglishName}</h5>
   <div class="my-3">${weatherC.WeatherText}</div>
       <div class="display-4 my-4">
           <span>${weatherC.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
      </div>
`;
};


const updateCity = async (city) => {

const cityDat = await getCity(city);
const weatherC = await weather(cityDat.Key);

return {
    cityDat: cityDat,
    weatherC: weatherC
};
};

cityForm.addEventListener('submit', e => {
e.preventDefault();


const city = cityForm.city.value.trim();
cityForm.reset();


updateCity(city)
.then(data => UpdateUi(data))
.catch(err => console.log(err));

});