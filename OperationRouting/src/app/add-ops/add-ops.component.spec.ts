import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpsComponent } from './add-ops.component';

describe('AddOpsComponent', () => {
  let component: AddOpsComponent;
  let fixture: ComponentFixture<AddOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
