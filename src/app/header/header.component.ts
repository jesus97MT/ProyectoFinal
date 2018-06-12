import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  events = [];
  
  constructor(
    public authService: AuthService
  ) {
    auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('si');
      } else {
        console.log('no');
      }
    });
  }

  logout() {
    this.authService.logout();
  }


  ngOnInit() {
  }

}
