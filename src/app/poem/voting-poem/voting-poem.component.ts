import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-voting-poem',
  templateUrl: './voting-poem.component.html',
  styleUrls: ['./voting-poem.component.css']
})
export class VotingPoemComponent implements OnInit {
  @Input() item;
  @Input() userUid;
  public verses;

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {

  }

  getVerses() {
    const idPoem = this.item.payload.doc.id;
    const verses = this.afs.collection(`poem/`).doc(idPoem).collection('nextVerse').stateChanges();
    this.verses = verses;
  }

  ngAfterViewInit() {
    this.getVerses();
  }

}
