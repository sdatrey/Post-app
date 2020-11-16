import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
      confirm: new FormControl('', [Validators.required])
    });
  }
  // tslint:disable-next-line:typedef
  submit(){
    console.log(this.signup.value);
    if (this.signup.value.password !== this.signup.value.confirm ){
      return alert('Your credentials are wrong');
    }
  }
}
