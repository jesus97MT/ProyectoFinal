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
  public votesNeeded;

  constructor(
    private afs: AngularFirestore
  ) {    
   }

  ngOnInit() {
  }

  getVerses() {
    const idPoem = this.item.payload.doc.id;
    const verses = this.afs.collection('poem/').doc(idPoem).collection('nextVerse').snapshotChanges();
    this.verses = verses;
  }

  ngAfterViewInit() {
    this.getVerses();
  }

  setVotingSpinner(vote) {
    const votesNeeded = this.item.payload.doc.data().necessaryVotes;
    this.votesNeeded = votesNeeded;
    return 100 * vote / votesNeeded;
  }

  voteVerse(verse) {
    const idVerse = verse.payload.doc.id;
    const verseText = verse.payload.doc.data().verse;
    const newVotes = verse.payload.doc.data().votes + 1; 
    const idPoem = this.item.payload.doc.id;
    const verses = this.afs.collection('poem/').doc(idPoem).collection('nextVerse').doc(idVerse);
    verses.update({"votes": newVotes});
    this.votingIsOver(idVerse, idPoem, newVotes, verseText);

  }


  
  haveYouVoted() {

  }
  
  votingIsOver(idVerse, idPoem, verseVotes, verseText) {
    const poemVotes = this.item.payload.doc.data().necessaryVotes;

    if (poemVotes === verseVotes) {
      const poem = this.afs.collection('poem').doc(idPoem).collection('verses');

      poem.add({'verse': verseText, 'date': Date.now()});

      const toDelete = this.afs.collection('poem/').doc(idPoem).collection('nextVerse');
      toDelete.stateChanges().subscribe(e => e.forEach(e => {
        toDelete.doc(e.payload.doc.id).delete()
      }));
    }
  }

}
