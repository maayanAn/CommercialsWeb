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
  public template: string;
  public timeToShow :string;
  public location:string;
  public textInputs:string[];
  public imageInputs:string[];
  public price:string;
  constructor(private _postService: PostsService) { }

  ngOnInit() {
  }

  AddCom(value: any){
    this.name = value.name;
    this.location = value.location;
    this.template = value.template
    this.timeToShow = value.timeToShow
    this.price = value.price
    this.imageInputs = value.imageInputs
    this.textInputs = value.textInputs
    this._postService.addPost(this.name, this.textInputs,this.imageInputs,
                              this.template,this.timeToShow,this.price,this.location);

  }

}
