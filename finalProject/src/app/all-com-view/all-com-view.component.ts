import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import {PostsService} from "../ServerCommunication/Communication-GetFirstPage";
import {MessagesService} from '../Messages.service';
import {FormControl} from '@angular/forms';
declare var swal: any;

@Component({
  moduleId: module.id,
  selector: 'app-all-com-view',
  templateUrl: './all-com-view.component.html',
  styleUrls: ['./all-com-view.component.css'],
  providers: [MessagesService],
})
export class AllComViewComponent implements OnInit, OnDestroy {
  originalCommercials:any[];
  commercialsToDisplay:any[];
  connection;
  messages;
  messageToUpdate;

  constructor(private _postService: PostsService,
              private MessagesService: MessagesService){}

  ngOnInit() {
     this.updateView();    
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  updateView(){
    this.connection = this.MessagesService.getMessages().subscribe(message => {
      this.messages = message;
      this.originalCommercials = this.messages;
      this.commercialsToDisplay = this.messages;
    })

    // this.originalCommercials = this._postService.getAllPosts();
    // console.log(this.originalCommercials);
    // this.commercialsToDisplay = [];
    // for (let com of this.originalCommercials) {
    //   this.commercialsToDisplay.push(com);
    // }

    // console.log("view updated");
  }

  deleteCommercial(value){ 
   this.MessagesService.deleteMessage(value);
   this.updateView();
   swal(
    'Good job!',
    'Youre commercial was deleted!',
    'success'
  );
  }

  updateMessage(value){
    // this.messageToUpdate = this.MessagesService.convertToJson(value.name, value.textInputs, value.imageInputs,
    //                                                   value.color, value.timeToShow, value.price, value.location, value.videoUrl, value.recomendSites);
    this.MessagesService.updateMessage( value);
    swal({
      title: 'Good job!',
      type: 'info',
      text: 'Youre message was updated.',
      timer: 2000
    }).then(
      function () {},
      // handling the promise rejection
      function (dismiss) {
        if (dismiss === 'timer') {
          console.log('I was closed by the timer')
        }
      }
    )
     this.updateView(); 
  }
  onClick(value){
    this.commercialsToDisplay=[];
    this.commercialsToDisplay.push(this._postService.getAllPosts()[0]);
  }
  onFilter(location,price,texts){
    console.log(location);
    console.log(price);
    console.log(this.originalCommercials);
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

  onFilter2(name,tts,url){
    let filteredComs =[];
    for (let com of this.originalCommercials) {
      let isOk = true;
      if(name != "" && com.name != name){
        isOk = false;
      }
      if(tts != "" && com.time_to_show != tts){
        isOk = false;
      }

      if(url != "" && !com.recomendedSites.includes(url)){
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
