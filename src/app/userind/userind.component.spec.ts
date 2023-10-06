import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserindComponent } from './userind.component';

describe('UserindComponent', () => {
  let component: UserindComponent;
  let fixture: ComponentFixture<UserindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserindComponent]
    });
    fixture = TestBed.createComponent(UserindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
