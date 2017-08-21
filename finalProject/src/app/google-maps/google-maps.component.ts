import { Component, OnInit, Input,SimpleChanges } from '@angular/core';
import {WeatherService} from "../WeatherService/weather.service";
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
  inputs: [`location`],
  providers:[WeatherService]
})
export class GoogleMapsComponent implements OnChanges{
  @Input() public location: string ="";
  public lat: number = 31.969166;
  public lng: number = 34.803872;

  Weather = 'MyWeather'
  constructor(private  _weatherService: WeatherService){

  }

  ngOnChanges(changes: SimpleChanges) {
    this._weatherService.getWeather(this.location).subscribe(
      data=>{
        this.lng = data.coord.lon;
        this.lat = data.coord.lat;
      }
    );
  }
}
