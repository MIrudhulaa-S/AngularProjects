import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsLoginComponent } from './parents-login.component';

describe('ParentsLoginComponent', () => {
  let component: ParentsLoginComponent;
  let fixture: ComponentFixture<ParentsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
