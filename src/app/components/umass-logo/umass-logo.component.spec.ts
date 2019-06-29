import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmassLogoComponent } from './umass-logo.component';

describe('UmassLogoComponent', () => {
  let component: UmassLogoComponent;
  let fixture: ComponentFixture<UmassLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmassLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmassLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
