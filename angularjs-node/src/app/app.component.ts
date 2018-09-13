import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'angularjs-node';

  data: any = []
  
  constructor(public appService: AppService) { }

  ngOnInit() {
    this.UsersPage();
  }

  /* method to call get-api from app.service */
  UsersPage() {
    try {
      this.appService.getUsers()
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
}
