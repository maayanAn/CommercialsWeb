import { Component, OnInit, OnDestroy, Renderer, ElementRef } from '@angular/core';
import {PostsService } from '../ServerCommunication/Communication-GetFirstPage';
import {MessagesService} from '../Messages.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { $ } from "protractor/built";

@Component({
  moduleId: module.id,
  selector: 'app-add-new-com',
  templateUrl: './add-new-com.component.html',
  styleUrls: ['./add-new-com.component.css'],
  providers:[MessagesService]
})
export class AddNewComComponent implements OnInit {

  public name: string;
  private _color: string = '#000'; 
  public timeToShow :string;
  public location:string;
  public textInputs:string[];
  public imageInputs:string[];
  public price:string;
  public videoUrl:string;
  public recomendSites:string[];
  public messages = [];
  public connection;
  public message;

  set color (value:string){
    this._color = value;
  }

  get color():string{
    return this._color;
  }

  constructor(private _postService: PostsService,
              private MessagesService: MessagesService,
            elementRef: ElementRef, renderer: Renderer) {}

  ngOnInit() {
    this.connection = this.MessagesService.getMessages().subscribe(message => {
      this.messages.push(message);      
    })     
  }

  ngDoCheck(){
    console.log(this._color);
  }

  insertMessage(){
    this.message = this.MessagesService.convertToJson(this.name, this.textInputs, this.imageInputs,
                                                      this.color, this.timeToShow, this.price, 
                                                      this.location, this.videoUrl, this.recomendSites);
    this.MessagesService.insertMessage(this.message);
    this.message = '';
  }

  AddCom(value: any){
    this.name = value.name;
    this.location = value.location;    
    this.timeToShow = value.timeToShow;
    this.price = value.price;
    this.imageInputs = value.imageInputs;
    this.textInputs = value.textInputs;
    this.videoUrl = value.videoUrl;
    this.recomendSites = value.recomendSites;    
    if (this.color == undefined){
      this.color = "#000000";
    }
    //this._postService.addPost(this.name, this.textInputs,this.imageInputs,
                              // this.color,this.timeToShow,this.price,this.location,
                              // this.videoUrl,this.recomendSites);
    
    this.insertMessage();
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
