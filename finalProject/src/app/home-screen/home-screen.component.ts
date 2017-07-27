import { Component, OnInit } from '@angular/core';
import {PostsService } from '../ServerCommunication/Communication-GetFirstPage';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
  providers: [PostsService]
  // inputs: [`currentPost`],
  // host: {
  //   '[color]':'color'    
  // }
})
export class HomeScreenComponent implements OnInit {
  public name: any;
  public template: any;
  public timeToShow: any;
  public location: any;
  public textInputs: any;
  public imageInputs: any;
  public price: any;
  public currentPost: any;
  public video: any;
  public links: any;

  pic: any;
  //commercials;
  
   results: string[];

  constructor(private _postService: PostsService, private http: HttpClient){
    

  }  
  

  ngOnInit() {
    //this.commercials = this._postService.getAllPosts()[0];
    this.location = "Israel";
    this.template = "a.temp";
    this.timeToShow = "5000";
    this.textInputs = ["Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x13 inch pan.", 
                      "In a large bowl, beat together eggs, oil, white sugar and 2 teaspoons vanilla. Mix in flour, baking soda, baking powder, salt and cinnamon. Stir in carrots. Fold in pecans. Pour into prepared pan.",
                    "Bake in the preheated oven for 40 to 50 minutes, or until a toothpick inserted into the center of the cake comes out clean. Let cool in pan for 10 minutes, then turn out onto a wire rack and cool completely.",
                  "To Make Frosting: In a medium bowl, combine butter, cream cheese, confectioners' sugar and 1 teaspoon vanilla. Beat until the mixture is smooth and creamy. Stir in chopped pecans. Frost the cooled cake."];
    this.imageInputs = ["http://img.taste.com.au/pHO4QueR/w643-h428-cfill/taste/2016/11/chocolate-celebration-cake-85607-1.jpeg", 
                      "https://www.puregelato.com.au/images/cake/Choc-Drip-Gelato-Cake.jpg"];
    this.price = "250";
    this.name = "COOKING ADD";
    this.video = "https://www.youtube.com/embed/23qMd90xcaY";
    this.links = ["http://www.bbc.co.uk/food/recipes", "http://www.mako.co.il/food-recipes/"];
    
   
    // this.http.get<ItemsResponse>('/data.json', {observe: 'response'}).subscribe(data => {
    // // Read the result field from the JSON response.      
    // this.template = data.body.temp;
    // this.timeToShow =  data.body.time_to_show;
    // this.textInputs =  data.body.textInputs;
    // this.imageInputs =  data.body.imageInputs;
    // this.price =  data.body.price;
    // this.name =  data.body.name;
    // this.location =  data.body.location;
    // });
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