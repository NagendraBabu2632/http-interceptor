import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateUserComponent } from './delate-user.component';

describe('DelateUserComponent', () => {
  let component: DelateUserComponent;
  let fixture: ComponentFixture<DelateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelateUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
