import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup( {
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required])
    });
  }
  // tslint:disable-next-line:typedef
  submit(){
    if (this.loginForm.value.valid){
      return console.log(this.loginForm);
    }
  }

}
