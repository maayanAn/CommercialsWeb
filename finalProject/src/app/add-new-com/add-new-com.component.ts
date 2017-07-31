import { Component, OnInit, OnDestroy } from '@angular/core';
import {PostsService } from '../ServerCommunication/Communication-GetFirstPage';
import {MessagesService} from '../Messages.service';
import {FormControl} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-add-new-com',
  templateUrl: './add-new-com.component.html',
  styleUrls: ['./add-new-com.component.css'],
  providers:[MessagesService]
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
  public messages = [];
  public connection;
  public message;

  constructor(private _postService: PostsService,
              private MessagesService: MessagesService) { }

  ngOnInit() {
    this.connection = this.MessagesService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  insertMessage(value: any){
    this.message = this.MessagesService.convertToJson(value.name, value.textInputs, value.imageInputs,
                                                      value.color, value.timeToShow, value.price, 
                                                      value.location, value.videoUrl, value.recomendSites);
    this.MessagesService.insertMessage(this.message);
    this.message = '';
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
    //this._postService.addPost(this.name, this.textInputs,this.imageInputs,
                              // this.color,this.timeToShow,this.price,this.location,
                              // this.videoUrl,this.recomendSites);
    this.insertMessage(value);
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
