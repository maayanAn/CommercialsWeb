import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class WeatherService{
  constructor(private _http:Http){

  }
  getWeather(): Observable<any>{
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Rishon LeZiyyon&APPID=a6462808250b9a325ebacf09a42dbf26&units=metric')
      .map(response=>response.json())
      .catch(error=>{
        console.error(error);
        return Observable.throw(error.json())
      });
  }
}
