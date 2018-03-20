import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { WebService } from '.././services/webservice'
import { Router } from '@angular/router';

import * as _ from 'underscore';

import { PagerService } from '.././services/pagerservice'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isopen: boolean = true;
  userlists: any;
  totalRec: number;
  page: number = 1;
  data: any = [];
  dict: any;
  istableshow: boolean = false;

  constructor(private _http: Http, private pagerService: PagerService, private webservice: WebService, private router: Router) {
    this.getUserList();
  }

  ngOnInit() {
  }

  //method for getting userlist
  private getUserList() {

    //webservice
    this.webservice.userlist().subscribe(
      data => {
        this.dict = data;
        if (this.dict.code == 200) {
          this.istableshow = true;
          this.data = data;
          console.log(this.data.data);
          this.userlists = this.data.data;
          this.totalRec = this.userlists.length;
          console.log(this.totalRec);
          console.log(this.page);
        }
        else {
          this.istableshow = false;
          alert(this.dict.data)
        }
        return true;
      },
      error => {
        if (error.error.code == 401) {
          alert(JSON.stringify(error.error.message))
          this.router.navigateByUrl('/');
          return Observable.throw(error);
        }
        else if (error.error.code == 403) {
          alert(JSON.stringify(error.error.message))
        }
      });
  }

  //method for side bar open close method
  openNav() {
    if (this.isopen) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      this.isopen = false;
    }
    else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      this.isopen = true;
    }

  // method for get all billlist realted to email-id
  }
  getbilllist(userlist) {
    localStorage.setItem("useremailid", userlist.emailid);
    this.router.navigateByUrl('/billdata');

  }
}
