import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {PostsService } from '../ServerCommunication/Communication-GetFirstPage';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
  providers: [PostsService]
})

export class HomeScreenComponent implements OnInit{
  @ViewChild('myCanvas') canvasRef: ElementRef;
  @ViewChild('myLineCanvas') canvasLineRef: ElementRef;
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

  pic: any;
  //commercials;
  
   results: string[];

  constructor(private _postService: PostsService, 
              private http: HttpClient){}

  ngOnInit() {
    // temp
    //this.commercials = this._postService.getAllPosts()[0];
    this.location = "Israel";
    this.color = "AntiqueWhite";
    this.timeToShow = "5000";
    this.textInputs = ["Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x13 inch pan.", 
                      "In a large bowl, beat together eggs, oil, white sugar and 2 teaspoons vanilla. Mix in flour, baking soda, baking powder, salt and cinnamon. Stir in carrots. Fold in pecans. Pour into prepared pan.",
                    "Bake in the preheated oven for 40 to 50 minutes, or until a toothpick inserted into the center of the cake comes out clean. Let cool in pan for 10 minutes, then turn out onto a wire rack and cool completely.",
                  "To Make Frosting: In a medium bowl, combine butter, cream cheese, confectioners' sugar and 1 teaspoon vanilla. Beat until the mixture is smooth and creamy. Stir in chopped pecans. Frost the cooled cake."];
    this.imageInputs = ["http://img.taste.com.au/pHO4QueR/w643-h428-cfill/taste/2016/11/chocolate-celebration-cake-85607-1.jpeg", 
                      "https://www.puregelato.com.au/images/cake/Choc-Drip-Gelato-Cake.jpg"];
    this.price = "250";
    this.name = "COOKING ADD";
    this.videoUrl = "https://www.youtube.com/embed/23qMd90xcaY";
    this.recomendedSites = ["http://www.bbc.co.uk/food/recipes", "http://www.mako.co.il/food-recipes/"];
    
    // Ajax call from server
    // this.http.get<ItemsResponse>('/data.json', {observe: 'response'}).subscribe(data => {
    // // Read the result field from the JSON response.      
    // this.color = data.body.color;
    // this.timeToShow =  data.body.time_to_show;
    // this.textInputs =  data.body.textInputs;
    // this.imageInputs =  data.body.imageInputs;
    // this.price =  data.body.price;
    // this.name =  data.body.name;
    // this.location =  data.body.location;
    // });

    
     //setInterval(() => { this.testInterval(); }, this.timeToShow);
     //setInterval(() => { this.ngOnInit(); }, this.timeToShow);

    Observable.interval(this.timeToShow).subscribe(x => {
      this.testInterval();
    });

    this.canvasHeader();
    this.canvasLine();    
  }
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