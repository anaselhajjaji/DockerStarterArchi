import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }
  /* Uses http.get() to load data from a single API endpoint */
  getUsers() {
    var getUrl = 'http://localhost:8080/api/list';
    console.log("Get users from the URL: %s", getUrl);
    return this.http.get(getUrl);
  }

  /* Uses http.post() to submit data from a single API endpoint */
  submitUser(data) {
    var postUrl = 'http://localhost:8080/api/insert';
    console.log("Submitting the user to the URL: %s", postUrl);
    return this.http.post(postUrl, data);
  }

  /* Uses http.post() to submit data from a single API endpoint */
  cipherUser(data) {
    var postUrl = 'http://localhost:8081/api/encryption';
    console.log("Submitting the user to the URL: %s", postUrl);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'text'
    };

    return this.http.post(postUrl, JSON.stringify(data), httpOptions);
  }
}
