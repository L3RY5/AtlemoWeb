import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisatieComponent } from './organisatie.component';

describe('OrganisatieComponent', () => {
  let component: OrganisatieComponent;
  let fixture: ComponentFixture<OrganisatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
