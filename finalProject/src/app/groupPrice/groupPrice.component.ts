import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import {PostsService} from "../ServerCommunication/Communication-GetFirstPage";
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


  constructor(private _postService : PostsService,  private MessagesService: MessagesService){}
  ngOnInit() {
    // this.comPrices = [1,2,3];
    // // this.name = ["a", "b", "c"];
    // // this.comToDisplay.push({this.comPrices[0], ["1","2"]});
    // this.comToDisplay.push();
    // this.comToDisplay.push();
    

    // this.comToDisplay = [
    //     {price: 1, name: ["Sentence 1", "aa"]},
    //     {price: 2, name: ["Sentence 2", "bb"]},
    //     {price: 3, name: ["Sentence 3", "cc"]},
    //     {price: 4, name: ["Sentence 4", "dd"]},
    // ];
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

      ngOnDestroy() {
    // this.conn.unsubscribe();
  }
}

// interface ItemsInGroup {
//   price: any;
//   comNames : string[];
// }

type MyArrayType = Array<{price: number, name: string[]}>;