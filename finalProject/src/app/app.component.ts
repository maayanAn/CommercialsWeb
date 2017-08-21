import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./WeatherService/weather.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WeatherService]

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
