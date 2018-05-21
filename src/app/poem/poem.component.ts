import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  public data;
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('poem').snapshotChanges();
    // this.items.subscribe(val => {
    //   console.log(val[0].payload.doc.id);
    //   this.data = val[0].payload.doc.data().title;
    // });
  }



  ngOnInit() {
  }

}
