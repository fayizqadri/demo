import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {
  tableData:any;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((response)=>{
      this.tableData=response.posts
    })
  }

}

