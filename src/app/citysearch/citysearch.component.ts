import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css','../css/weather-icons.css']
})
export class CitysearchComponent implements OnInit {

  title = 'Forecast for good Play!';

  cities = [];

  isThereWeatherData = false;

  searchError = false;
  errorString = '';

  constructor(private weatherService: WeatherService){}

  ngOnInit() {
    if(this.weatherService.getCityId() != null){
      this.isThereWeatherData = true;
    }
  }

  searchCity(name){
    console.log(name);
    if(name === '' || name === null){
      this.searchError = true;
      this.errorString = 'Please enter a City Name';
    }
    else{
      this.weatherService.getCityList(name).subscribe(cities => {
        this.cities = cities;
        if(cities === null || cities.length === 0){
          this.searchError = true;
          this.errorString = 'Your City Search Returned no results';
        }
        else{
          this.searchError = false;
        }
      });
    }
    console.log(this.errorString );
  };

  weatherForCity(mapid){
    this.weatherService.setCityId(mapid);
    this.isThereWeatherData = true;
  };


}
