import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { BilllistComponent } from '.././billlist/billlist.component';
import { DataService } from '.././bill/dataservice';
import {billdetail} from ".././bill/billdetail";

@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.component.html',
  styleUrls: ['./billdetails.component.css']
})
export class BilldetailsComponent implements OnInit {

  isopen:boolean = true;
  billername: any;
  billname: any;
  address: any;
  timedate: any;
  billprice: any;
  useremail: any;
  billimage:any;
  billdata: billdetail;
  
  constructor(private route: ActivatedRoute,public dataservice: DataService) {
    
    this.billdata = this.dataservice.billdata; 
    this.billername =  "BillerName:   " + this.billdata.billername;
    this.billname =  "BillName:   " + this.billdata.billname;
    this.address =  "Address:   " + this.billdata.address;
    var str = this.billdata.timedate.replace('T', ' ')
    this.timedate = "Time&Date:   " + str.replace('Z', ' ');
    this.billprice =  "Amount:   " + this.billdata.billprice;
    this.useremail = "Emailid:  " +  this.billdata.useremail;
   }
  

  ngOnInit() {
  }

  //method for side bar open close method
  openNav() {
        if(this.isopen)
        {
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
          this.isopen =false;
        }
        else
        {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.marginLeft = "0";
          this.isopen =true;
        }
      }

}
