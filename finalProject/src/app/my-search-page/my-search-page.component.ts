import { Component, OnInit } from '@angular/core';
import {PostsService} from '../ServerCommunication/Communication-GetFirstPage'
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-my-search-page',
  templateUrl: './my-search-page.component.html',
  styleUrls: ['./my-search-page.component.css'],
  providers: [PostsService]
})
export class MySearchPageComponent implements OnInit {

  private data: any
  private error: any
  baseUrl: string = 'https://www.youtube.com/embed/';
  private url: any
  private showVideo: boolean

  private vid1Url: any
  private vid2Url: any
  private vid3Url: any
  private vid4Url: any
  private vid5Url: any

  constructor(
    private _httpService: PostsService,
    private sanitizer: DomSanitizer) {
    this.vid1Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + '-Pg819il8lY');
    this.vid5Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + '-Pg819il8lY');
    this.vid4Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + '-Pg819il8lY');
    this.vid3Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + '-Pg819il8lY');
    this.vid2Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + '-Pg819il8lY');

  }

  ngOnInit() {
    this.showVideo = false;
  }

  onSearchClick(searchQuery){
    this._httpService.get5VeideosIds(searchQuery).subscribe(
      (data) => this.onVideoArrives(data),
      (err) => this.error = err);
  }

  onVideoArrives(localData){
    if(localData) {
      this.data = localData;
      this.vid1Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.data.items[0].id.videoId);
      this.vid2Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.data.items[1].id.videoId);
      this.vid3Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.data.items[2].id.videoId);
      this.vid4Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.data.items[3].id.videoId);
      this.vid5Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.data.items[4].id.videoId);
      this.showVideo = true;
    }
  }

}
