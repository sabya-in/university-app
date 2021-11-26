import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  )
  {

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

}
