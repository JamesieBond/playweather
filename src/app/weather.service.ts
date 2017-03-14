import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  mapid = null;

  getCityId(){
    return this.mapid;
  }

  setCityId(mapid){
    this.mapid = mapid;
  }

  weatherData = null;

  getWeatherData(){
    return this.weatherData;
  }

  setWeatherData(weatherData){
    this.weatherData = weatherData;
  }

  getAllCity() {
    return this.http.get('/api/city')
      .map(res => res.json());
  };

  getCityList(name) {
    return this.http.get('/api/city/' + name)
      .map(res => res.json());
  };


  getWeatherForCity(mapid){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=' + mapid + '&cnt=16&appid=7118c4621ff7538a91cc416578e0cc5b')
      .map(res => res.json());
  };



}
