import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserdataService } from '../services/userdata.service'
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router }  from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-create-poem',
  templateUrl: './create-poem.component.html',
  styleUrls: ['./create-poem.component.css']
})
export class CreatePoemComponent implements OnInit {
  
  public numVotes: number = 3;
  public privacity: boolean = true;
  public title: string;
  public firstVerse: string;
  public alias: string;
  public name:string;
  public data = new BehaviorSubject({});
  public userUid: string;
  
  constructor(
    public snackBar: MatSnackBar,
    public _userDataService: UserdataService,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this._userDataService.getUserData().subscribe(data => {
      this.data.next(data);
      this.name = this.data.getValue()['email'];
      this.userUid = this.data.getValue()['uid'];
    });
    
  }

  ngOnInit() {
  }

  uploadPoem() {
    if (this.title && this.firstVerse) {
      const poems = this.afs.collection('poem');
      if (this.privacity) {
        poems.add({'title' : this.title, 'firstVerse': this.firstVerse,
          'necessaryVotes': this.numVotes, 'author': this.name,
          'poem': this.firstVerse ,idUser: this.userUid});
          this.router.navigate(['']);
      } else {
        if (this.alias) {
          poems.add({'title' : this.title, 'firstVerse': this.firstVerse,
            'necessaryVotes': this.numVotes, 'author': this.alias,
            'poem': this.firstVerse, idUser: this.userUid });
          this.router.navigate(['']);  
        } else {
          const text = 'Complete the field Alias';
          const option = 'OKAY :s';
          const classSnackBar = 'create-poem-snackbar-error';
          this.setSnackBar(text, option, classSnackBar);
        }
                 
      }
      
    } else {
      const text = 'Complete the fields';
      const option = 'OKAY :3';
      const classSnackBar = 'create-poem-snackbar-error';
      this.setSnackBar(text, option, classSnackBar);
    }
  }

  setSnackBar(text, option, classSnackBar) {
    this.snackBar.open(text, option, {
      duration: 2000,
      panelClass: [classSnackBar]
    })
  }
}

