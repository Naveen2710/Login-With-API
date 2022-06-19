import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detailData: any;
  detailArray: any;
  id:any;
  constructor( private api:ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.api.detailData(this.id).subscribe((data) => {
      this.detailArray = data;
      this.detailData = this.detailArray[0]
    } )
    
  }

}
