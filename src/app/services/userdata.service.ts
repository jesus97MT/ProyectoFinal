import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  public userData = new BehaviorSubject({});

  constructor() {
    auth().onAuthStateChanged(user => this.userData.next(user));
  }

  getUserData() {
    return this.userData;
  }
}
