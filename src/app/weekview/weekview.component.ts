import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weekview',
  templateUrl: './weekview.component.html',
  styleUrls: ['./weekview.component.css']
})
export class WeekviewComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weatherData = null;

  mapid = null;

  ngOnInit() {

    this.mapid = this.weatherService.getCityId();

    this.weatherService.getWeatherForCity(this.mapid).subscribe(weatherData => {
      this.weatherData = weatherData;
      console.log(this.weatherData );
      for(var i = 0; i < this.weatherData.list.length; i++){
        var date = new Date(this.weatherData.list[i].dt*1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var days = ['Monday','Tuesday','Wedesday','Thur','Friday','Saturday','Sunday','Aug','Sep','Oct','Nov','Dec'];
        var minutes = "0" + date.getMinutes();
        var fromattedDate = days[date.getDay()] + ' the ' + date.getDate() + ' of ' + months[date.getMonth()] + ' at ' + date.getHours() + ':' + minutes.substr(-2);

        this.weatherData.list[i].dt = fromattedDate;

        this.weatherData.list[i].temp.day = (this.weatherData.list[i].temp.day - 273.15).toFixed(0);
        this.weatherData.list[i].temp.night = (this.weatherData.list[i].temp.night - 273.15).toFixed(0);
        this.weatherData.list[i].temp.eve = (this.weatherData.list[i].temp.eve - 273.15).toFixed(0);
        this.weatherData.list[i].temp.morn = (this.weatherData.list[i].temp.morn - 273.15).toFixed(0);
        this.weatherData.list[i].temp.min = (this.weatherData.list[i].temp.min - 273.15).toFixed(0);
        this.weatherData.list[i].temp.max = (this.weatherData.list[i].temp.max - 273.15).toFixed(0);

      }
      this.weatherService.setWeatherData(this.weatherData);
    });
  }

  weatherForDay(index){
    this.weatherService.setDay(index);
  }

}
