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
    var getUrl = 'http://172.18.0.3:8080/api/list';
    console.log("Get users from the URL: %s", getUrl);
    return this.http.get(getUrl);
  }

  /* Uses http.post() to submit data from a single API endpoint */
  submitUser(data) {
    var postUrl = 'http://172.18.0.3:8080/api/insert';
    console.log("Submitting the user to the URL: %s", postUrl);
    return this.http.post(postUrl, data);
  }
}
