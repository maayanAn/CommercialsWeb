import { Component, OnInit } from '@angular/core';
import {PostsService} from '../ServerCommunication/Communication-GetFirstPage'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-my-aside-search',
  templateUrl: './my-aside-search.component.html',
  styleUrls: ['./my-aside-search.component.css'],
  providers: [PostsService]
})
export class MyAsideSearchComponent implements OnInit {

  private data: any
  private error: any
  baseUrl: string = 'https://www.youtube.com/embed/';
  private url: any
  private showVideo: boolean

  constructor(private _httpService: PostsService,
              private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + 'hf9k3Xb5x6Y');
  }

  ngOnInit() {
    this._httpService.getVeideosIds('Commercial').subscribe(
      (data) => this.data = data,
      (err) => this.error = err);
    this.showVideo = false;
  }

  onSearchClick(searchQuery){
    this._httpService.getVeideosIds(searchQuery).subscribe(
      (localData) => this.onVideoArrives(localData),
      (err) => this.error = err);
  }
  onVideoArrives(localData){
    if(localData) {
      this.data = localData;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.data.items[0].id.videoId);
      this.showVideo = true;
    }
  }

}
