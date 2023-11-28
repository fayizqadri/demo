import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'https://mocki.io/v1/072f4309-6b86-4ecc-b055-e16192d9f76a';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  getDataLazy(page: number, pageSize: number): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data: any) => {
        const posts = data.posts;

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const slicedData = posts.slice(start, end);

        return slicedData;
      })
    );
  }
}
