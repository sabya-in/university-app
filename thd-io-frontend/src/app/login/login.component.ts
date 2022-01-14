import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from "../model/user";
import { Emitters } from '../emitter/emitter';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticated = false || Boolean(localStorage.getItem('uname'));
  registered = false;
  message = '';
  username = localStorage.getItem('uname');
  form: FormGroup;

  //private _user$: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  )
  {
    this.form = this.fb.group({
      name: ['', Validators.required],
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
    Emitters.createProfile.subscribe(
      (reg: boolean) => {
        this.registered = reg;
      }
    );
  }

  submit(): void {
    this.http.post("http://localhost:3000/users/login", this.form.getRawValue(), {
      withCredentials: true
    })
      .subscribe(res => {
          let logindata = <User> JSON.parse(JSON.stringify(res));
          if (logindata.success) {
            Emitters.authEmitter.emit(true);
            localStorage.setItem('token', logindata.token);
            localStorage.setItem('uname', logindata.user.name);
            this.username = logindata.user.name;
          } else {
            Emitters.authEmitter.emit(false);
            this.form = this.fb.group({
              name: ['', Validators.required],
              username: ['', Validators.email],
              password: ['', Validators.required]
            });
          }
        },
        err => {
          Emitters.authEmitter.emit(false);
          this.form = this.fb.group({
            name: ['', Validators.required],
            username: ['', Validators.email],
            password: ['', Validators.required]
          });
        }
      );
  }

  register(): void {
    console.log(this.form.getRawValue());
    this.http.post("http://localhost:3000/users/register", this.form.getRawValue(), {
      withCredentials: true
    })
      .subscribe(res => {
          Emitters.createProfile.emit(true);
          this.message = JSON.parse(JSON.stringify(res))['msg'];
        },
        err => {
          Emitters.createProfile.emit(false);
        }
      );
  }

  logout(): void {
    Emitters.authEmitter.emit(false);
    this.authenticated = false;
    this.form = this.fb.group({
      name: ['', Validators.required],
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