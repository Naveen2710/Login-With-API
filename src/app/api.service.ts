import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'  
})
export class ApiService {

  loginUrl = `https://retoolapi.dev/B13laa/getusers`;
  listUrl =  `https://retoolapi.dev/GFHqAV/getemployees`;
  detailUrl = `https://retoolapi.dev/H2F0Ui/getemployedetail`;
  constructor( private http:HttpClient ) { }
  
  getPassword(userId:any, pass:any){
    return this.http.get(`${this.loginUrl}?user_id=${userId}&password=${pass}`)
  }

  listData() {
    return this.http.get(`${this.listUrl}`)
  }

  detailData(id: any) {
    return this.http.get(`${this.detailUrl}?id=${id}`);
  }

}
