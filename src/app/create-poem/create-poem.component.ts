import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserdataService } from '../services/userdata.service'
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

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
  
  constructor(
    public snackBar: MatSnackBar,
    public _userDataService: UserdataService,
    private afs: AngularFirestore
  ) {
    this._userDataService.getUserData().subscribe(data => {
      this.data.next(data);
    });
    
  }

  ngOnInit() {
  }

  uploadPoem() {
    if (this.title && this.firstVerse) {
      const poems = this.afs.collection('poem');
      if (this.privacity) {
        this.name = this.data.getValue()['email'];
        poems.add({'title' : this.title, 'firstVerse': this.firstVerse,
          'necessaryVotes': this.numVotes, 'author': this.name });
      } else {
        poems.add({'title' : this.title, 'firstVerse': this.firstVerse,
          'necessaryVotes': this.numVotes, 'author': this.alias });
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
      duration: 200000,
      panelClass: [classSnackBar]
    })
  }
}

