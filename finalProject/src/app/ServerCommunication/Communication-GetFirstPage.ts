import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  // Get all posts from the API
  getAllPosts() {
    return [
      {"name" : "First message",
        "textInputs" : ["This", "is", "the", "first"],
        "imageInputs" : ["a.jpg", "b.jpg"],
        "temp" : "A.html",
        "time_to_show" : "5000",
        "price": "200",
        "location": "Germany",
        "videoUrl": "www.youtube.com",
        "recomendedSites": [{"name" : "www.google.com"},{"name" : "www.walla.co.il"}]
      },

      {"name" : "Second message",
        "textInputs" : ["This", "is", "the", "second", "message", "with", "10", "line", "la", "la"],
        "imageInputs" : ["a.jpg"],
        "temp" : "B.html",
        "time_to_show" : "5000",
        "price": "200",
        "location": "New York",
        "videoUrl": "www.youtube.com",
        "recomendedSites": [{"name" : "www.google.com"},{"name" : "www.walla.co.il"}]
      },

      {"name" : "Third message",
        "textInputs" : [],
        "imageInputs" : [],
        "temp" : "C.html",
        "time_to_show" : "5000",
        "price": "400",
        "location": "Germany",
        "videoUrl": "www.youtube.com",
        "recomendedSites": [{"name" : "www.google.com"},{"name" : "www.walla.co.il"}]
      },

      {"name" : "Fourth message",
        "textInputs" : ["This", "is"],
        "imageInputs" : [],
        "temp" : "A.html",
        "time_to_show" : "5000",
        "price": "2100",
        "location": "France",
        "videoUrl": "www.youtube.com",
        "recomendedSites": [{"name" : "www.google.com"},{"name" : "www.walla.co.il"}]
      },

      {"name" : "Fifth message",
        "textInputs" : ["This", "is", "the", "fifth", "message", "with", "7 lines"],
        "imageInputs" : ["a.jpg", "b.jpg"],
        "temp" : "B.html",
        "time_to_show" : "5000",
        "price": "500",
        "location": "Russia",
        "videoUrl": "www.youtube.com",
        "recomendedSites": [{"name" : "www.google.com"},{"name" : "www.walla.co.il"}]
      },

      {"name" : "test",
        "textInputs" : ["This", "is", "the", "fifth", "message", "with", "7 lines"],
        "imageInputs" : ["a.jpg", "b.jpg"],
        "temp" : "B.html",
        "time_to_show" : "5000",
        "price": "200",
        "location": "China",
        "videoUrl": "www.youtube.com",
        "recomendedSites": [{"name" : "www.google.com"},{"name" : "www.walla.co.il"}]
      }
    ]
  }
}
