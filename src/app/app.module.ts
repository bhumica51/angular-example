import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { HttpModule }    from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from '.././login/login.component';
import { DashboardComponent } from '.././dashboard/dashboard.component';
import { BilllistComponent } from '.././billlist/billlist.component';
import { BilldetailsComponent } from '.././billdetails/billdetails.component';
import { BilldataComponent } from '.././billdata/billdata.component';

//services
import { DataService } from '.././bill/dataservice';
import { PagerService } from '.././services/pagerservice'
import { WebService } from '.././services/webservice'
import {billdetail} from ".././bill/billdetail";
import * as Constant from '.././services/constant';

//routes
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'billist', component: BilllistComponent },
  { path: 'billdetails', component: BilldetailsComponent }  ,
  { path: 'billdata', component: BilldataComponent }  
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BilllistComponent,
    BilldetailsComponent,
    BilldataComponent
  ],
  imports: [
    HttpModule,
    ImageViewerModule,
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PagerService,WebService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
