import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public email: string;
  public password: string;
  

  constructor(
    public authService: AuthService
  ) { }

  login() {
    this.authService.login(this.email, this.password);
    var user = auth().currentUser;
    if (user) {
      console.log(user);
    } else {
      console.log('disconected');
    }
  }
  

  ngOnInit() {
  }

}
