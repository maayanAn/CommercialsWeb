import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {PostsService } from '../ServerCommunication/Communication-GetFirstPage';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-single-com-view',
  templateUrl: './single-com-view.component.html',
  styleUrls: ['./single-com-view.component.css'],
  providers: [],
  inputs: [`currentPost`],
  outputs:['notifyDelete']
})
export class SingleComViewComponent implements OnInit {
  notifyDelete: EventEmitter<string>=new EventEmitter<string>();
  public name;
  public color;
  public timeToShow;
  public location;
  public textInputs;
  public imageInputs;
  public price;
  public videoUrl;
  public recomendedSites;
  public currentPost: any;
  constructor(private _postService : PostsService){}

  OnSaveChanges(value: any){
    this.location = value.location;
    this.color = value.color;
    this.timeToShow = value.timeToShow;
    this.price = value.price;
    this.imageInputs = value.imageInputs;
    this.textInputs = value.textInputs;
    this.videoUrl = value.videoUrl;
    this.recomendedSites = value.recomendedSites;
  }
  onDeleteItem(name: string){
    // this._postService.removePost(name);
    console.log("delete");
    this.notifyDelete.emit(this.name);
  }

  ngOnInit() {
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
