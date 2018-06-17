import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPoemComponent } from './main-poem.component';

describe('MainPoemComponent', () => {
  let component: MainPoemComponent;
  let fixture: ComponentFixture<MainPoemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPoemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
