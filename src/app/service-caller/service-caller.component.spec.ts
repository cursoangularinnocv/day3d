import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCallerComponent } from './service-caller.component';

describe('ServiceCallerComponent', () => {
  let component: ServiceCallerComponent;
  let fixture: ComponentFixture<ServiceCallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
