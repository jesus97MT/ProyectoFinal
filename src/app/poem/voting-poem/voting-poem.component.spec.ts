import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPoemComponent } from './voting-poem.component';

describe('VotingPoemComponent', () => {
  let component: VotingPoemComponent;
  let fixture: ComponentFixture<VotingPoemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingPoemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
