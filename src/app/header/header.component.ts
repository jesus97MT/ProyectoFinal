import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { auth } from 'firebase/app';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { UserdataService } from '../services/userdata.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public auth = new BehaviorSubject({});
  public user


  events = [];
  
  constructor(
    public authService: AuthService,
    public _userDataService: UserdataService,
    private router: Router,
    private cdRef:ChangeDetectorRef,    
  ) {
    this.getAuth();

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['sign-in']);
  }


  ngOnInit() {
    this.getAuth();
    this.cdRef.detectChanges();    
  }

  getAuth() {
    this._userDataService.getUserData().subscribe(data => {
      if (data) {
        this.auth.next(true);
        this.user = data['email'] || '';
      } else {
        this.auth.next(false)
      }
    });
  }
}
