import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import {MessagesService} from '../Messages.service';
import {FormControl} from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  moduleId: module.id,
  selector: 'groupPrice',
  templateUrl: './groupPrice.component.html',
  styleUrls: ['./groupPrice.component.css'],
  providers: [MessagesService],
})
export class GroupPriceComponent implements OnInit, OnDestroy {
  notifyDelete: EventEmitter<string>=new EventEmitter<string>();
  notifyUpdate: EventEmitter<string>=new EventEmitter<string>();
  public name:string[];
  public price;
  public comPrices:any;
  conn;
  messages;
  public comToDisplay: MyArrayType=[];


  constructor(private MessagesService: MessagesService){}
  ngOnInit() {
    this.conn = this.MessagesService.getGroupMessages().subscribe(message => {
      this.messages = message;
      console.log(this.messages[0]);
      this.setGroupPage();
     });
  }

    setGroupPage(){
        this.messages.forEach(element => {               
            this.comToDisplay.push({price: element._id, name: element.names});      
        });
    }

      ngOnDestroy() {}
}

type MyArrayType = Array<{price: number, name: string[]}>;