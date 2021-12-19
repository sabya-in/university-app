import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient,) { }

  getNews(){
    return this.http.get("http://localhost:3000/news/getNews");
  }
}
