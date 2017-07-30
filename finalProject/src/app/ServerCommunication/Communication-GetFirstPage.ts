import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  constructor(private _http:Http){

  }
  AllPosts = [{"name" : "First message",
    "textInputs" : ["This", "is", "the", "first"],
    "imageInputs" : ["a.jpg", "b.jpg"],
    "color" : "#0000FF",
    "time_to_show" : "5000",
    "price": "200",
    "location": "Germany",
    "videoUrl": "www.youtube.com",
    "recomendedSites": ["www.google.com","www.walla.co.il"]
  },

    {"name" : "Second message",
      "textInputs" : ["This", "is", "the", "second", "message", "with", "10", "line", "la", "la"],
      "imageInputs" : ["a.jpg"],
      "color" : "#0000FF",
      "time_to_show" : "5000",
      "price": "200",
      "location": "New York",
      "videoUrl": "www.youtube.com",
      "recomendedSites": ["www.google.com","www.walla.co.il"]
    },

    {"name" : "Third message",
      "textInputs" : [],
      "imageInputs" : [],
      "color" : "#0000FF",
      "time_to_show" : "5000",
      "price": "400",
      "location": "Germany",
      "videoUrl": "www.youtube.com",
      "recomendedSites": ["www.google.com","www.walla.co.il"]
    },

    {"name" : "Fourth message",
      "textInputs" : ["This", "is"],
      "imageInputs" : [],
      "color" : "#0000FF",
      "time_to_show" : "5000",
      "price": "2100",
      "location": "France",
      "videoUrl": "www.youtube.com",
      "recomendedSites": ["www.google.com","www.walla.co.il"]
    },

    {"name" : "Fifth message",
      "textInputs" : ["This", "is", "the", "fifth", "message", "with", "7 lines"],
      "imageInputs" : ["a.jpg", "b.jpg"],
      "color" : "#0000FF",
      "time_to_show" : "5000",
      "price": "500",
      "location": "Russia",
      "videoUrl": "www.youtube.com",
      "recomendedSites": ["www.google.com","www.walla.co.il"]
    },

    {"name" : "test",
      "textInputs" : ["This", "is", "the", "fifth", "message", "with", "7 lines"],
      "imageInputs" : ["a.jpg", "b.jpg"],
      "color" : "#0000FF",
      "time_to_show" : "5000",
      "price": "200",
      "location": "China",
      "videoUrl": "www.youtube.com",
      "recomendedSites": ["www.google.com","www.walla.co.il"]
    }]
  // Get all posts from the API
  getAllPosts() {
    return this.AllPosts;
  }
  addPost(name,texts,images,color,timeToShow,price,location,videoUrl,recomendedSites){
    this.AllPosts.push(this.convertToJson(name,texts,images,color,timeToShow,price,location,videoUrl,recomendedSites));
    console.log("post added");
    console.log(this.AllPosts);
  }

  convertToJson(name :string,texts :string[],images: string[],
                color :string,timeToShow: string,price: string,
                location :string, videoUrl :string, recomendedSites :string[]){
    let jsonObject= {
      "name": name,
      "textInputs": texts,
      "imageInputs": images,
      "color": color,
      "time_to_show": timeToShow,
      "price": price,
      "location": location,
      "videoUrl": videoUrl,
      "recomendedSites": recomendedSites
    }
    return jsonObject;
  }

  removePost(name: string){
    this.AllPosts=this.AllPosts.filter(item=>item.name != name);
  }

  getVeideosIds(query) {
    return this._http.get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&maxResults=1&q=` + query + '&key=AIzaSyARK43Ain6Zq4bzhagRgTxWxHoV0JSevtQ')
      .map(res => res.json());
  }
}
