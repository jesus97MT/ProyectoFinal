import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public email: string;
  public password: string;
  public repeatPassword: string;
  

  constructor(
    public authService: AuthService
  ) { }

  createUser() {
    if( this.email && this.password && this.password === this.repeatPassword) {
      this.authService.createUser(this.email, this.password);
    }
  }

  ngOnInit() {
  }

}
