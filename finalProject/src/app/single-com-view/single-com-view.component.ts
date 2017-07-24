import { Component, OnInit } from '@angular/core';
import {PostsService } from '../ServerCommunication/Communication-GetFirstPage';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-com-view',
  templateUrl: './single-com-view.component.html',
  styleUrls: ['./single-com-view.component.css'],
  providers: [PostsService],
  inputs: [`currentPost`],
})
export class SingleComViewComponent implements OnInit {
  public name;
  public template;
  public timeToShow;
  public location;
  public textInputs;
  public imageInputs;
  public price;
  public currentPost: any;
  constructor(private _postService: PostsService){}

  OnSaveChanges(value: any){
    this.location = value.location;
    this.template = value.template
    this.timeToShow = value.timeToShow
    this.price = value.price
    this.imageInputs = value.imageInputs
    this.textInputs = value.textInputs
  }

  ngOnInit() {
    // this.currentPost = this._postService.getAllPosts()[0]
    this.location = this.currentPost.location;
    this.template = this.currentPost.temp;
    this.timeToShow = this.currentPost.time_to_show;
    this.textInputs = this.currentPost.textInputs;
    this.imageInputs = this.currentPost.imageInputs;
    this.price = this.currentPost.price;
    this.name = this.currentPost.name;
    this.location = this.currentPost.location;
    this.template = this.currentPost.temp;
  }
}
