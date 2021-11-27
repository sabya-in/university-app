import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Emitters} from '../emitter/emitter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticated = false;
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
  }

}
