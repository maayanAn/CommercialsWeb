import { Component, OnInit } from '@angular/core';
import {PostsService } from '../ServerCommunication/Communication-GetFirstPage';

@Component({
  selector: 'app-all-com-view',
  templateUrl: './all-com-view.component.html',
  styleUrls: ['./all-com-view.component.css'],
  providers: [PostsService],
})
export class AllComViewComponent implements OnInit {

  commercials;
  constructor(private _postService: PostsService){}

  ngOnInit() {
    this.commercials = this._postService.getAllPosts();
  }
  onClick(value){
    console.log(value.srcElement.id);
  }
}
