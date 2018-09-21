import { Component, Inject } from '@angular/core';
import { AppService } from './app.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  title = 'Users List App';
  displayedColumns: string[] = ['position', 'name'];
  data: any = []
  username: string

  constructor(public appService: AppService, public snackBar: MatSnackBar) { }

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
            this.openSnackBar("Failed to load users.", '');
          })
    } catch (e) {
      console.log(e);
    }
  }

  /* method to call post-api from app.service */
  submitUser(username) {
    console.log(username);
    
    try {
      let user = {
        uname: username
      }

      this.appService.submitUser(user)
        .subscribe(resp => {
          console.log(resp, "res");
        },
          error => {
            console.log(error, "error");
            this.openSnackBar("Failed to submit user.", '');
          })
    } catch (e) {
      console.log(e);
    }
  }

  /* method to call post-api from app.service */
  cipherUser(username) {
    console.log(username);
    try {
      this.appService.cipherUser(username)
        .subscribe(resp => {
          console.log(resp, "res");
          this.openSnackBar(resp.toString(), '');
        },
          error => {
            console.log(error, "error");
            this.openSnackBar("Failed to cipher user.", '');
          })
    } catch (e) {
      console.log(e);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
