import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-showtable2',
  templateUrl: './showtable2.component.html',
  styleUrls: ['./showtable2.component.css']
})
export class Showtable2Component implements OnInit {
  tableData: any;
  totalRecords: any;
  pageSize = 30;

  constructor(private Service: ServiceService) {}

  ngOnInit(): void {
    this.loadData(1);
    this.Service.getData().subscribe((res)=>{
      this.totalRecords=res.posts.length
    })
  }

  loadData(page: number): void {
    this.Service.getDataLazy(page, this.pageSize).subscribe((result:any) => {
      this.tableData = result;

    });
  }

  loadLazy(event: LazyLoadEvent): void {
    const page = ((event.first ?? 0) / this.pageSize) + 1;
    this.loadData(page);
  }
}
