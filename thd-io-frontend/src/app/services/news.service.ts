import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl = "http://localhost:3000/news/getNews";
  constructor(private httpClient: HttpClient) { }

  getNews(){
    return this.httpClient.get(this.newsUrl);
    console.log(this.httpClient.get(this.newsUrl))
  }
}
