import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '.././services/webservice'
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as Constant from '.././services/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminDict: any;
  password: any;
  emailid: any;
  token = "";
  adminDetail: any;
  dict: any;
  constructor(private router: Router, private webservice: WebService) {
  }

  ngOnInit() {
  }

//method for admin login
  loginbtnPressed()
   {
      this.adminDict = {
        "emailid": this.emailid,
        "password": this.password,
        "token": this.token,
      }

    //webservice
    this.webservice.loginadmin(this.adminDict)
      .subscribe(
      data => {
        this.dict = data;
        this.emailid = null;
        this.password = null;
        if (this.dict.code == 200) {
          this.adminDetail = this.dict.data;
          localStorage.setItem("token", this.adminDetail.token);
          this.router.navigateByUrl('/dashboard');
        }
        else {
          this.dict = data;
          alert(this.dict.data)
        }
        return true;
      },
      error => {
        alert(JSON.stringify(error))
        console.error("Error saving food!", error);
        return Observable.throw(error);
      }
      );
  }
}
