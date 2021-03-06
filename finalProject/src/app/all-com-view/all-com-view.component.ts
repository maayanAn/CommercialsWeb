import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
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

  constructor(private MessagesService: MessagesService){}

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
  }

  deleteCommercial(value){ 
   this.MessagesService.deleteMessage(value);
   this.updateView();
   swal(
    'Good job!',
    'Your commercial was deleted!',
    'success'
  );
  }

  updateMessage(value){
    this.MessagesService.updateMessage( value);
    swal({
      title: 'Good job!',
      type: 'info',
      text: 'Your message was updated.',
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

  onFilter(location,price,texts){
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
