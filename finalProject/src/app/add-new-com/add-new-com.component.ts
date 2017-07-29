import { Component, OnInit } from '@angular/core';
import {PostsService } from '../ServerCommunication/Communication-GetFirstPage';

@Component({
  selector: 'app-add-new-com',
  templateUrl: './add-new-com.component.html',
  styleUrls: ['./add-new-com.component.css'],
  providers:[]
})
export class AddNewComComponent implements OnInit {
  public name: string;
  public color: string;
  public timeToShow :string;
  public location:string;
  public textInputs:string[];
  public imageInputs:string[];
  public price:string;
  public videoUrl:string;
  public recomendSites:string[];
  constructor(private _postService: PostsService) { }

  ngOnInit() {
  }

  AddCom(value: any){
    this.name = value.name;
    this.location = value.location;
    this.color = value.color;
    this.timeToShow = value.timeToShow;
    this.price = value.price;
    this.imageInputs = value.imageInputs;
    this.textInputs = value.textInputs;
    this.videoUrl = value.videoUrl;
    this.recomendSites = value.recomendSites;
    this._postService.addPost(this.name, this.textInputs,this.imageInputs,
                              this.color,this.timeToShow,this.price,this.location,
                              this.videoUrl,this.recomendSites);

  }

}
