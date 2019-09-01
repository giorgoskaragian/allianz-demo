import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressInfoComponent } from './user-address-info.component';

describe('UserAddressInfoComponent', () => {
  let component: UserAddressInfoComponent;
  let fixture: ComponentFixture<UserAddressInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddressInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
