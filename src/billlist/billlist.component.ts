import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { WebService } from '.././services/webservice'
import { Router, NavigationExtras } from '@angular/router';
import { billdetail } from ".././bill/billdetail";
import { DataService } from '.././bill/dataservice';

@Component({
  selector: 'app-billlist',
  templateUrl: './billlist.component.html',
  styleUrls: ['./billlist.component.css']
})
export class BilllistComponent implements OnInit {

  isopen: boolean = true;
  emailid: any;
  billlists: any;
  billdetails: any;

  userDict: any;
  totalRec: number;
  page: number = 1;
  istableshow: boolean = false;
  dict: any;
  billdata: billdetail;

  constructor(private router: Router, private webservice: WebService, public dataservice: DataService) { }

  ngOnInit() {
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
  }

  // method for get all billlist realted to email-id
  getbilllist(emailid) {
    this.userDict = {
      "useremail": this.emailid,
    }
    //webservices
    this.webservice.billlist(this.userDict).subscribe(
      data => {
        this.istableshow = true;
        this.dict = data;
        if (this.dict.code == 200) {
          this.emailid = null;
          this.dict = data;
          this.billlists = this.dict.data;
          this.totalRec = this.billlists.length;
        }
        else {
          this.istableshow = false;
          this.emailid = null;
          this.billlists = null;
        }
        return true;
      },
      error => {
        alert(JSON.stringify(error))
        if (error.error.code == 401) {
          alert(JSON.stringify(error.error.message))
          this.router.navigateByUrl('/');
          return Observable.throw(error);
        }
        else if (error.error.code == 403) {
          alert(JSON.stringify(error.error.message))
        }
      }
    );
  }

  // method for show bill details for particular bill
  showbilldetails(billlist, idx) {
    this.billdata = billlist
    this.dataservice.billdata = this.billdata;
    this.router.navigateByUrl('/billdetails');
  }

}
