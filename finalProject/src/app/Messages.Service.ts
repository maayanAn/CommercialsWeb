import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Http } from '@angular/http';

@Injectable()
export class MessagesService {
  private url = 'http://localhost:8080';
  private socket;

  constructor(private _http:Http){}

  updateMessage( message){
    this.socket.emit('update-message', message);
  }

  deleteMessage(id){
    this.socket.emit('delete-message', id);
  }

  insertMessage(message){
    this.socket.emit('insert-message', message);
  }

  getMessages() {

    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('all-messages', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getGroupMessages() {

    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('group-messages', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  convertToJson(name: string, texts: string[], images: string[],
                color: string , timeToShow: string, price: string, 
                location: string, videoUrl:string, recomendedSites:string[], id:string = ""){
    let jsonObject = {
      '_id': id,
      'name': name,
      'textInputs': texts,
      'imageInputs': images,
      'color': color,
      'time_to_show': timeToShow,
      'price': price,
      'location': location,
      'videoUrl': videoUrl,
      'recomendedSites': recomendedSites
    }
    return jsonObject;
  }

  convertToJsonForInsert(name: string, texts: string[], images: string[],
                color: string , timeToShow: string, price: string, 
                location: string, videoUrl:string, recomendedSites:string[]){
    let jsonObject = {     
      'name': name,
      'textInputs': texts,
      'imageInputs': images,
      'color': color,
      'time_to_show': timeToShow,
      'price': price,
      'location': location,
      'videoUrl': videoUrl,
      'recomendedSites': recomendedSites
    }
    return jsonObject;
  }

    getVeideosIds(query) {
    console.log(query)
    return this._http.get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&maxResults=1&q=` + query + '&key=AIzaSyBWWVI_8EP6D0cNOkqwxtVKj6muVhxkhbk')
      .map(res => res.json());
  }

  get5VeideosIds(query) {
    console.log(query)
    return this._http.get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&maxResults=5&q=` + query + '&key=AIzaSyBWWVI_8EP6D0cNOkqwxtVKj6muVhxkhbk')
      .map(res => res.json());
  }

}
