import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private news: NewsService) { }
  articles : News[] = [];


  ngOnInit(): void {
    this.news.getNews().subscribe(data => {
      let res = JSON.parse(JSON.stringify(data));
      this.articles = res;
      console.log("articles : " , this.articles);
    });

  }

}
