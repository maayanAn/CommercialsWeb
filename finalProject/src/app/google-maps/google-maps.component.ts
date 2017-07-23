import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../WeatherService/weather.service";

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
  inputs: [`location`],
  providers:[WeatherService]
})
export class GoogleMapsComponent implements OnInit{
  public location: string ="";
  public lat: number = 31.969166;
  public lng: number = 34.803872;

  Weather = 'MyWeather'
  constructor(private  _weatherService: WeatherService){

  }
  ngOnInit():any{
    this._weatherService.getWeather(this.location).subscribe(
      data=>{
        this.lng = data.coord.lon;
        this.lat = data.coord.lat;
      }
    );
  }
}
