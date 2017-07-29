import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';


export class MessagesService {
  private url = 'http://localhost:8080';
  private socket;

  updateMessage(message){
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

  convertToJson(name: string, texts: string[], images: string[],
                temp: string , timeToShow: string, price: string, location: string){
    let jsonObject = {
      'id': 0,
      'name': name,
      'textInputs': texts,
      'imageInputs': images,
      'temp': temp,
      'time_to_show': timeToShow,
      'price': price,
      'location': location,
      'videoUrl': '',
      'recomendedSites': []
    }
    return jsonObject;
  }

}
