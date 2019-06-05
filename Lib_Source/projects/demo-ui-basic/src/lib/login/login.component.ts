import { Component, OnInit, Input } from '@angular/core';
import { LoginModel } from './login-model';

@Component({
  selector: 'demo-ui-basic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  loginModel = new LoginModel('', '');

  onClick(f_LoginIn) {
    alert(JSON.stringify(this.loginModel));
  }
  constructor() { }

  ngOnInit() {
  }

}
