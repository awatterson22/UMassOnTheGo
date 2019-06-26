import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusLocComponent } from './campus-loc.component';

describe('CampusLocComponent', () => {
  let component: CampusLocComponent;
  let fixture: ComponentFixture<CampusLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
