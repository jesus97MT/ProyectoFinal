import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoemComponent } from './create-poem.component';

describe('CreatePoemComponent', () => {
  let component: CreatePoemComponent;
  let fixture: ComponentFixture<CreatePoemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePoemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
