import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {PostsService } from '../ServerCommunication/Communication-GetFirstPage';
import { FormsModule } from '@angular/forms';
import {MessagesService} from '../Messages.service';

@Component({
  moduleId: module.id,
  selector: 'app-single-com-view',
  templateUrl: './single-com-view.component.html',
  styleUrls: ['./single-com-view.component.css'],
  providers: [MessagesService],
  inputs: [`currentPost`],
  outputs:['notifyDelete','notifyUpdate']
})
export class SingleComViewComponent implements OnInit {
  notifyDelete: EventEmitter<string>=new EventEmitter<string>();
  notifyUpdate: EventEmitter<string>=new EventEmitter<string>();
  public name;
  public color;
  public timeToShow;
  public location;
  public textInputs;
  public imageInputs;
  public price;
  public videoUrl;
  public recomendedSites;
  public id: any;
  public currentPost: any;
  public messageToUpdate;
  

  constructor(private _postService : PostsService,  private MessagesService: MessagesService){}

  OnSaveChanges(value: any){
    this.location = value.location;
    this.color = value.color;
    this.timeToShow = value.timeToShow;
    this.price = value.price;
    this.imageInputs = value.imageInputs;
    this.textInputs = value.textInputs;
    this.videoUrl = value.videoUrl;
    this.recomendedSites = value.recomendedSites;

    this.messageToUpdate = this.MessagesService.convertToJson(value.name, value.textInputs, value.imageInputs,
                                                      value.color, value.timeToShow, value.price, value.location,
                                                      value.videoUrl, value.recomendSites, this.id);
    this.notifyUpdate.emit(this.messageToUpdate);      
  }
  onDeleteItem(name: string){
    // this._postService.removePost(name);
    console.log("delete");
    this.notifyDelete.emit(this.name);
  }

  ngOnInit() {
    this.id = this.currentPost._id;
    this.location = this.currentPost.location;
    this.color = this.currentPost.color;
    this.timeToShow = this.currentPost.time_to_show;
    this.textInputs = this.currentPost.textInputs;
    this.imageInputs = this.currentPost.imageInputs;
    this.price = this.currentPost.price;
    this.name = this.currentPost.name;
    this.videoUrl = this.currentPost.videoUrl;
    this.recomendedSites = this.currentPost.recomendedSites;
  }  
}
