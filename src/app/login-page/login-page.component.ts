import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isUser =  false;
  userData: any;
  userId : any;
  password: any;
  toggle = false;

  constructor( private api: ApiService) { }
  
  ngOnInit(): void {
  }  
  
  email(user : any){
    this.userId = user.target.value;
  }
  
  pass(pass: any){
    this.password = pass.target.value;
  }
  
  login(){

    if(this.toggle){
      this.toggle = false;
    } else {
      this.toggle = true;
    }

    this.api.getPassword(this.userId, this.password).subscribe((data) => {
      this.userData = data;
      
      if(this.userData.length != 0 && this.toggle){
        this.isUser = true;
      }
      else {
        this.isUser = false;
      }
    });
  }

  output(){
    if(!this.toggle) {
      alert('Confirm Details');
    }
    else if(!this.isUser) {
      alert("Enter Correct Credentials")
    }
  }
}