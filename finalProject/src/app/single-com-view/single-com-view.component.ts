import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MessagesService} from '../Messages.service';
declare var swal: any;

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
  private _color: string = '#000';
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
  
  set color (value:string){
    this._color = value;
  }

  get color():string{
    return this._color;
  }

  constructor(private MessagesService: MessagesService){}

  OnSaveChanges(value: any){
    if (value.name !== "" && value.location !== "" &&
        value.timeToShow !== "" && value.price!== "" &&
        value.imageInputs !== "" && value.textInputs!== "" &&
        value.videoUrl!== "" && value.recomendedSites!== ""){

      this.name = value.name;
      this.location = value.location;      
      this.timeToShow = value.timeToShow;
      this.price = value.price;
      if (typeof value.imageInputs === 'string')
        this.imageInputs = value.imageInputs.split(',');
      else
        this.imageInputs = value.imageInputs;
      if (typeof value.textInputs === 'string')
        this.textInputs = value.textInputs.split(',');
      else
        this.textInputs = value.textInputs;
      this.videoUrl = value.videoUrl;
      if (typeof value.recomendedSites === 'string')
        this.textInputs = value.textInputs.split(',');
      else
        this.textInputs = value.textInputs;

      this.messageToUpdate = this.MessagesService.convertToJson(this.name, this.textInputs, this.imageInputs,
                                                        this.color, this.timeToShow, this.price, this.location,
                                                        this.videoUrl, this.recomendedSites, this.id);
      this.notifyUpdate.emit(this.messageToUpdate);      
    }else{
      swal('Some fields are missing values!');
    }
  }
  onDeleteItem(name: string){    
    console.log("delete");
    this.notifyDelete.emit(this.id);
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
