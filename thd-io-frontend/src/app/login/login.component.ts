import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emitter/emitter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticated = false || Boolean(localStorage.getItem('uname'));
  username = localStorage.getItem('uname');
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  )
  {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  submit(): void {
    this.http.post("http://localhost:3000/users/login", this.form.getRawValue(), {
      withCredentials: true
    })
      .subscribe(res => {
          let logindata = JSON.parse(JSON.stringify(res));
          if (logindata["success"]) {
            Emitters.authEmitter.emit(true);
            localStorage.setItem('token', logindata["token"]);
            localStorage.setItem('uname', logindata["user"]["name"]);
          } else {
            Emitters.authEmitter.emit(false);
            this.form = this.fb.group({
              username: ['', Validators.email],
              password: ['', Validators.required]
            });
          }
        },
        err => {
          Emitters.authEmitter.emit(false);
          this.form = this.fb.group({
            username: ['', Validators.email],
            password: ['', Validators.required]
          });
        }
      );
  }

  logout(): void {
    Emitters.authEmitter.emit(false);
    this.authenticated = false;
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
    localStorage.setItem('token', '');
    localStorage.setItem('uname', '');
  }

  profile(): void {
    let jwt_token = localStorage.getItem('token');
    const localheaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${jwt_token}`
    });
    this.http.get('http://localhost:3000/users/profile')
    .subscribe(res => {
      console.log(res);
    },
    err => {
      console.log(err);
    });
  }
}