import { Component, OnInit,OnDestroy } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MessageService]
})
export class MessageComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
   constructor(private MessageService:MessageService) {}
  sendMessage(){
    this.MessageService.sendMessage(this.message);
    this.message = '';
  }
  ngOnInit() {
    this.connection = this.MessageService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }
  // Let's unsubscribe our Observable
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}