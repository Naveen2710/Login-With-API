import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  listData: any;

  constructor( private api:ApiService, private http:HttpClient) { }

  ngOnInit(): void {
    this.api.listData().subscribe((data) => {
      this.listData = data;
      console.log(data)
      
    })
  }
}
