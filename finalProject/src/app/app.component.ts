import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./WeatherService/weather.service";
import {PostsService } from './ServerCommunication/Communication-GetFirstPage'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WeatherService, PostsService ]

})
export class AppComponent implements OnInit {
  title = 'app';
  Weather = 'MyWeather'

  constructor(private  _weatherService: WeatherService){

  }
  ngOnInit():any{
    this._weatherService.getWeather('Rishon LeZiyyon').subscribe(
      data=>{
        this.Weather = data.main.temp;
      }
    );
  }
}
