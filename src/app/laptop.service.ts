import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Laptop } from './models/laptop';
import { LAPTOPS } from './mock-laptops';
import { Observable, of, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/laptops';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getLaptops(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(this.url) ?? [];
  }

  getLaptop(id: number): Observable<Laptop> {
    return this.http.get<Laptop>(`${this.url}/${id}`) ?? {} as Laptop;
  }

  putLaptop(laptop: Laptop) {
    console.log();
    return this.http.put(`${this.url}/${laptop.id}`, laptop, this.httpOptions).subscribe();
  }

  delLaptop(id: number) {
    return this.http.delete(`${this.url}/${id}`).subscribe();
  }

}