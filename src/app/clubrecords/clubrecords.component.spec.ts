import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubrecordsComponent } from './clubrecords.component';

describe('ClubrecordsComponent', () => {
  let component: ClubrecordsComponent;
  let fixture: ComponentFixture<ClubrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
