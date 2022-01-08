import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thd-io-frontend';
  siteLanguage: string = 'English';
  router: string;

  constructor(private _router: Router){
          this.router = _router.url; 
    }

  ngOnInit(): void {
  }

}

