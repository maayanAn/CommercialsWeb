import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import {PostsService} from "../ServerCommunication/Communication-GetFirstPage";
import {MessagesService} from '../Messages.service';
import {FormControl} from '@angular/forms'

@Component({
  moduleId: module.id,
  selector: 'app-all-com-view',
  templateUrl: './all-com-view.component.html',
  styleUrls: ['./all-com-view.component.css'],
  providers: [MessagesService],
})
export class AllComViewComponent implements OnInit {
  originalCommercials:any[];
  commercialsToDisplay:any[];
  connection;
  messages;

  constructor(private _postService: PostsService,
              private MessagesService: MessagesService){}

  ngOnInit() {
    //this.updateView();
    this.connection = this.MessagesService.getMessages().subscribe(message => {
      this.messages = message;
      this.commercialsToDisplay = this.messages;
    })
  }
  ngOnDestroy() {
    // this.connection.unsubscribe();
  }

  updateView(){
    this.originalCommercials = this._postService.getAllPosts();
    console.log(this.originalCommercials);
    this.commercialsToDisplay = [];
    for (let com of this.originalCommercials) {
      this.commercialsToDisplay.push(com);
    }

    console.log("view updated");
  }

  deleteCommercial(value){
    console.log(value);
    this._postService.removePost(value);
    this.updateView();

  }
  onClick(value){
    this.commercialsToDisplay=[];
    this.commercialsToDisplay.push(this._postService.getAllPosts()[0]);
  }
  onFilter(location,price,texts){
    console.log(location);
    console.log(price);
    let filteredComs =[];
    for (let com of this.originalCommercials) {
      let isOk = true;
      if(location != "" && com.location != location){
        isOk = false;
      }
      if(price != "" && com.price != price){
        isOk = false;
      }

      if(texts != "" && !com.textInputs.includes(texts)){
        isOk = false;
      }
      if (isOk)
        filteredComs.push(com);
    }
    this.commercialsToDisplay =[];
    for (let filterCom of filteredComs) {
      this.commercialsToDisplay.push(filterCom);
    }
  }
}
