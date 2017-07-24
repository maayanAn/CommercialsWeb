import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-com',
  templateUrl: './add-new-com.component.html',
  styleUrls: ['./add-new-com.component.css']
})
export class AddNewComComponent implements OnInit {
  public name;
  public template;
  public timeToShow;
  public location;
  public textInputs;
  public imageInputs;
  public price;
  constructor() { }

  ngOnInit() {
  }

  OnSaveChanges(value: any){
    this.location = value.location;
    this.template = value.template
    this.timeToShow = value.timeToShow
    this.price = value.price
    this.imageInputs = value.imageInputs
    this.textInputs = value.textInputs
  }

}
