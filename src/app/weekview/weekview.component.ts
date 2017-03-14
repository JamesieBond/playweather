import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weekview',
  templateUrl: './weekview.component.html',
  styleUrls: ['./weekview.component.css']
})
export class WeekviewComponent implements OnInit {

  weatherData = null;

  constructor(private weatherService: WeatherService) { }

  mapid = null;

  ngOnInit() {

    this.mapid = this.weatherService.getCityId();
    console.log(this.weatherService.getWeatherData());

    this.weatherService.getWeatherForCity(this.mapid).subscribe(weatherData => {
      this.weatherData = weatherData;
      for(var i = 0; i < weatherData.list.length; i++){
        var date = new Date(weatherData.list[i].dt*1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var days = ['Monday','Tuesday','Wedesday','Thur','Friday','Saturday','Sunday','Aug','Sep','Oct','Nov','Dec'];
        var fromattedDate = days[date.getDay()] + ' the ' + date.getDate() + ' of ' + months[date.getMonth()] + ' at ' + date.getHours() + ':' + date.getMinutes();

        weatherData.list[i].dt = fromattedDate;

        weatherData.list[i].temp.day = (weatherData.list[i].temp.day - 273.15).toFixed(2);
        weatherData.list[i].temp.night = (weatherData.list[i].temp.night - 273.15).toFixed(2);

        

      }
    });


    this.weatherService.setWeatherData(this.weatherData);
  }

}
