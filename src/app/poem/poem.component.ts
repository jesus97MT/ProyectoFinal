import { Component, OnInit, Directive, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserdataService } from '../services/userdata.service'


@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})

@Directive({
  selector: '[onCreate]'
})

export class PoemComponent implements OnInit {

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();


  public data;
  public userData = new BehaviorSubject({});
  public userUid: string;
  public emailUser: string;
  public ownPoem: boolean = false;
  
  
  
  
  items: Observable<any[]>;
  constructor (
    public db: AngularFirestore,
    public _userDataService: UserdataService,
    private cdRef:ChangeDetectorRef,
  ) {
    this.data = db.collection('poem', ref => ref.orderBy('date', 'desc')).snapshotChanges();
    this._userDataService.getUserData().subscribe(data => {
      this.userData.next(data);
      this.emailUser = this.userData.getValue()['email'];
      this.userUid = this.userData.getValue()['uid'];
      this.ownPoem = false;
    });
    // this.items.subscribe(val => {
    //   console.log(val[0].payload.doc.id);
    //   this.data = val[0].payload.doc.data().title;
    // });
  }



  ngOnInit() {
    this.cdRef.detectChanges();
  }

  ngAfterViewChecked() {
  }


 

}
