import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulOpsComponent } from './mul-ops.component';

describe('MulOpsComponent', () => {
  let component: MulOpsComponent;
  let fixture: ComponentFixture<MulOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulOpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
