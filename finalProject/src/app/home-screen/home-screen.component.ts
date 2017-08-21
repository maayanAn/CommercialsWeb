import { Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/Rx';
import {DomSanitizer} from '@angular/platform-browser';
import {MessagesService} from '../Messages.service';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
  providers: [MessagesService],
  inputs: [`allPost`]
})

export class HomeScreenComponent implements OnInit, OnDestroy{
  @ViewChild('myCanvas') canvasRef: ElementRef;
  @ViewChild('myLineCanvas') canvasLineRef: ElementRef;
  public id:any;
  public name: any;
  public color: any;
  public timeToShow: any;
  public location: any;
  public textInputs: any;
  public imageInputs: any;
  public price: any;
  public currentPost: any;
  public videoUrl: any;
  public recomendedSites: any;
  allPost: any;

  video: any = {id: 'Jfg39EWmQkw'};
  baseUrl: string = 'https://www.youtube.com/embed/';
  error: any;
  data: any;
  url: any;
  showVideo: boolean;
  conn;
  messages:any;
  commercialsToDisplay;
  pic: any;
  index = 0;
  //commercials;

   results: string[];

  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer,
              private MessagesService: MessagesService){
                 this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + "cWe5tbMo2lU");
              }

  ngOnInit() {
    // get all messages form server
    this.conn = this.MessagesService.getMessages().subscribe(message => {
      this.messages = message;
      console.log(this.messages[0]);
      this.setHomePage();

      this.authenticate_loop();

    })

    this.canvasHeader();
    this.canvasLine();
  }

  private authenticate_loop() {

      setInterval (() => {
        console.log("Hello from setInterval");
        this.setHomePage();
      }, 5000)

  }

  setHomePage(){

     this.allPost = this.messages[this.index];
      this.id = this.allPost._id;
      this.location = this.allPost.location;
      this.color = this.allPost.color;
      this.timeToShow = this.allPost.time_to_show;
      this.textInputs = this.allPost.textInputs;
      this.imageInputs = this.allPost.imageInputs;
      this.price = this.allPost.price;
      this.name = this.allPost.name;
      this.videoUrl = this.allPost.videoUrl;
      this.recomendedSites = this.allPost.recomendedSites;
      if (this.index < this.messages.length - 1)
        this.index++;
      else{
        this.index = 0;      
      }
  }

    ngOnDestroy() {}

  canvasLine = function(){
      // canvas line
     let c : CanvasRenderingContext2D =
     this.canvasLineRef.nativeElement.getContext("2d");

    // Create gradient
    var grd2 = c.createRadialGradient(183, 50, 108, 198, 60, 205);
    grd2.addColorStop(0, "grey");
    grd2.addColorStop(1, "white");

    // Fill with gradient
    c.fillStyle = grd2;
    c.fillRect(0, 5, 388, 5);
  }
   canvasHeader = function(){
      //canvas
    let ctx: CanvasRenderingContext2D =
    this.canvasRef.nativeElement.getContext('2d');

    // Create gradient
    var grd = ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");

    // Fill with gradient
    ctx.font = "30px Arial";
    ctx.strokeText("More Info",130,50);
   }
  // temp
  testInterval = function(){
    this.location = "France";
    this.template = "a.temp";
    this.timeToShow = "10000";
    this.textInputs = ["Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x13 inch pan.",
                      "In a large bowl, beat together eggs, oil, white sugar and 2 teaspoons vanilla. Mix in flour, baking soda, baking powder, salt and cinnamon. Stir in carrots. Fold in pecans. Pour into prepared pan.",
                    "Bake in the preheated oven for 40 to 50 minutes, or until a toothpick inserted into the center of the cake comes out clean. Let cool in pan for 10 minutes, then turn out onto a wire rack and cool completely.",
                  "To Make Frosting: In a medium bowl, combine butter, cream cheese, confectioners' sugar and 1 teaspoon vanilla. Beat until the mixture is smooth and creamy. Stir in chopped pecans. Frost the cooled cake."];
    this.imageInputs = ["http://img.taste.com.au/pHO4QueR/w643-h428-cfill/taste/2016/11/chocolate-celebration-cake-85607-1.jpeg",
                      "https://www.puregelato.com.au/images/cake/Choc-Drip-Gelato-Cake.jpg"];
    this.price = "250";
    this.name = "SPORTS ADD";
    this.video = "https://www.youtube.com/embed/23qMd90xcaY";
    this.links = ["http://www.bbc.co.uk/food/recipes", "http://www.mako.co.il/food-recipes/"];
    this.color = "LightBlue";
  }

  temp = function(){Observable.interval(2000 * 60).subscribe(x => {
      this.ngOnInit();
    });
  }

  changeBackground(): any {
    return { 'background-color': this.color };
}


  loadYouTubeVideo() {
    this.MessagesService.getVeideosIds(this.name).subscribe(
      (data) => this.onVideoArrives(data),
      (err) => this.error = err);
  }
  onVideoArrives(localData){
    if(localData) {
      this.data = localData;
      console.log('1');
      console.log(this.data);
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.data.items[0].id.videoId);
      this.showVideo = true;
    }
  }
}
interface ItemsResponse {
  name: string;
  textInputs : string;
  imageInputs : string;
  temp : string;
  time_to_show : string;
  price: string;
  location: string;
  videoUrl: string;
  recomendedSites: string;

}
