import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public email: string;
  public password: string;
  

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.email, this.password);
    this.router.navigate(['/']);
  }
  

  ngOnInit() {
  }

}
