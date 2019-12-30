import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeleidsplanComponent } from './beleidsplan.component';

describe('BeleidsplanComponent', () => {
  let component: BeleidsplanComponent;
  let fixture: ComponentFixture<BeleidsplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeleidsplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeleidsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
