import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  empUrl = 'http://localhost:8080/api/controller1/employee';

  constructor(private http: HttpClient) {}

  getEmployee(): Observable<any> {
    console.log(this.http.get(this.empUrl));
    return this.http.get(this.empUrl);
  }

  addEmployee(emp: any): Observable<any> {
    return this.http.post(this.empUrl + '/add', emp);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.empUrl + '/delete/' + id);
  }
}
