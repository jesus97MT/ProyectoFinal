import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-main-poem',
  templateUrl: './main-poem.component.html',
  styleUrls: ['./main-poem.component.css']
})
export class MainPoemComponent implements OnInit {
  @Input() item;
  @Input() userUid;
  @Input() emailUser;
  public verse:string;
  public isNewVerse =  new BehaviorSubject({});
  public ownPoem: boolean;
  public fullPoem;
  

  constructor(
    private afs: AngularFirestore,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.isFirstVerse(this.item.payload.doc.id);
    this.getFullPoem();

  }

  isOwnPoem(poemUserId) {
    if (poemUserId === this.userUid) {
      this.ownPoem = true;
      return true;
    } else {
      this.ownPoem = false;
      return false;
    }
  }

  upVerse (item) {
    if (this.verse) {
      const poems = this.afs.collection('poem/').doc(item).collection('nextVerse');
      poems.doc(this.userUid).set({'verse': this.verse, 'votes': 0, 'author': this.emailUser });
    }
  }

  isFirstVerse(item) {
    const poems = this.afs.collection('poem/').doc(item).collection('nextVerse');
    poems.doc(this.userUid).snapshotChanges().subscribe(item => item.payload.exists ? this.isNewVerse.next(false) : this.isNewVerse.next(true));
  }

  getFullPoem() {
    const poemId = this.item.payload.doc.id;
    this.fullPoem = this.afs.collection('poem').doc(poemId).collection('verses', ref => ref.orderBy('date', 'asc')).snapshotChanges()
  }

}
