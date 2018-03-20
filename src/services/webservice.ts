import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Injectable, Component, OnInit } from '@angular/core';
import * as Constant from '.././services/constant';

@Injectable()
export class WebService {

    private options: any;
    public storedToken: string;
    constructor(private _http: HttpClient) {
    }
    //login admin
    loginadmin(adminDict) {
        this.options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': "application/json" }) };
        let body = JSON.stringify(adminDict);
        return this._http.post(Constant.WEBSERVICES_URL + Constant.WEBSERVICES_USERADMIN, body, this.options);
    } 

    //userlist
    userlist() {
        this.storedToken = localStorage.getItem("token");
        this.options = { headers: new HttpHeaders({ 'Content-Type': 'x-www-form-urlencoded', 'Accept': "application/json", 'x-access-token': this.storedToken }) };
        return this._http.get(Constant.WEBSERVICES_URL + Constant.WEBSERVICES_USERLIST, this.options);
    }

    //billlist
    billlist(userDict) {
        this.storedToken = localStorage.getItem("token");
        this.options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': "application/json", 'x-access-token': this.storedToken }) };
        let body = JSON.stringify(userDict);
        return this._http.post(Constant.WEBSERVICES_URL + Constant.WEBSERVICES_GETBILL, body, this.options);
    }
}
