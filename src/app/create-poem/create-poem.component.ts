import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-poem',
  templateUrl: './create-poem.component.html',
  styleUrls: ['./create-poem.component.css']
})
export class CreatePoemComponent implements OnInit {
  public value:number = 3;
  public privacity:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
