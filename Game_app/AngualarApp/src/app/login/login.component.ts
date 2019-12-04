import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user:string;
password:string;  

  constructor() { }

  ngOnInit() {
  }

  LoginUser()
  {
    if(this.user == "admin" && this.password == "abc123")
    {
      console.log("Successfully Logged In");
    }
  }

}
