import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MessagesService} from '../Messages.service';

@Component({
  selector: 'app-my-aside-search',
  templateUrl: './my-aside-search.component.html',
  styleUrls: ['./my-aside-search.component.css'],
  providers: [MessagesService]
})
export class MyAsideSearchComponent implements OnInit {

  private data: any
  private error: any
  baseUrl: string = 'https://www.youtube.com/embed/';
  private url: any
  private showVideo: boolean

  constructor(private MessagesService: MessagesService,
              private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + 'hf9k3Xb5x6Y');
  }

  ngOnInit() {
    this.MessagesService.getVeideosIds('Commercial').subscribe(
      (data) => this.data = data,
      (err) => this.error = err);
    this.showVideo = false;
  }

  onSearchClick(searchQuery){
    this.MessagesService.getVeideosIds(searchQuery).subscribe(
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
