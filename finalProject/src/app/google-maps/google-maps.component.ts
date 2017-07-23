import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent{
  title: string = 'Google Maps... Checked!';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
