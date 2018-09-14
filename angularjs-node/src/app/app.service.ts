import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }
  /* Uses http.get() to load data from a single API endpoint */
  getUsers() {
    return this.http.get('https://172.18.0.3:8080/api/list');
  }

  /* Uses http.post() to submit data from a single API endpoint */
  submitUser(data) {
    return this.http.post('https://172.18.0.3:8080/api/insert', data);
  }
}
